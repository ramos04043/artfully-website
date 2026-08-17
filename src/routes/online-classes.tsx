import { createFileRoute } from "@tanstack/react-router";
import {
  Btn,
  Card,
  PageHero,
  SectionHead,
  SiteLayout,
  WA_MESSAGES,
  WhatsAppBtn,
} from "@/components/site/site";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/online-classes")({
  component: OnlineClasses,
  head: () => ({
    meta: [
      { title: "Online Art Classes | Artfully" },
      {
        name: "description",
        content:
          "Guided online art classes for kids and adults with clear instruction, creative projects, and personal guidance.",
      },
      { property: "og:title", content: "Online Art Classes | Artfully" },
      {
        property: "og:description",
        content: "Join guided online art classes from the comfort of your home.",
      },
      { property: "og:url", content: "/online-classes" },
    ],
    links: [{ rel: "canonical", href: "/online-classes" }],
  }),
});

const STEPS = [
  "Send us an inquiry.",
  "Tell us what you want to learn.",
  "Receive class details and material requirements.",
  "Join your online art session.",
];

function OnlineClasses() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Online Classes" title="Create From Anywhere">
        <p>Join guided online art classes from the comfort of your home.</p>
        <p>
          Our online sessions are designed to provide clear instruction, creative projects, and
          personal guidance.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Btn to="/contact">Inquire About Online Classes</Btn>
          <WhatsAppBtn message={WA_MESSAGES.online} />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <SectionHead eyebrow="How It Works" title="Four Simple Steps" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Card key={s}>
                <span className="font-[family-name:var(--font-display)] text-3xl text-primary">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">{s}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHead center={false} eyebrow="Inquiry" title="Start Your Online Sessions">
            <p>Share your interests and we'll recommend the right online session for you.</p>
          </SectionHead>
          <InquiryForm defaultSubject="Online Classes" />
        </div>
      </section>
    </SiteLayout>
  );
}
