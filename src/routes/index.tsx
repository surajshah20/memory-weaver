import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, ShoppingBag, Menu, X, Star, ArrowRight,
  Upload, Wand2, Eye, Package, Check, Plus, Minus,
  Instagram, Facebook, Youtube, Twitter,
} from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.jpg";
import heroCouple from "@/assets/hero-couple.jpg";
import colTravel from "@/assets/col-travel.jpg";
import colMagazine from "@/assets/col-magazine.jpg";
import colWedding from "@/assets/col-wedding.jpg";
import colLove from "@/assets/col-love.jpg";
import storySpread from "@/assets/story-spread.jpg";
import storyFlower from "@/assets/story-flower.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina — Premium Custom Photobooks & Magazines" },
      { name: "description", content: "Turn your memories into beautiful stories with custom photobooks, magazines, wedding albums and love story books — handcrafted, premium print." },
      { property: "og:title", content: "Lumina — Premium Custom Photobooks" },
      { property: "og:description", content: "Custom photobooks, magazines and wedding albums, handcrafted to last." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Collections />
      <Storytelling />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Collections", "How It Works", "Pricing", "Stories", "Contact"];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? "py-3 backdrop-blur-xl bg-rose-tint/85 border-b border-rose-soft/60" : "py-5 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-tight text-primary">LUMINA</a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="hidden sm:grid size-10 place-items-center rounded-full hover:bg-rose-soft/60 transition">
            <Search className="size-4" />
          </button>
          <button aria-label="Cart" className="hidden sm:grid size-10 place-items-center rounded-full hover:bg-rose-soft/60 transition">
            <ShoppingBag className="size-4" />
          </button>
          <a href="#collections" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
            Create Your Book
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="lg:hidden size-10 grid place-items-center rounded-full hover:bg-rose-soft/60">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-6 rounded-2xl bg-background border border-rose-soft p-4 shadow-soft animate-fade-up">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-rose-soft/50 text-sm">
                {l}
              </a>
            ))}
            <a href="#collections" className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium">
              Create Your Book
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" className="relative bg-rose-tint pt-32 lg:pt-40 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <h1 className="text-balance text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] font-display tracking-tight uppercase">
            Turn<br />Your<br />Memories<br />Into<br />
            <span className="font-serif-italic normal-case text-primary">Beautiful Stories</span>
          </h1>

          <p className="mt-8 max-w-lg text-base text-foreground/70 leading-relaxed">
            Create personalized photobooks, magazines, travel journals, wedding albums and memory collections — printed on premium paper, bound to last forever.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#collections" className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-7 py-4 text-sm font-medium hover:opacity-90 transition">
              Create Your Book <ArrowRight className="size-4" />
            </a>
            <a href="#collections" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium hover:bg-white/60 transition">
              Explore Collections
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
              <span className="text-xs text-foreground/70">4.9 Rated</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/70">
              <Package className="size-4 text-primary" /> Fast Worldwide Delivery
            </div>
          </div>
        </div>

        {/* Polaroid stack */}
        <div className="relative h-[460px] lg:h-[560px]">
          <img
            src={heroLandscape}
            alt="Travel polaroid"
            width={1024} height={1280}
            className="absolute w-[62%] max-w-[360px] top-2 left-2 rotate-[-8deg] shadow-lift animate-float-slow"
          />
          <img
            src={heroCouple}
            alt="Couple polaroid"
            loading="lazy" width={1024} height={1280}
            className="absolute w-[60%] max-w-[340px] bottom-2 right-0 rotate-[6deg] shadow-lift animate-float-slow"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- COLLECTIONS ---------- */
const COLLECTIONS = [
  { label: "Bestseller", title: "Travel Photobook", img: colTravel, span: "h-[320px] md:h-[420px]" },
  { label: "Editorial", title: "Custom Magazine", img: colMagazine, span: "h-[260px] md:h-[340px]" },
  { label: "Heirloom", title: "Wedding Album", img: colWedding, span: "h-[320px] md:h-[420px]" },
  { label: "Romance", title: "Love Story Book", img: colLove, span: "h-[260px] md:h-[340px]" },
];

function Collections() {
  return (
    <section id="collections" className="py-24 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">Our Collections</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display uppercase tracking-tight">Featured Collections</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-primary font-semibold hover:opacity-80">
            View All Collections <ArrowRight className="size-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-end">
          {COLLECTIONS.map((c, i) => (
            <article key={c.title} className={`group ${i % 2 === 1 ? "lg:translate-y-12" : ""}`}>
              <div className={`relative rounded-3xl overflow-hidden bg-rose-soft ${c.span}`}>
                <img src={c.img} alt={c.title} loading="lazy" width={1024} height={1280}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">{c.label}</p>
                <h3 className="mt-1.5 font-display text-lg uppercase tracking-tight">{c.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STORYTELLING ---------- */
function Storytelling() {
  const stats = [
    { v: "10k+", l: "Books Created" },
    { v: "4.9", l: "Customer Rating" },
    { v: "3–5", l: "Days Delivery" },
    { v: "100%", l: "Premium Print" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-rose-soft/70">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="grid grid-cols-2 gap-5">
          <div className="aspect-square rounded-3xl overflow-hidden bg-background">
            <img src={storySpread} alt="Open photobook spread" loading="lazy" width={1024} height={1024} className="size-full object-cover" />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden bg-background mt-10">
            <img src={storyFlower} alt="Red gerbera" loading="lazy" width={1024} height={1024} className="size-full object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-display uppercase tracking-tight">
            Every Memory<br />Deserves A <span className="font-serif-italic normal-case text-primary">Beautiful</span><br />
            <span className="font-serif-italic normal-case text-primary">Home</span>
          </h2>
          <p className="mt-6 max-w-md text-foreground/70 leading-relaxed">
            Our premium photobooks are crafted to be the best home for your most cherished moments — from family adventures and travels to weddings and milestones. Built to be opened, shared and passed down.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl text-primary">{s.v}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-foreground/60 mt-1.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { icon: Upload, title: "Upload Photos", desc: "Drop in your favorite shots from phone, cloud or camera." },
    { icon: Wand2, title: "Customize Layout", desc: "Choose a template or design every single spread your way." },
    { icon: Eye, title: "Review Design", desc: "Preview the full book and every detail before you order." },
    { icon: Package, title: "Print & Deliver", desc: "We hand-bind, print and ship — straight to your doorstep." },
  ];
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">The Process</p>
        <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-display uppercase tracking-tight max-w-3xl mx-auto">
          Simple, Seamless, Storytelling
        </h2>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6">
          {steps.map((s, i) => (
            <div key={s.title} className={`flex flex-col items-center text-center ${i % 2 === 1 ? "lg:translate-y-14" : ""}`}>
              <div className="size-16 rounded-full bg-rose-soft grid place-items-center text-primary mb-5">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display text-lg uppercase tracking-tight">{i + 1}. {s.title}</h3>
              <p className="text-sm text-foreground/65 mt-3 leading-relaxed max-w-[200px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  { name: "Ananya Mehra", product: "Wedding Album", quote: "Holding our album felt like reliving the day all over again. The paper, the binding, the colors — it's the heirloom we'll pass down." },
  { name: "Priya R.", product: "Travel Photobook", quote: "I turned three weeks across Italy into a coffee-table book my parents won't stop showing off. Quietly the best gift I've ever made." },
  { name: "Aditi Kapoor", product: "Love Story Book", quote: "It didn't feel like a 'photo book' — it felt like a small publication about our love. Every spread was thoughtful and beautiful." },
];

function Testimonials() {
  return (
    <section id="stories" className="py-24 lg:py-32 bg-ink-deep text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-4">Testimonials</p>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display uppercase tracking-tight max-w-3xl">
          What Creators Are Saying
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur">
              <div className="flex items-center gap-0.5 text-primary mb-5">
                {[...Array(5)].map((_, j) => <Star key={j} className="size-3.5 fill-current" />)}
              </div>
              <p className="text-white/85 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="mt-7 pt-5 border-t border-white/10 flex items-center gap-3">
                <div className={`size-10 rounded-full bg-gradient-to-br ${
                  ["from-rose-300 to-pink-500", "from-amber-200 to-orange-400", "from-violet-300 to-pink-500"][i]
                }`} />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-[11px] text-white/50">{t.product}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
const PLANS = [
  { name: "Classic", price: "$29", unit: "/book", features: ["Softcover Magazine", "40 Pages Included", "Standard Matte Paper", "Standard Shipping"], highlight: false, cta: "Choose Classic" },
  { name: "Premium", price: "$59", unit: "/book", features: ["Hardcover Photobook", "60 Pages Included", "Luxe 200gsm Paper", "Premium Box Packaging"], highlight: true, cta: "Choose Premium" },
  { name: "Luxury", price: "$129", unit: "/book", features: ["Leather + Foil Cover", "100 Pages Included", "Archival Giclée Print", "Express Shipping"], highlight: false, cta: "Choose Luxury" },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">Choose Your Plan</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-display uppercase tracking-tight">Pricing Plans</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 flex flex-col ${
              p.highlight
                ? "bg-primary text-primary-foreground md:-translate-y-4 shadow-lift"
                : "bg-background border border-rose-soft"
            }`}>
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-white text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <p className={`text-[10px] uppercase tracking-[0.22em] font-semibold mb-3 ${p.highlight ? "text-white/85" : "text-primary"}`}>{p.name}</p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-5xl">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-white/70" : "text-foreground/60"}`}>{p.unit}</span>
              </div>
              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`size-4 mt-0.5 shrink-0 ${p.highlight ? "text-white" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3.5 text-sm font-medium transition ${
                p.highlight
                  ? "bg-white text-primary hover:opacity-90"
                  : "border border-foreground/15 hover:bg-rose-soft/40"
              }`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "What is the typical shipping time?", a: "Most orders are printed, bound and shipped within 3–5 business days. Express options are available at checkout." },
  { q: "Can I import photos directly from Instagram?", a: "Yes — connect your Instagram in the editor and pull photos in one tap. Cloud uploads from Google Drive and Dropbox are also supported." },
  { q: "Do you offer discounts on bulk orders?", a: "Absolutely. For orders of 10+ books we offer tiered pricing — get in touch and we'll send a custom quote." },
  { q: "What's the difference between Classic and Premium?", a: "Classic uses a softcover and standard matte paper. Premium upgrades to a hardcover, thicker 200gsm paper and includes premium box packaging." },
  { q: "Can I preview the book before ordering?", a: "Yes — every order gets a full digital preview of every page before printing. Edit as much as you like before you confirm." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">FAQ</p>
          <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-display uppercase tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl border border-rose-soft bg-background overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-rose-soft/30 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-sm">{f.q}</span>
                  <span className="size-7 grid place-items-center rounded-full bg-rose-soft text-primary shrink-0">
                    {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-foreground/65 text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="bg-rose-soft py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-balance text-[clamp(2.5rem,8vw,6.5rem)] font-display uppercase tracking-tight leading-[0.95]">
          Ready To Bring<br />Your Memories To<br />
          <span className="font-serif-italic normal-case text-primary">Life?</span>
        </h2>
        <p className="mt-7 max-w-xl mx-auto text-foreground/70">
          Join 10,000+ creators who chose LUMINA to turn their memories into something beautiful. Start your book in under a minute.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#collections" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition">
            Get Started
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-7 py-4 text-sm font-medium hover:opacity-90 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const cols = [
    { title: "Products", links: ["Photobook", "Travel Book", "Wedding Album", "Magazine"] },
    { title: "Resources", links: ["Sample Books", "Design Guide", "Pricing", "Blog"] },
    { title: "Social", links: ["Instagram", "Pinterest", "TikTok", "Facebook"] },
  ];
  return (
    <footer className="bg-background border-t border-rose-soft pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-rose-soft">
          <div>
            <p className="font-display text-3xl text-primary tracking-tight">LUMINA</p>
            <p className="mt-4 text-sm text-foreground/65 max-w-xs leading-relaxed">
              Premium photobooks and custom magazines for life's most beautiful chapters.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/70 hover:text-primary transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-foreground/50">© {new Date().getFullYear()} LUMINA. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="size-9 grid place-items-center rounded-full bg-rose-soft/60 hover:bg-primary hover:text-primary-foreground transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
