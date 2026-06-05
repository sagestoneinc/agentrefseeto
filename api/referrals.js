const requiredFields = ['agentName', 'agentEmail', 'ownerName', 'ownerPhone', 'propertyType', 'consent'];

function json(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(payload));
}

async function postJson(url, payload, headers = {}) {
  if (!url) return { skipped: true };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook request failed with status ${response.status}`);
  }

  return { ok: true };
}

module.exports = async function referralHandler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, { message: 'Method not allowed' });
  }

  const payload = request.body || {};
  const missingFields = requiredFields.filter((field) => !payload[field]);

  if (missingFields.length > 0) {
    return json(response, 400, { message: 'Missing required referral fields.', missingFields });
  }

  const referral = {
    source: 'Seeto Realty Agent Referral Program landing page',
    submittedAt: new Date().toISOString(),
    ...payload,
  };

  const crmHeaders = process.env.CRM_WEBHOOK_TOKEN
    ? { Authorization: `Bearer ${process.env.CRM_WEBHOOK_TOKEN}` }
    : {};
  const emailHeaders = process.env.EMAIL_WEBHOOK_TOKEN
    ? { Authorization: `Bearer ${process.env.EMAIL_WEBHOOK_TOKEN}` }
    : {};

  await Promise.all([
    postJson(process.env.CRM_WEBHOOK_URL, referral, crmHeaders),
    postJson(process.env.EMAIL_NOTIFICATION_WEBHOOK_URL, {
      to: process.env.REFERRAL_NOTIFICATION_EMAIL || 'carlos@seetorealty.com',
      subject: `New property management referral: ${payload.ownerName}`,
      referral,
    }, emailHeaders),
  ]);

  return json(response, 200, { message: 'Referral submitted successfully.' });
};
