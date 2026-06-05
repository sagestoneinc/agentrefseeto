export default function BenefitsGrid() {
  const benefits = [
    "Referral fee opportunities",
    "White-glove service",
    "Dedicated communication",
    "Market expertise",
    "Relocation support",
    "Long-term partnership",
  ];

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Referral Program Benefits</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b} className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">{b}</h3>
            <p className="mt-2 text-sm text-neutral-600">{""}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
