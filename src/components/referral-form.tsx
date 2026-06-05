"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { REFERRAL_EMAIL, REFERRAL_SOURCE } from "@/lib/constants";

const optionalString = z.union([z.string().min(1), z.literal("")]);

const referralSchema = z.object({
  agentName: z.string().min(2, "Enter the agent name."),
  agentEmail: z.string().email("Enter a valid agent email."),
  agentPhone: optionalString.optional(),
  ownerName: z.string().min(2, "Enter the owner name."),
  ownerEmail: z.union([z.string().email("Enter a valid owner email."), z.literal("")]),
  ownerPhone: z.string().min(7, "Enter a valid owner phone number."),
  propertyAddress: optionalString.optional(),
  propertyType: z.string().min(1, "Select a property type."),
  notes: optionalString.optional(),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "Consent is required to submit a referral.",
    }),
});

type ReferralValues = z.infer<typeof referralSchema>;

const propertyTypes = [
  "Single-family home",
  "Duplex / fourplex",
  "Small multifamily",
  "Condo / townhome",
  "Investor portfolio",
  "Luxury rental",
];

const emailSubject = "New agent referral for Seeto Realty";

function buildMailto(email: string, payload: ReferralValues) {
  const body = Object.entries(payload)
    .filter(([key]) => key !== "consent")
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const params = new URLSearchParams({
    subject: emailSubject,
    body,
  });

  return `mailto:${email}?${params.toString()}`;
}

export function ReferralForm() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const form = useForm<ReferralValues>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      agentName: "",
      agentEmail: "",
      agentPhone: "",
      ownerName: "",
      ownerEmail: "",
      ownerPhone: "",
      propertyAddress: "",
      propertyType: "",
      notes: "",
      consent: false,
    },
  });

  const submissionEndpoint = process.env.NEXT_PUBLIC_REFERRAL_ENDPOINT ?? "";
  const notificationEmail =
    process.env.NEXT_PUBLIC_REFERRAL_EMAIL ?? REFERRAL_EMAIL;

  const onSubmit = async (values: ReferralValues) => {
    setStatus({ type: "idle", message: "" });

    const payload = {
      ...values,
      source: REFERRAL_SOURCE,
      submittedAt: new Date().toISOString(),
    };

    try {
      if (!submissionEndpoint) {
        window.location.href = buildMailto(notificationEmail, values);
        setStatus({
          type: "error",
          message:
            "We opened your email client to send the referral while our secure form endpoint is configured.",
        });
        return;
      }

      const response = await fetch(submissionEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          "Thank you. Your referral was delivered to Seeto Realty and a team member will follow up within one business day.",
      });
    } catch {
      window.location.href = buildMailto(notificationEmail, values);
      setStatus({
        type: "error",
        message:
          "We could not reach the secure endpoint, so we opened your email client as a backup.",
      });
    }
  };

  return (
    <form
      className="grid gap-6"
      onSubmit={form.handleSubmit(onSubmit)}
      aria-describedby="referral-status"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="agentName">Agent name</Label>
          <Input id="agentName" {...form.register("agentName")} />
          {form.formState.errors.agentName && (
            <p className="text-xs text-brand">
              {form.formState.errors.agentName.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="agentEmail">Agent email</Label>
          <Input id="agentEmail" type="email" {...form.register("agentEmail")} />
          {form.formState.errors.agentEmail && (
            <p className="text-xs text-brand">
              {form.formState.errors.agentEmail.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="agentPhone">Agent phone</Label>
          <Input id="agentPhone" type="tel" {...form.register("agentPhone")} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ownerName">Owner name</Label>
          <Input id="ownerName" {...form.register("ownerName")} />
          {form.formState.errors.ownerName && (
            <p className="text-xs text-brand">
              {form.formState.errors.ownerName.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ownerEmail">Owner email</Label>
          <Input id="ownerEmail" type="email" {...form.register("ownerEmail")} />
          {form.formState.errors.ownerEmail && (
            <p className="text-xs text-brand">
              {form.formState.errors.ownerEmail.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ownerPhone">Owner phone</Label>
          <Input id="ownerPhone" type="tel" {...form.register("ownerPhone")} />
          {form.formState.errors.ownerPhone && (
            <p className="text-xs text-brand">
              {form.formState.errors.ownerPhone.message}
            </p>
          )}
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="propertyAddress">Property address</Label>
          <Input
            id="propertyAddress"
            {...form.register("propertyAddress")}
          />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label>Property type</Label>
          <Controller
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a property type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.propertyType && (
            <p className="text-xs text-brand">
              {form.formState.errors.propertyType.message}
            </p>
          )}
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="notes">Referral notes</Label>
          <Textarea
            id="notes"
            rows={4}
            placeholder="Timeline, property condition, owner goals, and best next step."
            {...form.register("notes")}
          />
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-soft/60 p-4">
        <Controller
          control={form.control}
          name="consent"
          render={({ field }) => (
            <Checkbox
              id="consent"
              checked={field.value}
              onCheckedChange={(value) => field.onChange(value === true)}
            />
          )}
        />
        <div className="grid gap-1">
          <Label htmlFor="consent">Referral consent</Label>
          <p className="text-xs text-muted-foreground">
            I have permission to share this referral with Seeto Realty Property
            Management.
          </p>
          {form.formState.errors.consent && (
            <p className="text-xs text-brand">
              {form.formState.errors.consent.message}
            </p>
          )}
        </div>
      </div>

      {status.message && (
        <div
          id="referral-status"
          className={`rounded-xl border px-4 py-3 text-sm font-medium ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-rose-200 bg-rose-50 text-rose-800"
          }`}
          aria-live="polite"
        >
          {status.message}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Submit A Referral
        </Button>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>Prefer email? We can route your referral manually.</span>
        </div>
      </div>
    </form>
  );
}
