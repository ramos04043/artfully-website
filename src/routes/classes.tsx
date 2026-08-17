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

export const Route = createFileRoute("/classes")({
  component: Classes,
  head: () => ({
    meta: [
      { title: "Kids & Adult Art Classes | Artfully" },
      {
        name: "description",
        content:
          "Structured art classes for kids and adults — foundation art, creative painting, sketching and illustration. Inquire about schedules.",
      },
      { property: "og:title", content: "Kids & Adult Art Classes | Artfully" },
      {
        property: "og:description",
        content: "Art classes for kids, teens and adults at every skill level.",
      },
      { property: "og:url", content: "/classes" },
    ],
    links: [{ rel: "canonical", href: "/classes" }],
  }),
});

const CLASSES = [
  {
    title: "Foundation Art for Kids",
    text: "Build strong creative foundations through drawing, colouring, painting, and mixed media.",
    meta: ["Age: Kids", "Skill Level: Beginner"],
  },
  {
    title: "Creative Painting",
    text: "Explore colour, composition, and painting techniques through guided projects.",
    meta: ["Age: Kids & Teens"],
  },
  {
    title: "Adult Beginner Art",
    text: "A relaxed introduction to drawing and painting for adults who want to explore their creative side.",
    meta: ["Skill: Beginner"],
  },
  {
    title: "Sketching & Illustration",
    text: "Learn observation, proportion, line work, shading, and illustration techniques.",
    meta: [],
  },
];

function Classes() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Classes" title="Find Your Creative Class">
        <p>
          Whether you're picking up a brush for the first time or looking to develop your artistic
          skills, our classes are designed to make learning art enjoyable and inspiring.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Btn to="/contact">Inquire Now</Btn>
          <WhatsAppBtn message={WA_MESSAGES.kids} label="Chat about Kids Classes" />
          <WhatsAppBtn message={WA_MESSAGES.adults} label="Chat about Adult Classes" />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2">
          {CLASSES.map((c) => (
            <Card key={c.title}>
              <h3 className="text-xl">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              {c.meta.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.meta.map((m) => (
                    <li
                      key={m}
                      className="rounded-sm bg-secondary px-3 py-1 text-xs tracking-wide"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6">
                <Btn to="/contact" variant="outline">
                  Inquire Now
                </Btn>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHead center={false} eyebrow="Inquiry" title="Ask About Class Schedules">
            <p>
              Tell us who the class is for and what you'd like to learn. Our team will share
              schedules, batch timings, and material details.
            </p>
          </SectionHead>
          <InquiryForm defaultSubject="Kids Classes" />
        </div>
      </section>
    </SiteLayout>
  );
}
