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
      { title: "Online Art Classes for Kids & Beginners | Artfully" },
      {
        name: "description",
        content:
          "Learn drawing and painting from home with Artfully online art classes for kids and beginners.",
      },
      { property: "og:title", content: "Online Art Classes for Kids & Beginners | Artfully" },
      {
        property: "og:description",
        content: "Guided online art sessions to practise techniques and complete creative projects from anywhere.",
      },
      { property: "og:url", content: "/online-classes" },
    ],
    links: [{ rel: "canonical", href: "/online-classes" }],
  }),
});

function OnlineClasses() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Online Classes" title="Online Art Classes for Kids & Beginners">
        <p>Learn drawing and painting from home with Artfully online art classes.</p>
        <p className="mt-3">
          Our guided online sessions help students practise techniques, complete creative projects and continue developing their artistic skills from anywhere.
        </p>
        <p className="mt-3">
          Suitable for kids, beginners and anyone who wants the flexibility of learning art online.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Btn to="/contact">Inquire About Online Classes</Btn>
          <WhatsAppBtn message={WA_MESSAGES.online} />
        </div>
      </PageHero>

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
