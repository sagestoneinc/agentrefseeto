"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "Alex Ruiz", broker: "Sunshine Realty", quote: "Seeto made a complex relocation smooth. My client loved the service." },
  { name: "Dana Smith", broker: "Coastal Homes", quote: "Fast communication and fair referral handling—highly recommended." },
  { name: "Mark Johnson", broker: "Harbor Brokers", quote: "Professional team, excellent results for referred clients." },
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Testimonials</h2>
      <div className="space-y-4">
        {testimonials.map((t, i) => (
          <motion.blockquote key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-lg border-l-4 border-[#C1121F] bg-white p-6">
            <p className="text-neutral-800">“{t.quote}”</p>
            <footer className="mt-3 text-sm text-neutral-600">— {t.name}, {t.broker}</footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  );
}
