const qas = [
  { q: "How are referral fees handled?", a: "Referral fees are handled per transaction with transparent agreements and prompt payment after closing." },
  { q: "How quickly do you contact the client?", a: "We typically reach out within 24 hours of receiving a referral." },
  { q: "What areas do you serve?", a: "We serve Florida statewide with particular focus on major metro areas and relocation markets." },
  { q: "Do I need a referral agreement?", a: "We can work with standard referral agreements; we’ll confirm terms before engagement." },
  { q: "How do I track my referral?", a: "We provide regular updates via email and can share progress on request." },
];

export default function Faq() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {qas.map((qa) => (
          <details key={qa.q} className="rounded-lg border border-gray-100 p-4">
            <summary className="cursor-pointer text-sm font-medium">{qa.q}</summary>
            <div className="mt-2 text-sm text-neutral-600">{qa.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
