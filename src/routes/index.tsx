import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brush,
  GraduationCap,
  Heart,
  Palette,
  PartyPopper,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";
import heroImg from "@/assets/studio-hero.jpg";
import partyImg from "@/assets/art-party.jpg";
import adultImg from "@/assets/adult-class.jpg";
import walkinImg from "@/assets/walkin.jpg";
import {
  Btn,
  Card,
  SectionHead,
  SiteLayout,
  WA_MESSAGES,
  WhatsAppBtn,
} from "@/components/site/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Art Classes for Kids & Adults | Artfully" },
      {
        name: "description",
        content:
          "Creative art classes, workshops, online sessions, walk-in art experiences, and birthday parties for kids and adults.",
      },
      { property: "og:title", content: "Art Classes for Kids & Adults | Artfully" },
      {
        property: "og:description",
        content:
          "Creative art classes, workshops, online sessions, walk-in art experiences, and birthday parties for kids and adults.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const OFFERINGS = [
  {
    icon: Palette,
    title: "Kids Art Classes",
    text: "Creative and structured art programs designed to help children explore drawing, painting, colour, craft, and mixed media.",
    cta: "Explore Kids Classes",
    to: "/classes",
  },
  {
    icon: Brush,
    title: "Adult Art Classes",
    text: "Relaxed and inspiring classes for beginners and experienced artists who want to learn, create, and improve their skills.",
    cta: "Explore Adult Classes",
    to: "/classes",
  },
  {
    icon: GraduationCap,
    title: "Online Art Classes",
    text: "Learn from anywhere through guided online art sessions for kids and adults.",
    cta: "Explore Online Classes",
    to: "/online-classes",
  },
  {
    icon: Sparkles,
    title: "Workshops & Masterclasses",
    text: "Special one-time workshops focused on unique techniques, mediums, and creative experiences.",
    cta: "View Workshops",
    to: "/workshops",
  },
  {
    icon: Wand2,
    title: "Walk-In Studio",
    text: "Visit the studio, choose a creative project, select your materials, and start creating at your own pace.",
    cta: "Explore Walk-In Projects",
    to: "/walk-in-studio",
  },
  {
    icon: PartyPopper,
    title: "Events & Parties",
    text: "Celebrate birthdays, private events, family sessions, and group occasions with a unique art experience.",
    cta: "Plan Your Event",
    to: "/events",
  },
];

const WHY = [
  "Experienced Art Instructors",
  "Classes for Kids & Adults",
  "Beginner-Friendly Environment",
  "Multiple Art Mediums",
  "Creative & Relaxed Studio Space",
  "Hands-On Learning",
];

const TESTIMONIALS = [
  {
    quote:
      "My daughter absolutely loves her art classes. She looks forward to every session and has become much more confident with her creativity.",
    author: "Parent",
  },
  {
    quote:
      "The studio has such a relaxing environment. I joined as a complete beginner and really enjoyed learning painting techniques.",
    author: "Adult Student",
  },
  {
    quote:
      "We celebrated our son's birthday here and the kids had an amazing time painting and creating.",
    author: "Parent",
  },
];

const GALLERY = [
  { label: "Student Art", img: walkinImg },
  { label: "Kids Classes", img: partyImg },
  { label: "Adult Classes", img: adultImg },
  { label: "Workshops", img: heroImg },
  { label: "Events", img: partyImg },
  { label: "Walk-In Studio", img: walkinImg },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow mb-4">Artfully</p>
            <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Create. Explore. Express.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Discover inspiring art classes, workshops, walk-in experiences, and creative events
              designed for kids and adults.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/classes">Explore Classes</Btn>
              <WhatsAppBtn message={WA_MESSAGES.general} />
            </div>
            <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Kids • Adults • Workshops • Walk-Ins • Parties • Online Classes
            </p>
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

      {/* Intro / About */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={adultImg}
              alt="Adults painting on canvases in a bright studio"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Our Studio</p>
            <h2 className="text-3xl sm:text-4xl">A Creative Space for Everyone</h2>
            <p className="mt-4 text-muted-foreground">
              Our studio is a welcoming space where children and adults can explore creativity,
              learn new artistic skills, and enjoy the process of making art.
            </p>
            <p className="mt-3 text-muted-foreground">
              From structured art classes to relaxed walk-in sessions, workshops, and private
              events, there is always something creative happening at the studio.
            </p>
            <div className="mt-7">
              <Btn to="/about" variant="outline">
                Discover Our Studio
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-pad bg-secondary/50">
        <div className="container-x">
          <SectionHead eyebrow="What We Offer" title="Explore Our Offerings" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="container-x">
          <SectionHead eyebrow="Why Us" title="Why Create With Us?" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div
                key={w}
                className="flex items-center gap-3 rounded-md border border-border bg-card px-5 py-4"
              >
                <Heart className="size-4 shrink-0 text-primary" />
                <span className="text-sm font-medium">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday parties */}
      <section className="section-pad bg-accent/40">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-3">Celebrations</p>
            <h2 className="text-3xl sm:text-4xl">Art Birthday Parties for Kids</h2>
            <p className="mt-4 text-muted-foreground">
              Celebrate your child's special day with painting, colours, creativity, and fun.
            </p>
            <p className="mt-6 text-sm font-semibold">Our art parties can include:</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Guided Art Activity",
                "Art Materials",
                "Creative Theme",
                "Instructor Support",
                "Group Setup",
                "Take-Home Artwork",
              ].map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/events">Inquire About Birthday Parties</Btn>
              <WhatsAppBtn message={WA_MESSAGES.events} />
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={partyImg}
              alt="Children painting canvases at an art birthday party"
              loading="lazy"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHead eyebrow="Testimonials" title="Loved by Our Creative Community" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.author + t.quote.slice(0, 12)}>
                <p className="font-[family-name:var(--font-display)] text-lg leading-relaxed">
                  “{t.quote}”
                </p>
                <p className="mt-5 text-xs tracking-widest text-muted-foreground uppercase">
                  — {t.author}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-secondary/50">
        <div className="container-x">
          <SectionHead eyebrow="Gallery" title="Inside Our Creative World">
            <p>
              A glimpse into our classes, workshops, events, artworks, and everyday studio moments.
            </p>
          </SectionHead>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g, i) => (
              <figure
                key={g.label + i}
                className="overflow-hidden rounded-md border border-border bg-card"
              >
                <img
                  src={g.img}
                  alt={`${g.label} at the art studio`}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-xs tracking-widest uppercase">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-pad">
        <div className="container-x text-center">
          <Users className="mx-auto size-6 text-primary" />
          <h2 className="mt-4 text-3xl sm:text-4xl">Let's Create Something Together</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Interested in classes, workshops, walk-in sessions, online classes, or events? Send us
            an inquiry and our team will get back to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn to="/contact">Inquire Now</Btn>
            <WhatsAppBtn message={WA_MESSAGES.general} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
