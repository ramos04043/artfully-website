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

export const Route = createFileRoute("/workshops")({
  component: Workshops,
  head: () => ({
    meta: [
      { title: "Art Workshops & Masterclasses | Artfully" },
      {
        name: "description",
        content:
          "Special workshops and masterclasses in watercolour, portrait drawing, acrylics, clay, and mixed media. Inquire about availability.",
      },
      { property: "og:title", content: "Art Workshops & Masterclasses | Artfully" },
      {
        property: "og:description",
        content: "Discover workshops introducing new techniques, mediums, and creative experiences.",
      },
      { property: "og:url", content: "/workshops" },
    ],
    links: [{ rel: "canonical", href: "/workshops" }],
  }),
});

const WORKSHOPS = [
  "Watercolour Workshop",
  "Portrait Drawing Masterclass",
  "Acrylic Painting Session",
  "Clay & Texture Art",
  "Mixed Media Workshop",
];

function Workshops() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Workshops & Masterclasses" title="Explore Something New">
        <p>
          Discover special workshops and masterclasses designed to introduce new techniques,
          mediums, and creative experiences.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Btn to="/contact">Inquire Now</Btn>
          <WhatsAppBtn message={WA_MESSAGES.workshops} />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <SectionHead eyebrow="Sessions" title="Upcoming Workshop Themes" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WORKSHOPS.map((w) => (
              <Card key={w}>
                <h3 className="text-xl">{w}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  A guided one-time session with materials, demonstrations, and instructor support.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Btn to="/contact" variant="outline">
                    Inquire About Availability
                  </Btn>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHead center={false} eyebrow="Inquiry" title="Reserve Your Spot">
            <p>Send an inquiry and we'll share upcoming dates, timings, and what to bring.</p>
          </SectionHead>
          <InquiryForm defaultSubject="Workshops" />
        </div>
      </section>
    </SiteLayout>
  );
}
