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
      { title: "Art Workshops in Salem | Artfully" },
      {
        name: "description",
        content:
          "Hands-on art and painting workshops in Salem. Explore watercolour, acrylics, portrait drawing, sketching, texture art, mixed media and clay art.",
      },
      { property: "og:title", content: "Art Workshops in Salem | Artfully" },
      {
        property: "og:description",
        content: "Discover workshops introducing new art techniques, mediums, and creative experiences.",
      },
      { property: "og:url", content: "/workshops" },
    ],
    links: [{ rel: "canonical", href: "/workshops" }],
  }),
});

const WORKSHOPS = [
  "Watercolour Painting",
  "Acrylic Painting",
  "Portrait Drawing",
  "Sketching",
  "Texture Art",
  "Mixed Media",
  "Clay Art",
  "Seasonal Creative Workshops",
];

function Workshops() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Workshops" title="Art Workshops in Salem">
        <p>
          Discover hands-on art and painting workshops in Salem at Artfully.
        </p>
        <p className="mt-3">
          Our workshops give kids, adults and creative enthusiasts the opportunity to explore new art forms without committing to regular classes.
        </p>
        <p className="mt-3">
          Whether you're a beginner or simply looking for something creative to do, Artfully workshops are designed to make learning art enjoyable and approachable.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Btn to="/contact">View Upcoming Workshops</Btn>
          <WhatsAppBtn message={WA_MESSAGES.workshops} />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <SectionHead eyebrow="Themes" title="Workshop Themes May Include" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORKSHOPS.map((w) => (
              <Card key={w}>
                <h3 className="text-lg font-semibold">{w}</h3>
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
