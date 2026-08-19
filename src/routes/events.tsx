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

export const Route = createFileRoute("/events")({
  component: Events,
  head: () => ({
    meta: [
      { title: "Art Birthday Parties & Creative Events in Salem | Artfully" },
      {
        name: "description",
        content:
          "Art birthday parties in Salem, private creative sessions and group art activities. Celebrate with painting and creativity.",
      },
      { property: "og:title", content: "Art Birthday Parties & Creative Events in Salem | Artfully" },
      {
        property: "og:description",
        content: "Turn your next celebration into a creative experience at Artfully Salem.",
      },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
});

function Events() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Events & Parties" title="Art Birthday Parties & Creative Events in Salem">
        <p>Turn your next celebration into a creative experience at Artfully.</p>
        <p className="mt-3">
          We organise art birthday parties in Salem, private creative sessions and group art activities where guests can paint, create and take home something they've made themselves.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Btn to="/contact">Plan Your Art Event</Btn>
          <WhatsAppBtn message={WA_MESSAGES.events} />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <Card>
              <h3 className="text-2xl">Kids' Art Birthday Parties</h3>
              <p className="mt-4 text-muted-foreground">
                Give children a birthday experience filled with colours, creativity and hands-on activities.
              </p>
              <div className="mt-6">
                <Btn to="/contact" variant="outline">
                  Plan Birthday Party
                </Btn>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl">Private Art Parties</h3>
              <p className="mt-4 text-muted-foreground">
                Get your friends together for a relaxed painting or creative session.
              </p>
              <div className="mt-6">
                <Btn to="/contact" variant="outline">
                  Plan Private Party
                </Btn>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl">Corporate Art Events</h3>
              <p className="mt-4 text-muted-foreground">
                Bring teams together through collaborative and engaging creative activities.
              </p>
              <div className="mt-6">
                <Btn to="/contact" variant="outline">
                  Plan Corporate Event
                </Btn>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl">Family & Group Art Sessions</h3>
              <p className="mt-4 text-muted-foreground">
                Spend quality time together while creating something memorable.
              </p>
              <div className="mt-6">
                <Btn to="/contact" variant="outline">
                  Plan Group Session
                </Btn>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/50">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHead center={false} eyebrow="Inquiry" title="Tell Us About Your Occasion">
            <p>Share your date, group size, and age group and we'll plan the creative session.</p>
          </SectionHead>
          <InquiryForm defaultSubject="Art Events & Parties" />
        </div>
      </section>
    </SiteLayout>
  );
}
