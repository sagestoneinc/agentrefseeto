import Link from "next/link";
import MultiStepForm from "@/components/referrals/MultiStepForm";

export default function FinalCta() {
  return (
    <section id="contact" className="rounded-2xl bg-[#F7F7F7] p-8">
      <div className="container grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-semibold">Lets Build a Referral Partnership.</h2>
          <p className="mt-2 text-sm text-neutral-600">Submit a referral or schedule a quick partnership call to discuss a formal arrangement.</p>
          <div className="mt-4 flex gap-3">
            <Link href="#submit" className="inline-flex items-center justify-center rounded-md bg-[#C1121F] px-4 py-2 text-white">Submit Referral</Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-md border border-neutral-200 px-4 py-2">Schedule a Call</Link>
          </div>
        </div>

        <div id="submit">
          <MultiStepForm />
        </div>
      </div>
    </section>
  );
}
