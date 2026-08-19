import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/studio-hero.jpg";
import {
  Btn,
  Card,
  PageHero,
  SectionHead,
  SiteLayout,
  WA_MESSAGES,
  WhatsAppBtn,
} from "@/components/site/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Artfully | Creative Art Studio" },
      {
        name: "description",
        content:
          "A creative space to learn, explore and express. Everyone can create at Artfully art studio.",
      },
      { property: "og:title", content: "About Artfully | Creative Art Studio" },
      {
        property: "og:description",
        content: "Everyone can create. Art classes, workshops and creative experiences.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About" title="A Creative Space to Learn, Explore & Express">
        <p>Artfully is an art studio built around one simple belief:</p>
        <p className="mt-3 text-2xl font-semibold">Everyone can create.</p>
        <p className="mt-4">
          We provide art classes, workshops and creative experiences designed to encourage curiosity, experimentation and self-expression.
        </p>
        <p className="mt-3">
          From children discovering art for the first time to adults rediscovering their creative side, Artfully provides a welcoming environment where creativity can grow.
        </p>
        <p className="mt-4 font-semibold">
          Our goal isn't simply to teach people how to paint. It's to help people enjoy creating.
        </p>
      </PageHero>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={heroImg}
              alt="Interior of Artfully art studio"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">What We Offer</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>• Art classes for kids and adults</li>
              <li>• Painting workshops and masterclasses</li>
              <li>• Walk-in art studio experiences</li>
              <li>• Birthday parties and creative events</li>
              <li>• Online art classes</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/contact">Get in Touch</Btn>
              <WhatsAppBtn message={WA_MESSAGES.general} />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
