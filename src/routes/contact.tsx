import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  PHONE,
  PageHero,
  SiteLayout,
  WA_MESSAGES,
  WhatsAppBtn,
} from "@/components/site/site";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & Inquiries | Artfully" },
      {
        name: "description",
        content:
          "Send an inquiry about art classes, workshops, walk-in sessions, online classes, or events. Studio hours, phone, email and address.",
      },
      { property: "og:title", content: "Contact & Inquiries | Artfully" },
      {
        property: "og:description",
        content: "Let's create something together — send us an inquiry.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's Create Something Together">
        <p>
          Interested in classes, workshops, walk-in sessions, online classes, or events? Send us an
          inquiry and our team will get back to you.
        </p>
        <div className="pt-2">
          <WhatsAppBtn message={WA_MESSAGES.general} variant="solid" />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            {[
              { icon: Phone, label: "Phone", value: PHONE },
              { icon: Mail, label: "Email", value: EMAIL },
              { icon: MapPin, label: "Address", value: ADDRESS },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <Icon className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    {label}
                  </p>
                  <p className="mt-1 text-base">{value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Studio Hours
                </p>
                <p className="mt-1 text-base">Monday – Friday: 10:00 AM – 7:30 PM</p>
                <p className="text-base">Saturday – Sunday: 10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <InquiryForm defaultSubject="General Inquiry" />
        </div>
      </section>
    </SiteLayout>
  );
}
