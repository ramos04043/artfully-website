import { createFileRoute } from "@tanstack/react-router";
import partyImg from "@/assets/art-party.jpg";
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

export const Route = createFileRoute("/events")({
  component: Events,
  head: () => ({
    meta: [
      { title: "Kids Birthday Art Parties & Events | Artfully" },
      {
        name: "description",
        content:
          "Host kids birthday art parties, private art parties, family sessions, corporate and group creative events at our studio.",
      },
      { property: "og:title", content: "Kids Birthday Art Parties & Events | Artfully" },
      {
        property: "og:description",
        content: "Turn your special occasion into a memorable creative experience.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
});

const EVENTS = [
  "Kids Birthday Parties",
  "Private Art Parties",
  "Family Creative Sessions",
  "Corporate Creative Events",
  "School & Group Events",
];

const INCLUDES = [
  "Guided Art Activity",
  "Art Materials",
  "Creative Theme",
  "Instructor Support",
  "Group Setup",
  "Take-Home Artwork",
];

function Events() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Events & Parties" title="Celebrate Creatively">
        <p>Turn your special occasion into a memorable creative experience.</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Btn to="/contact">Plan Your Event</Btn>
          <WhatsAppBtn message={WA_MESSAGES.events} />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <SectionHead eyebrow="We Host" title="Occasions We Create For" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((e) => (
              <Card key={e}>
                <h3 className="text-xl">{e}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  A guided art experience set up for your group, with materials and instructor
                  support included.
                </p>
                <div className="mt-6">
                  <Btn to="/contact" variant="outline">
                    Plan Your Event
                  </Btn>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-accent/40">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-3">Birthdays</p>
            <h2 className="text-3xl sm:text-4xl">Art Birthday Parties for Kids</h2>
            <p className="mt-4 text-muted-foreground">
              Celebrate your child's special day with painting, colours, creativity, and fun.
            </p>
            <p className="mt-6 text-sm font-semibold">Our art parties can include:</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {INCLUDES.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/contact">Inquire About Birthday Parties</Btn>
              <WhatsAppBtn message={WA_MESSAGES.events} />
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-border">
            <img
              src={partyImg}
              alt="Kids showing their paintings at an art birthday party"
              loading="lazy"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHead center={false} eyebrow="Inquiry" title="Tell Us About Your Occasion">
            <p>Share your date, group size, and age group and we'll plan the creative session.</p>
          </SectionHead>
          <InquiryForm defaultSubject="Birthday Parties" />
        </div>
      </section>
    </SiteLayout>
  );
}
