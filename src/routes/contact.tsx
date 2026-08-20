import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  PHONE,
  Btn,
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
      { title: "Contact Artfully | Art Classes in Salem" },
      {
        name: "description",
        content:
          "Contact Artfully for art classes in salem, upcoming workshops, walk-in activities or creative birthday parties.",
      },
      { property: "og:title", content: "Contact Artfully | Art Classes in Salem" },
      {
        property: "og:description",
        content: "Looking for art classes, workshops or creative activities? We'd love to help you find the right Artfully experience.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Contact Artfully">
        <p>
          Looking for art classes in salem, upcoming workshops, walk-in activities or a creative birthday party?
        </p>
        <p className="mt-3">
          We'd love to help you find the right Artfully experience.
        </p>
        <p className="mt-3">
          Send us an inquiry or chat with us on WhatsApp for information about classes, schedules, workshops, events and availability.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Btn to="#inquiry-form">Send an Inquiry</Btn>
          <WhatsAppBtn message={WA_MESSAGES.general} label="Chat on WhatsApp" />
        </div>
      </PageHero>

      <section className="section-pad" id="inquiry-form">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            {[
              { icon: Phone, label: "Phone / WhatsApp", value: PHONE },
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
                <p className="mt-1 text-base">Open 6 Days a Week: 11:00 AM – 9:00 PM</p>
                <p className="text-base">Closed only on Tuesdays</p>
              </div>
            </div>
          </div>
          <InquiryForm defaultSubject="General Inquiry" />
        </div>
      </section>
    </SiteLayout>
  );
}
