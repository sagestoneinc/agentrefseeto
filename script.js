const referralConfig = window.SEETO_REFERRAL_CONFIG || {};
const calendlyUrl = referralConfig.calendlyUrl || 'https://calendly.com/seetorealty/partnership-call';
const notificationEmail = referralConfig.notificationEmail || 'carlos@seetorealty.com';
const submissionEndpoint = referralConfig.submissionEndpoint || '';
const submissionFormat = referralConfig.submissionFormat || 'json';
const currentYear = document.querySelector('[data-current-year]');
const testimonials = Array.from(document.querySelectorAll('.testimonial'));
let testimonialIndex = 0;

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

document.querySelectorAll('.js-calendly-link').forEach((link) => {
  link.href = calendlyUrl;
});

function showTestimonial(nextIndex) {
  if (testimonials.length === 0) return;

  testimonials[testimonialIndex]?.classList.remove('active');
  testimonialIndex = (nextIndex + testimonials.length) % testimonials.length;
  testimonials[testimonialIndex]?.classList.add('active');
}

document.querySelector('[data-slider-prev]')?.addEventListener('click', () => showTestimonial(testimonialIndex - 1));
document.querySelector('[data-slider-next]')?.addEventListener('click', () => showTestimonial(testimonialIndex + 1));

if (testimonials.length > 1) {
  window.setInterval(() => showTestimonial(testimonialIndex + 1), 6500);
}

const referralForm = document.querySelector('[data-referral-form]');
const formStatus = document.querySelector('[data-form-status]');

function setStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = type ? `form-status ${type}` : 'form-status';
}

function referralEmailUrl(payload) {
  const subject = encodeURIComponent('New agent referral for Seeto Realty');
  const body = encodeURIComponent(Object.entries(payload).map(([key, value]) => `${key}: ${value}`).join('\n'));
  return `mailto:${notificationEmail}?subject=${subject}&body=${body}`;
}

async function submitReferral(payload) {
  if (!submissionEndpoint) {
    return { delivered: false, reason: 'missing-endpoint' };
  }

  const isFormSubmission = submissionFormat === 'form';
  const body = isFormSubmission ? new URLSearchParams(payload) : JSON.stringify(payload);
  const headers = isFormSubmission
    ? { 'Content-Type': 'application/x-www-form-urlencoded' }
    : { 'Content-Type': 'application/json' };

  const response = await fetch(submissionEndpoint, {
    method: 'POST',
    headers,
    body,
  });

  if (!response.ok) {
    throw new Error('Referral submission failed.');
  }

  return { delivered: true };
}

referralForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submitButton = referralForm.querySelector('button[type="submit"]');
  const formData = new FormData(referralForm);
  const payload = {
    source: 'Seeto Realty Agent Referral Program landing page',
    submittedAt: new Date().toISOString(),
    ...Object.fromEntries(formData.entries()),
  };

  submitButton.disabled = true;
  submitButton.textContent = 'Sending referral...';
  setStatus('', '');

  try {
    const result = await submitReferral(payload);

    if (!result.delivered) {
      window.location.href = referralEmailUrl(payload);
      setStatus('This GitHub Pages form needs a configured submission endpoint. We opened your email client so the referral can still be sent to Seeto Realty.', 'error');
      return;
    }

    referralForm.reset();
    setStatus('Thank you. Your referral was sent to Seeto Realty and a team member will follow up shortly.', 'success');
  } catch (error) {
    window.location.href = referralEmailUrl(payload);
    setStatus('We could not reach the configured referral endpoint, so we opened your email client as a backup.', 'error');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Send Referral to Seeto Realty';
  }
});
