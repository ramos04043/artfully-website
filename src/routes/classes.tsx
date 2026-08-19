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
      { title: "Art Classes for Kids & Adults in Salem | Artfully" },
      {
        name: "description",
        content:
          "Structured art classes in Salem for kids and adults. Learn drawing, sketching, painting and creative techniques at Artfully.",
      },
      { property: "og:title", content: "Art Classes for Kids & Adults in Salem | Artfully" },
      {
        property: "og:description",
        content: "Art classes for kids, teens and adults at every skill level in Salem.",
      },
      { property: "og:url", content: "/classes" },
    ],
    links: [{ rel: "canonical", href: "/classes" }],
  }),
});

function Classes() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Classes" title="Art Classes for Kids & Adults in Salem">
        <p>
          Discover structured and engaging art classes in Salem designed to help kids and adults develop creative confidence and practical artistic skills.
        </p>
        <p className="mt-3">
          At Artfully, students learn through guided projects while exploring drawing, sketching, painting, colours and different artistic mediums.
        </p>
        <p className="mt-3">
          Whether you're a complete beginner or looking to improve your existing skills, our programmes provide a supportive environment to learn and create.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Btn to="/contact">Inquire About Art Classes</Btn>
          <WhatsAppBtn message={WA_MESSAGES.kids} label="Chat on WhatsApp" />
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl">Art Classes for Kids</h3>
            <p className="mt-4 text-muted-foreground">
              Our kids' art classes in Salem introduce children to drawing, painting, colours, shapes and creative techniques through age-appropriate projects.
            </p>
            <p className="mt-3 text-muted-foreground">
              Students are encouraged to experiment, express their ideas and develop their own artistic style.
            </p>
            <div className="mt-6">
              <Btn to="/contact" variant="outline">
                Inquire Now
              </Btn>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl">Art Classes for Adults</h3>
            <p className="mt-4 text-muted-foreground">
              It's never too late to start creating.
            </p>
            <p className="mt-3 text-muted-foreground">
              Our adult art classes in Salem are designed for beginners and art enthusiasts looking to learn painting, sketching and other creative techniques in a relaxed studio environment.
            </p>
            <div className="mt-6">
              <Btn to="/contact" variant="outline">
                Inquire Now
              </Btn>
            </div>
          </Card>
        </div>

        <div className="container-x text-center mt-12">
          <p className="text-lg font-semibold">Learn. Practise. Create.</p>
          <p className="mt-2 text-muted-foreground">Explore art at your own pace with guidance from our instructors.</p>
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
          <InquiryForm defaultSubject="Art Classes" />
        </div>
      </section>
    </SiteLayout>
  );
}
