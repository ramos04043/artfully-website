import { createFileRoute } from "@tanstack/react-router";
import walkinImg from "@/assets/walkin.jpg";
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

export const Route = createFileRoute("/walk-in-studio")({
  component: WalkIn,
  head: () => ({
    meta: [
      { title: "Walk-In Art Studio | Creative Projects" },
      {
        name: "description",
        content:
          "Walk in, pick a project, choose your materials and create at your own pace — mini canvas, tote bag painting, pottery, clay art and more.",
      },
      { property: "og:title", content: "Walk-In Art Studio | Creative Projects" },
      {
        property: "og:description",
        content: "No commitment required — visit the studio and start creating.",
      },
      { property: "og:url", content: "/walk-in-studio" },
    ],
    links: [{ rel: "canonical", href: "/walk-in-studio" }],
  }),
});

const STEPS = [
  "Visit the Studio",
  "Choose a Project",
  "Pick Your Materials",
  "Start Creating",
  "Take Your Artwork Home",
];

const PROJECTS = [
  "Mini Canvas Painting",
  "Tote Bag Painting",
  "Pot Painting",
  "Bookmark Art",
  "Texture Art",
  "DIY Craft",
  "Clay Art",
];

function WalkIn() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Walk-In Studio" title="Walk In. Pick a Project. Start Creating.">
        <p>No long-term commitment required.</p>
        <p>
          Visit the studio, choose a project you love, pick your materials, and enjoy creating at
          your own pace.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <WhatsAppBtn message={WA_MESSAGES.walkin} label="Chat on WhatsApp Before Visiting" variant="solid" />
          <Btn to="/contact" variant="outline">
            Inquire Now
          </Btn>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <SectionHead eyebrow="How It Works" title="Five Easy Steps" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <Card key={s}>
                <span className="font-[family-name:var(--font-display)] text-3xl text-primary">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-medium">{s}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={walkinImg}
              alt="Walk-in studio table with mini canvases, tote bag and clay pots"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Projects</p>
            <h2 className="text-3xl sm:text-4xl">Pick What You'd Love to Make</h2>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {PROJECTS.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppBtn
                message={WA_MESSAGES.walkin}
                label="Chat on WhatsApp Before Visiting"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHead center={false} eyebrow="Inquiry" title="Planning a Visit?">
            <p>Send us a quick inquiry and we'll confirm availability and project options.</p>
          </SectionHead>
          <InquiryForm defaultSubject="Walk-In Studio" />
        </div>
      </section>
    </SiteLayout>
  );
}
