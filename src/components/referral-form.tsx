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

const leadSchema = z.object({
  fullName: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  phone: optionalString.optional(),
  clientType: z.string().min(1, "Select what you need help with."),
  marketArea: z.string().min(1, "Select a market area."),
  timeline: z.string().min(1, "Select a timeline."),
  details: optionalString.optional(),
  consent: z.boolean().refine((value) => value === true, {
    message: "Consent is required to submit the form.",
  }),
});

type LeadValues = z.infer<typeof leadSchema>;

const clientTypes = [
  "Buying a home",
  "Selling a home",
  "Investing",
  "Foreclosure support",
  "Property management",
  "Other",
];

const marketAreas = [
  "Plano / Collin County",
  "Dallas-Fort Worth",
  "Houston / Greater Houston",
  "Texas investor markets",
  "Not sure yet",
];

const timelines = [
  "Ready now",
  "Within 30 days",
  "1 to 3 months",
  "Just researching",
];

const emailSubject = "New Seeto Realty website inquiry";

function buildMailto(email: string, payload: LeadValues) {
  const fieldLabels: Record<keyof LeadValues, string> = {
    fullName: "Full Name",
    email: "Email",
    phone: "Phone",
    clientType: "Help Needed With",
    marketArea: "Market Area",
    timeline: "Timeline",
    details: "Details",
    consent: "Consent",
  };

  const body = Object.entries(payload)
    .filter(([key]) => key !== "consent")
    .map(
      ([key, value]) => `${fieldLabels[key as keyof LeadValues]}: ${value}`
    )
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

  const form = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      clientType: "",
      marketArea: "",
      timeline: "",
      details: "",
      consent: false,
    },
  });

  const submissionEndpoint = process.env.NEXT_PUBLIC_REFERRAL_ENDPOINT ?? "";
  const notificationEmail =
    process.env.NEXT_PUBLIC_REFERRAL_EMAIL ?? REFERRAL_EMAIL;

  const onSubmit = async (values: LeadValues) => {
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
          message: "We opened your email client so your inquiry can be sent right away.",
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
          "Thank you. Seeto Realty received your inquiry and will follow up within one business day.",
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
      aria-describedby="lead-status"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" {...form.register("fullName")} />
          {form.formState.errors.fullName && (
            <p className="text-xs text-brand">
              {form.formState.errors.fullName.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-xs text-brand">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" {...form.register("phone")} />
        </div>
        <div className="grid gap-2">
          <Label>Help needed with</Label>
          <Controller
            control={form.control}
            name="clientType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  {clientTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.clientType && (
            <p className="text-xs text-brand">
              {form.formState.errors.clientType.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label>Market area</Label>
          <Controller
            control={form.control}
            name="marketArea"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a market" />
                </SelectTrigger>
                <SelectContent>
                  {marketAreas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.marketArea && (
            <p className="text-xs text-brand">
              {form.formState.errors.marketArea.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label>Timeline</Label>
          <Controller
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timing" />
                </SelectTrigger>
                <SelectContent>
                  {timelines.map((timeline) => (
                    <SelectItem key={timeline} value={timeline}>
                      {timeline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.timeline && (
            <p className="text-xs text-brand">
              {form.formState.errors.timeline.message}
            </p>
          )}
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="details">Project details</Label>
          <Textarea
            id="details"
            rows={4}
            placeholder="Tell us about your home search, listing plans, investment goals, or property management needs."
            {...form.register("details")}
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
              onCheckedChange={(checked) => field.onChange(Boolean(checked))}
            />
          )}
        />
        <Label className="text-sm leading-relaxed text-neutral-600">
          I agree to be contacted by Seeto Realty about this inquiry and
          understand the submission may be stored in our CRM.
        </Label>
      </div>
      {form.formState.errors.consent && (
        <p className="-mt-2 text-xs text-brand">
          {form.formState.errors.consent.message}
        </p>
      )}

      <div id="lead-status" aria-live="polite" className="min-h-6">
        {status.message && (
          <p
            className={`text-sm ${status.type === "success" ? "text-emerald-600" : "text-brand"}`}
          >
            {status.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="sm:flex-1">
          Request Consultation
          <Mail className="h-4 w-4" />
        </Button>
        <Button asChild variant="outline" className="sm:flex-1">
          <a href={`mailto:${notificationEmail}`}>Prefer email? Send details</a>
        </Button>
      </div>
    </form>
  );
}
