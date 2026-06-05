"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Families Assisted" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
  { value: "5-Star", label: "Service Commitment" },
];

export default function Stats() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Why Florida Agents Trust Us</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <motion.div key={s.label} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 10, opacity: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl bg-gradient-to-r from-white to-[#F7F7F7] p-6 text-center shadow">
            <div className="text-3xl font-display text-[#C1121F]">{s.value}</div>
            <div className="mt-2 text-sm text-neutral-600">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
