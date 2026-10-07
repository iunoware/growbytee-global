"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import GradientButton from "@/src/components/ui/GradientButton";

const SHEETDB_URL = "https://sheetdb.io/api/v1/zmyecp0n9phlj";

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    const date = new Date();
    const data = {
      ...Object.fromEntries(new FormData(form)),
      newsletter_email_date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    };

    try {
      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) throw new Error("Request failed");

      toast.success("Subscribed successfully");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <p className="mb-3 text-base text-white/90">Subscribe to our newsletter</p>

      <form
        onSubmit={handleSubmit}
        className="flex max-w-sm flex-wrap items-center gap-3"
      >
        <input
          type="email"
          name="newsletter_email"
          placeholder="Enter your email"
          required
          className="min-w-0 flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-2 focus:outline-[#5851db]"
        />
        <GradientButton
          variant="background"
          type="submit"
          disabled={isSubmitting}
          className="disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Subscribe"}
        </GradientButton>
      </form>
    </div>
  );
}
