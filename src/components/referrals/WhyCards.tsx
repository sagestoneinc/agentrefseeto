import { Card } from "@/components/ui/card";

const items = [
  { title: "Local Florida Expertise", desc: "Experienced Florida agents and partners ready to serve your clients.", color: "bg-white" },
  { title: "Fast Referral Updates", desc: "We keep you informed at every step with direct, timely updates.", color: "bg-white" },
  { title: "Exceptional Client Experience", desc: "White-glove onboarding and concierge-level support for referred clients.", color: "bg-white" },
  { title: "Reliable Referral Compensation", desc: "Transparent, prompt handling of referral fees and agreements.", color: "bg-white" },
];

export default function WhyCards() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Why Agents Refer To Seeto Realty</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <Card key={it.title} className="group overflow-hidden border border-gray-100 p-6 hover:shadow-lg">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold group-hover:text-[#C1121F]">{it.title}</h3>
              <p className="text-sm text-neutral-600">{it.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
