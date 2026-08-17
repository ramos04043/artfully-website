import { useState } from "react";
import { Btn } from "./site";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvkpbkpl";

const SUBJECTS = [
  "Kids Classes",
  "Adult Classes",
  "Online Classes",
  "Workshops",
  "Walk-In Studio",
  "Birthday Parties",
  "Private Events",
  "General Inquiry",
];

export function InquiryForm({ defaultSubject }: { defaultSubject?: string }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (sent) {
    return (
      <div className="rounded-md border border-primary bg-accent/50 p-8 text-center">
        <p className="font-[family-name:var(--font-display)] text-xl">
          Thank you! We've received your inquiry and will get back to you shortly.
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary";
  const label = "text-xs tracking-widest text-muted-foreground uppercase";

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="space-y-4 rounded-md border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        try {
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });
          if (res.ok) {
            setSent(true);
          } else {
            const data = await res.json().catch(() => ({}));
            setError(
              data?.errors?.[0]?.message ??
                "Something went wrong while sending. Please try again.",
            );
          }
        } catch {
          setError("Network error. Please check your connection and try again.");
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" name="phone" required className={field} placeholder="Phone number" />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className={field} placeholder="Email address" />
      </div>
      <div>
        <label className={label} htmlFor="subject">
          Subject / Interest
        </label>
        <select id="subject" name="subject" defaultValue={defaultSubject} className={field}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Tell us what you're looking for" />
      </div>
      {error && (
        <div className="rounded-sm border border-destructive bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}
      <Btn type="submit" className="w-full" disabled={loading}>
        {loading ? "Sending…" : "Send Inquiry"}
      </Btn>
    </form>
  );
}
