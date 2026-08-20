import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Chatbot } from "./Chatbot";

export const PHONE = "+91 73589 82333";
export const EMAIL = "hello@artfully.in";
export const ADDRESS = "Artfully, 3rd Floor, S Cube Complex, Saradha College Main Road, Ramakrishna Road Signal, Hasthampatty, Salem - 636 007";
const WA_NUMBER = "917358982333";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Hi, I'd like to know more about Artfully.",
  kids: "Hi, I'd like more information about kids' art classes.",
  adults: "Hi, I'd like more information about adult art classes.",
  online: "Hi, I'd like more information about online art classes.",
  workshops: "Hi, I'd like to know about upcoming workshops.",
  walkin: "Hi, I'd like to know more about your walk-in studio.",
  events: "Hi, I'd like more information about birthday parties and events.",
};

const NAV = [
  { to: "/", label: "Home" },
  { to: "/classes", label: "Classes" },
  { to: "/online-classes", label: "Online Classes" },
  { to: "/workshops", label: "Workshops" },
  { to: "/walk-in-studio", label: "Walk-In Studio" },
  { to: "/events", label: "Events & Parties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Btn({
  children,
  to,
  href,
  variant = "solid",
  className = "",
  type,
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "solid" | "outline" | "quiet";
  className?: string;
  type?: "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors";
  const styles = {
    solid: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-accent",
    quiet: "border border-border bg-card text-foreground hover:bg-secondary",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  return (
    <button type={type ?? "button"} className={cls}>
      {children}
    </button>
  );
}

export function WhatsAppBtn({
  message,
  label = "Chat on WhatsApp",
  variant = "outline",
}: {
  message: string;
  label?: string;
  variant?: "solid" | "outline" | "quiet";
}) {
  return (
    <Btn href={waLink(message)} variant={variant}>
      <MessageCircle className="size-4" /> {label}
    </Btn>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {children && <div className="mt-4 space-y-3 text-muted-foreground">{children}</div>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="container-x py-16 sm:py-20">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl sm:text-5xl">{title}</h1>
        {children && (
          <div className="mt-5 max-w-2xl space-y-3 text-muted-foreground">{children}</div>
        )}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex h-full flex-col rounded-md border border-border bg-card p-6 shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </div>
  );
}

function Wordmark() {
  return (
    <Link to="/" className="flex flex-col leading-none">
      <span className="font-[family-name:var(--font-display)] text-xl">Artfully</span>
      <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
        Create · Explore · Express
      </span>
    </Link>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Wordmark />
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Btn to="/contact">Inquire Now</Btn>
        </div>
        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Btn to="/contact" className="mt-3">
              Inquire Now
            </Btn>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-4 border-t border-border bg-secondary/60">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark />
          <p className="mt-4 text-sm text-muted-foreground">
            Artfully — a creative studio offering art classes, workshops, walk-in experiences,
            online sessions, and events for kids and adults.
          </p>
        </div>
        <div>
          <h3 className="text-sm tracking-widest uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.filter((n) => n.to !== "/").map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm tracking-widest uppercase">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{PHONE}</li>
            <li>{EMAIL}</li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm tracking-widest uppercase">Studio Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Open 6 Days a Week</li>
            <li>11:00 AM – 9:00 PM</li>
            <li>Closed only on Tuesdays</li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
            <a href={waLink(WA_MESSAGES.general)} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/artfully.in" target="_blank" rel="noreferrer" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 text-xs text-muted-foreground">
          © 2026 Artfully. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
}
