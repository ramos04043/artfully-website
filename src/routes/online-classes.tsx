import { createFileRoute } from "@tanstack/react-router";
import {
  Btn,
  Card,
  PageHero,
  SiteLayout,
  WA_MESSAGES,
  WhatsAppBtn,
} from "@/components/site/site";

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

      {/* Features Section */}
      <section className="section-pad">
        <div className="container-x">
          <h2 className="text-center text-3xl sm:text-4xl mb-12">What You'll Get</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="text-xl font-semibold">Live Interactive Sessions</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Real-time instruction and guidance from experienced art instructors through video calls.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Personalized Attention</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Small batch sizes ensure each student receives individual feedback and support.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Flexible Learning</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Learn from the comfort of your home at scheduled times that work for you.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Step-by-Step Guidance</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Clear demonstrations and easy-to-follow instructions for every project.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Material Support</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                We provide a list of materials needed before each session so you're prepared.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Creative Projects</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Complete finished artworks you'll be proud to display or share with family.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="section-pad bg-secondary/50">
        <div className="container-x max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl">Perfect For</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-lg">Kids & Teens</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Structured art lessons that help young learners develop skills and creativity.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-lg">Adult Beginners</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Never picked up a paintbrush? Start your artistic journey from home.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-lg">Remote Learners</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Can't visit the studio? Join from anywhere in the world.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-lg">Busy Schedules</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Save travel time and learn art on your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <h2 className="text-center text-3xl sm:text-4xl mb-12">How It Works</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Send an Inquiry",
                description: "Contact us to express your interest in online art classes.",
              },
              {
                step: "2",
                title: "Choose Your Program",
                description: "We'll recommend sessions based on age, skill level, and interests.",
              },
              {
                step: "3",
                title: "Get Material List",
                description: "Receive a simple list of art supplies needed for your sessions.",
              },
              {
                step: "4",
                title: "Join Your Class",
                description: "Log in to the scheduled session and start creating with live guidance.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pad bg-accent/40">
        <div className="container-x text-center">
          <h2 className="text-3xl sm:text-4xl">Ready to Start Your Creative Journey Online?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us to learn more about our online art classes, schedules, and pricing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn to="/contact">Inquire About Online Classes</Btn>
            <WhatsAppBtn message={WA_MESSAGES.online} label="Chat on WhatsApp" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
