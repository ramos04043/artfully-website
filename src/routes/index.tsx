import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  PartyPopper,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";
import heroImg from "@/assets/studio-hero.jpg";
import adultImg from "@/assets/adult-class.jpg";
import walkinImg from "@/assets/walkin.jpg";
import {
  Btn,
  Card,
  SiteLayout,
  WA_MESSAGES,
  WhatsAppBtn,
} from "@/components/site/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Art Classes, Workshops & Creative Experiences in Salem | Artfully" },
      {
        name: "description",
        content:
          "Creative art studio in Salem offering art classes for kids & adults, painting workshops, walk-in art experiences, birthday parties and online art classes.",
      },
      { property: "og:title", content: "Art Classes, Workshops & Creative Experiences in Salem | Artfully" },
      {
        property: "og:description",
        content:
          "Welcome to Artfully Salem - art classes, workshops, walk-in studio experiences and creative events for all ages.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const OFFERINGS = [
  {
    icon: Sparkles,
    title: "Creative Art Workshops in Salem",
    text: "Join our art workshops and explore watercolour painting, acrylic painting, sketching, portrait drawing, mixed media, texture art and more. Designed for beginners and art enthusiasts.",
    cta: "Explore Workshops",
    to: "/workshops",
  },
  {
    icon: Wand2,
    title: "Walk-In Art Studio",
    text: "No regular classes. No long-term commitment. Simply walk in and create. Choose from canvas painting, tote bag painting, pot painting, bookmark art, texture art, clay art and DIY crafts.",
    cta: "Explore Walk-In Activities",
    to: "/walk-in-studio",
  },
  {
    icon: PartyPopper,
    title: "Art Birthday Parties & Creative Events",
    text: "Make your celebration colourful with a creative art experience. We host art-themed birthday parties for kids, private art sessions, family activities and corporate creative events.",
    cta: "Plan Your Event",
    to: "/events",
  },
  {
    icon: GraduationCap,
    title: "Online Art Classes",
    text: "Learn art from wherever you are. Our online art classes for kids and beginners offer guided creative sessions to practise drawing, painting and other art techniques from home.",
    cta: "Explore Online Classes",
    to: "/online-classes",
  },
];

const WHY_TITLE = "Why Choose Artfully?";
const WHY_DESCRIPTION = "At Artfully, art isn't only about creating the perfect picture. It's about exploring ideas, learning techniques, building confidence and enjoying the creative process. Whether you're a child discovering colours, an adult returning to art or a family looking for a creative activity, Artfully provides a friendly environment to create and learn.";

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow mb-4">Artfully Salem</p>
            <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Create. Explore. Express.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Welcome to Artfully, a creative art studio in Salem where kids, teens and adults can explore their creativity through art. From structured art classes to painting workshops, walk-in experiences, birthday parties and online classes, Artfully creates a welcoming space where everyone can learn, experiment and express themselves.
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Whether you're picking up a paintbrush for the first time or looking to develop your artistic skills, there's something creative waiting for you at Artfully.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/classes">Explore Art Classes</Btn>
              <WhatsAppBtn message={WA_MESSAGES.general} label="Chat With Us on WhatsApp" />
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-border shadow-[var(--shadow-soft)]">
            <img
              src={heroImg}
              alt="Sunlit art studio with easels, paintings and brushes"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Art Classes Section */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={adultImg}
              alt="Art classes for kids and adults in Salem"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Art Classes</p>
            <h2 className="text-3xl sm:text-4xl">Art Classes for Kids & Adults</h2>
            <p className="mt-4 text-muted-foreground">
              Learn, create and grow with guided art classes designed for different ages and skill levels. Our classes introduce students to drawing, sketching, painting, colour techniques, mixed media and creative expression while helping them build confidence and artistic skills.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Art Classes for Kids</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fun and structured art classes that encourage children to explore colours, drawing, painting and different creative techniques.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Art Classes for Adults</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Relax, learn a new skill and rediscover your creativity with beginner-friendly art and painting classes for adults.
                </p>
              </div>
            </div>
            <div className="mt-7">
              <Btn to="/classes">Explore Art Classes</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-pad bg-secondary/50">
        <div className="container-x">
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {OFFERINGS.map(({ icon: Icon, ...o }) => (
              <Card key={o.title}>
                <Icon className="size-6 text-primary" />
                <h3 className="mt-4 text-xl">{o.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{o.text}</p>
                <Link
                  to={o.to}
                  className="mt-6 text-sm font-semibold text-primary hover:underline"
                >
                  {o.cta} →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section-pad">
        <div className="container-x max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl">{WHY_TITLE}</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {WHY_DESCRIPTION}
          </p>
        </div>
      </section>

      {/* Walk-in Studio Section */}
      <section className="section-pad bg-accent/40">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={walkinImg}
              alt="Walk-in art studio in Salem"
              loading="lazy"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Walk-In Studio</p>
            <h2 className="text-3xl sm:text-4xl">Walk-In Art Studio</h2>
            <p className="mt-4 text-muted-foreground">
              No regular classes. No long-term commitment. Simply walk in and create.
            </p>
            <p className="mt-6 text-sm font-semibold">Choose from creative activities such as:</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Canvas Painting",
                "Tote Bag Painting",
                "Pot Painting",
                "Bookmark Art",
                "Texture Art",
                "Clay Art",
                "DIY Crafts",
              ].map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Our walk-in art studio in Salem is perfect for friends, families, couples, kids and anyone looking for a fun creative experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/walk-in-studio">Explore Walk-In Activities</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-pad">
        <div className="container-x text-center">
          <Users className="mx-auto size-6 text-primary" />
          <h2 className="mt-4 text-3xl sm:text-4xl">Find Your Creative Side at Artfully</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Looking for art classes, painting workshops or creative activities in Salem? Discover classes and experiences designed for kids, teens and adults.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn to="/contact">Explore Artfully</Btn>
            <WhatsAppBtn message={WA_MESSAGES.general} label="Chat on WhatsApp" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
