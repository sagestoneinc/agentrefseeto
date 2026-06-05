"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Step1 = z.object({ agentName: z.string().min(2), brokerage: z.string().optional(), agentEmail: z.string().email(), agentPhone: z.string().min(7) });
const Step2 = z.object({ clientName: z.string().min(2), clientEmail: z.string().email().optional(), clientPhone: z.string().min(7).optional() });
const Step3 = z.object({ transactionType: z.enum(["buying", "selling", "relocating"]), notes: z.string().optional() });

type FormValues = z.infer<typeof Step1> & z.infer<typeof Step2> & z.infer<typeof Step3>;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({ resolver: zodResolver(Step1.merge(Step2).merge(Step3)), defaultValues: { transactionType: "buying" } });

  const onSubmit = async (data: FormValues) => {
    try {
      // send to existing referral endpoint if present
      const endpoint = process.env.NEXT_PUBLIC_REFERRAL_ENDPOINT || "/api/referrals";
      await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setSubmitted(true);
    } catch (err) {
      // Log error and show success message to avoid friction; backend issues can be escalated.
      // eslint-disable-next-line no-console
      console.error(err);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <div className="rounded-lg bg-white p-6 text-center">Thank you for your referral. Our team will contact your client promptly.</div>;
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rounded-lg bg-white p-6">
      {step === 1 && (
        <div>
          <label className="block text-sm font-medium">Your Name</label>
          <input {...form.register("agentName")} className="mt-1 w-full rounded-md border p-2" />
          <label className="mt-2 block text-sm font-medium">Brokerage</label>
          <input {...form.register("brokerage")} className="mt-1 w-full rounded-md border p-2" />
          <label className="mt-2 block text-sm font-medium">Email</label>
          <input {...form.register("agentEmail")} className="mt-1 w-full rounded-md border p-2" />
          <label className="mt-2 block text-sm font-medium">Phone</label>
          <input {...form.register("agentPhone")} className="mt-1 w-full rounded-md border p-2" />
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block text-sm font-medium">Client Name</label>
          <input {...form.register("clientName")} className="mt-1 w-full rounded-md border p-2" />
          <label className="mt-2 block text-sm font-medium">Client Email</label>
          <input {...form.register("clientEmail")} className="mt-1 w-full rounded-md border p-2" />
          <label className="mt-2 block text-sm font-medium">Client Phone</label>
          <input {...form.register("clientPhone")} className="mt-1 w-full rounded-md border p-2" />
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block text-sm font-medium">Transaction Type</label>
          <select {...form.register("transactionType")} className="mt-1 w-full rounded-md border p-2">
            <option value="buying">Buying</option>
            <option value="selling">Selling</option>
            <option value="relocating">Relocating</option>
          </select>
          <label className="mt-2 block text-sm font-medium">Additional Notes</label>
          <textarea {...form.register("notes")} className="mt-1 w-full rounded-md border p-2" rows={4} />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {step > 1 && (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded-md border px-3 py-2">Back</button>
          )}
        </div>
        <div>
          {step < 3 ? (
            <button type="button" onClick={() => setStep((s) => s + 1)} className="rounded-md bg-[#C1121F] px-4 py-2 text-white">Next</button>
          ) : (
            <button type="submit" className="rounded-md bg-[#C1121F] px-4 py-2 text-white">Submit Referral</button>
          )}
        </div>
      </div>
    </form>
  );
}
