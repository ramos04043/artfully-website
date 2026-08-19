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

export const Route = createFileRoute("/walk-in-studio")({
  component: WalkIn,
  head: () => ({
    meta: [
      { title: "Walk-In Art Studio in Salem | Artfully" },
      {
        name: "description",
        content:
          "Walk-in art studio in Salem. Create canvas painting, tote bags, pottery, clay art and DIY crafts at your own pace without regular classes.",
      },
      { property: "og:title", content: "Walk-In Art Studio in Salem | Artfully" },
      {
        property: "og:description",
        content: "No commitment required — visit the studio and start creating in Salem.",
      },
      { property: "og:url", content: "/walk-in-studio" },
    ],
    links: [{ rel: "canonical", href: "/walk-in-studio" }],
  }),
});

const PROJECTS = [
  "Canvas Painting",
  "Tote Bag Painting",
  "Pot Painting",
  "Bookmark Art",
  "Texture Art",
  "Clay Art",
  "DIY Crafts",
];

function WalkIn() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Walk-In Studio" title="Walk-In Art Studio in Salem">
        <p>Looking for something creative to do in Salem?</p>
        <p className="mt-3">
          Visit Artfully's walk-in art studio and create your own artwork without joining a regular class.
        </p>
        <p className="mt-3">
          Choose an activity, get your materials and enjoy creating at your own pace with guidance available when needed.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Btn to="/contact">Ask About Walk-In Availability</Btn>
          <WhatsAppBtn message={WA_MESSAGES.walkin} label="Chat on WhatsApp" />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <SectionHead eyebrow="Activities" title="Walk-In Art Activities" />
          <p className="text-center mt-4 text-muted-foreground max-w-2xl mx-auto">
            Try canvas painting, tote bag painting, pot painting, bookmark art, texture art, clay art and other DIY creative activities.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((p) => (
              <Card key={p}>
                <h3 className="text-lg font-semibold">{p}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-x text-center">
          <h2 className="text-3xl sm:text-4xl">Perfect for:</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Kids • Adults • Friends • Families • Couples • Small Groups
          </p>
          <p className="mt-4 text-muted-foreground">
            Come with an idea or discover one when you arrive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn to="/contact">Ask About Walk-In Availability</Btn>
            <WhatsAppBtn message={WA_MESSAGES.walkin} label="Chat on WhatsApp" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
