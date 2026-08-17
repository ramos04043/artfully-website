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
      { title: "About Artfully | Classes for All Ages" },
      {
        name: "description",
        content:
          "A studio built for creativity — meet our instructors and learn how we make art accessible and enjoyable for all ages and skill levels.",
      },
      { property: "og:title", content: "About Artfully | Classes for All Ages" },
      {
        property: "og:description",
        content: "We believe everyone has the ability to create.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const INSTRUCTORS = [
  {
    name: "Instructor Name",
    speciality: "Watercolour & Illustration",
    bio: "Guides beginners through colour, line, and composition with a calm, encouraging approach.",
  },
  {
    name: "Instructor Name",
    speciality: "Acrylic & Canvas Painting",
    bio: "Focuses on confident brushwork and helping students develop their own visual style.",
  },
  {
    name: "Instructor Name",
    speciality: "Clay, Craft & Mixed Media",
    bio: "Loves hands-on making and creative projects for kids, teens, and adults alike.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About" title="A Studio Built for Creativity">
        <p>We believe everyone has the ability to create.</p>
        <p>
          Our studio provides a supportive and inspiring environment where children and adults can
          experiment with art, learn new techniques, build confidence, and enjoy the creative
          process.
        </p>
      </PageHero>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={heroImg}
              alt="Interior of the art studio with easels and framed artworks"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl">Art for Every Age & Skill Level</h2>
            <p className="mt-4 text-muted-foreground">
              To make art accessible, enjoyable, and meaningful for people of all ages and skill
              levels.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/contact">Inquire Now</Btn>
              <WhatsAppBtn message={WA_MESSAGES.general} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-x">
          <SectionHead eyebrow="Our Team" title="Meet Our Instructors">
            <p>
              Our instructors combine artistic experience with a friendly and supportive teaching
              approach.
            </p>
          </SectionHead>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {INSTRUCTORS.map((i, idx) => (
              <Card key={idx}>
                <div className="flex size-14 items-center justify-center rounded-full bg-accent font-[family-name:var(--font-display)] text-lg text-primary">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-xl">{i.name}</h3>
                <p className="mt-1 text-xs tracking-widest text-primary uppercase">
                  {i.speciality}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{i.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
