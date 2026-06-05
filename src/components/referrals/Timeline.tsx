"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Submit Referral", desc: "Share the client details and context.", idx: 1 },
  { title: "We Contact Your Client", desc: "Our team reaches out within 24 hours.", idx: 2 },
  { title: "Client Buys or Sells", desc: "We manage the transaction end-to-end.", idx: 3 },
  { title: "Referral Fee Paid", desc: "Prompt, transparent fee processing.", idx: 4 },
];

export default function Timeline() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">How The Referral Process Works</h2>
      <div className="space-y-6">
        {steps.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C1121F]/10 text-[#C1121F]">{s.idx}</div>
            <div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-neutral-600">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
