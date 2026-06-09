import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search, ShoppingBag, Menu, X, Star, Truck, Users, ArrowRight, ArrowUpRight,
  Upload, Wand2, Eye, Package, Check, Sparkles, Shield, Headphones, Printer,
  Plus, Minus, Instagram, Twitter, Facebook, Youtube,
} from "lucide-react";
import heroBook from "@/assets/photobook-hero-1.jpg";
import openBook from "@/assets/photobook-open.jpg";
import magazineStack from "@/assets/magazine-stack.jpg";
import weddingAlbum from "@/assets/wedding-album.jpg";
import loveBook from "@/assets/love-book.jpg";
import travelBook from "@/assets/travel-book.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Memoirly — Premium Custom Photobooks & Magazines" },
      { name: "description", content: "Turn your memories into beautifully bound photobooks, travel journals, wedding albums and custom magazines. Premium print, handcrafted in every page." },
      { property: "og:title", content: "Memoirly — Premium Custom Photobooks & Magazines" },
      { property: "og:description", content: "Beautifully bound photobooks, magazines, wedding albums and memory keepsakes." },
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
      <Showcase />
      <Stories />
      <WhyUs />
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border/60" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="size-9 rounded-xl bg-primary grid place-items-center text-primary-foreground font-display font-bold">M</span>
          <span className="font-display text-xl font-semibold tracking-tight">Memoirly</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="hidden sm:grid size-10 place-items-center rounded-full hover:bg-muted transition">
            <Search className="size-4" />
          </button>
          <button aria-label="Cart" className="hidden sm:grid size-10 place-items-center rounded-full hover:bg-muted transition relative">
            <ShoppingBag className="size-4" />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
          </button>
          <a href="#collections" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shadow-soft">
            Create Your Book <ArrowRight className="size-4" />
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="lg:hidden size-10 grid place-items-center rounded-full hover:bg-muted">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-6 rounded-2xl bg-background border border-border p-4 shadow-soft animate-fade-up">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-muted text-sm">
                {l}
              </a>
            ))}
            <a href="#collections" className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium">
              Create Your Book <ArrowRight className="size-4" />
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
    <section id="home" className="relative pt-36 lg:pt-44 pb-20 grain">
      {/* radial glow */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-40 size-[600px] rounded-full bg-accent/60 blur-3xl" />
        <div className="absolute top-40 right-0 size-[500px] rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-foreground/70 mb-7">
            <Sparkles className="size-3.5 text-primary" /> Handcrafted memory keepsakes since 2019
          </div>

          <h1 className="text-balance text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95] font-display font-semibold tracking-tight">
            Turn your memories<br />
            into <span className="font-serif-italic text-primary">beautiful</span> stories.
          </h1>

          <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Create personalized photobooks, magazines, travel journals, wedding albums and memory collections — printed on premium paper, bound to last forever.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#collections" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition shadow-soft">
              Create Your Book <ArrowRight className="size-4" />
            </a>
            <a href="#collections" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium hover:bg-muted transition">
              Explore Collections
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="size-9 rounded-full ring-2 ring-background overflow-hidden bg-accent">
                  <div className={`size-full bg-gradient-to-br ${
                    ["from-rose-300 to-pink-500", "from-amber-200 to-orange-400", "from-violet-300 to-indigo-500", "from-emerald-300 to-teal-500"
                  ][i-1]}`} />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Trusted by 10,000+ memory keepers</p>
            </div>
          </div>
        </div>

        {/* Right — layered mockups */}
        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 grid place-items-center">
            <img
              src={heroBook}
              alt="Premium travel photobook"
              width={1024} height={1280}
              className="absolute w-[78%] max-w-[440px] rounded-2xl shadow-lift rotate-[-6deg] animate-float-slow"
              style={{ animationDelay: "0s" }}
            />
            <img
              src={loveBook}
              alt="Love story photobook"
              loading="lazy" width={1024} height={1280}
              className="absolute w-[52%] max-w-[280px] bottom-4 -left-2 rounded-2xl shadow-lift rotate-[8deg] animate-float-slow"
              style={{ animationDelay: "1.5s" }}
            />
            <img
              src={weddingAlbum}
              alt="Wedding album"
              loading="lazy" width={1024} height={1280}
              className="absolute w-[48%] max-w-[260px] top-2 -right-2 rounded-2xl shadow-lift rotate-[10deg] animate-float-slow"
              style={{ animationDelay: "3s" }}
            />
          </div>

          {/* floating badges */}
          <div className="absolute top-6 left-0 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-soft animate-float-slow" style={{ animationDelay: "0.5s" }}>
            <div className="size-9 grid place-items-center rounded-xl bg-primary/10 text-primary">
              <Star className="size-4 fill-current" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">4.9 / 5</p>
              <p className="text-[11px] text-muted-foreground leading-tight">2,400+ reviews</p>
            </div>
          </div>

          <div className="absolute bottom-12 -right-2 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-soft animate-float-slow" style={{ animationDelay: "2s" }}>
            <div className="size-9 grid place-items-center rounded-xl bg-primary/10 text-primary">
              <Truck className="size-4" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">Fast Delivery</p>
              <p className="text-[11px] text-muted-foreground leading-tight">5–7 days worldwide</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-8 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-soft animate-float-slow" style={{ animationDelay: "1s" }}>
            <div className="size-9 grid place-items-center rounded-xl bg-primary/10 text-primary">
              <Users className="size-4" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">10,000+</p>
              <p className="text-[11px] text-muted-foreground leading-tight">Happy customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COLLECTIONS ---------- */
const COLLECTIONS = [
  { label: "Bestseller", title: "Travel Photobook", desc: "Bind your journeys into a coffee-table keepsake.", img: travelBook, price: "From ₹1,499" },
  { label: "Editorial", title: "Custom Magazine", desc: "Glossy, magazine-style spreads with your stories.", img: magazineStack, price: "From ₹999" },
  { label: "Romance", title: "Love Story Book", desc: "A heart-pressed book for the love you'll never forget.", img: loveBook, price: "From ₹1,299" },
  { label: "Heirloom", title: "Wedding Album", desc: "Heirloom-quality albums in linen, leather and gold foil.", img: weddingAlbum, price: "From ₹3,499" },
];

function Collections() {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Our Collections</p>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] leading-[1] font-display font-semibold tracking-tight max-w-2xl">
              A book for every <span className="font-serif-italic text-primary">memory</span> worth keeping.
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition">
            View all <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((c) => (
            <article key={c.title} className="group relative rounded-3xl overflow-hidden bg-muted/40 border border-border/60 hover:shadow-lift transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/5] overflow-hidden bg-accent/30">
                <img src={c.img} alt={c.title} loading="lazy" width={1024} height={1280}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">{c.label}</span>
                  <span className="text-xs text-muted-foreground">{c.price}</span>
                </div>
                <h3 className="text-xl font-display font-semibold tracking-tight">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{c.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary transition">
                  Start designing <ArrowRight className="size-3.5" />
                </div>
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
    { v: "10,000+", l: "Books Created" },
    { v: "4.9 / 5", l: "Customer Rating" },
    { v: "5–7 Days", l: "Fast Delivery" },
    { v: "Premium", l: "Print Quality" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-lift rotate-[-2deg]">
            <img src={openBook} alt="Open wedding photobook" loading="lazy" width={1280} height={1024} className="size-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-2 glass rounded-2xl p-5 shadow-soft max-w-[220px] hidden md:block">
            <p className="text-xs text-muted-foreground">Crafted on</p>
            <p className="font-display text-lg font-semibold">200 gsm matte art paper</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">The Memoirly Difference</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-display font-semibold tracking-tight">
            Every memory deserves a <span className="font-serif-italic text-primary">beautiful</span> home.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From the trips that changed you to the relationships that built you — we turn the moments worth remembering into objects worth holding. Premium binding, archival inks, and an obsessive attention to every spread.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl bg-background border border-border p-5">
                <p className="font-display text-3xl font-semibold tracking-tight">{s.v}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
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
    { icon: Wand2, title: "Customize Layout", desc: "Pick a theme or design every spread your way." },
    { icon: Eye, title: "Review Design", desc: "Preview every page, every detail, before you order." },
    { icon: Package, title: "Print & Deliver", desc: "Premium printed, hand-bound, and shipped to your door." },
  ];
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">How It Works</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-display font-semibold tracking-tight">
            From phone gallery to <span className="font-serif-italic text-primary">heirloom</span>, in four steps.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div aria-hidden className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl bg-background border border-border p-7 hover:shadow-soft transition group">
              <div className="flex items-center justify-between mb-6">
                <div className="size-14 rounded-2xl bg-accent/60 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <s.icon className="size-6" />
                </div>
                <span className="font-display text-4xl font-semibold text-muted-foreground/30">0{i+1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SHOWCASE ---------- */
function Showcase() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Inside the Pages</p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-display font-semibold tracking-tight max-w-2xl">
              An editorial spread for <span className="font-serif-italic text-primary">your</span> story.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Each book is an editorial-grade keepsake — typeset, color-graded and bound like the magazines you collect.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-7 row-span-2 rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[520px]">
            <img src={openBook} alt="Open photobook spread" loading="lazy" width={1280} height={1024} className="size-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 md:col-span-5 rounded-3xl overflow-hidden aspect-square">
            <img src={magazineStack} alt="Magazine stack" loading="lazy" width={1024} height={1280} className="size-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 md:col-span-5 rounded-3xl overflow-hidden aspect-square">
            <img src={weddingAlbum} alt="Wedding album" loading="lazy" width={1024} height={1280} className="size-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 md:col-span-4 rounded-3xl overflow-hidden aspect-[4/5]">
            <img src={travelBook} alt="Travel book" loading="lazy" width={1024} height={1280} className="size-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-6 md:col-span-4 rounded-3xl overflow-hidden aspect-[4/5]">
            <img src={loveBook} alt="Love story book" loading="lazy" width={1024} height={1280} className="size-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-12 md:col-span-4 rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between aspect-[4/5]">
            <Sparkles className="size-6" />
            <div>
              <p className="font-display text-2xl font-semibold leading-tight">Designed with the care of a publishing studio.</p>
              <a href="#collections" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">
                Start your book <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STORIES ---------- */
const TESTIMONIALS = [
  { name: "Ananya & Rohan", product: "Wedding Album", rating: 5, quote: "Holding our album felt like reliving the day. The paper, the binding, the colors — it's the heirloom we'll pass down." },
  { name: "Priya M.", product: "Travel Photobook", rating: 5, quote: "I turned three weeks across Italy into a coffee-table book my parents won't stop showing off. Beyond worth it." },
  { name: "Karthik R.", product: "Custom Magazine", rating: 5, quote: "The magazine style felt so editorial — it didn't feel like a 'photo book', it felt like a publication about us." },
];

function Stories() {
  return (
    <section id="stories" className="relative py-24 lg:py-32 grain">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-background to-background" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Customer Stories</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-display font-semibold tracking-tight">
            Loved by people who <span className="font-serif-italic text-primary">love</span> their memories.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="glass rounded-3xl p-7 shadow-soft hover:-translate-y-1 transition">
              <div className="flex items-center gap-0.5 text-primary mb-5">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="size-4 fill-current" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{t.quote}"</p>
              <div className="mt-7 pt-5 border-t border-border/60 flex items-center gap-3">
                <div className={`size-11 rounded-full bg-gradient-to-br ${
                  ["from-rose-300 to-pink-500","from-amber-200 to-orange-400","from-violet-300 to-indigo-500"][i]
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.product}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: Printer, title: "Premium Print Quality", desc: "Archival inks, true-to-life color, sharp detail." },
    { icon: Sparkles, title: "Thick Matte Paper", desc: "200 gsm tactile paper that feels like a magazine." },
    { icon: Wand2, title: "Custom Designs", desc: "Hundreds of layouts or design every spread yourself." },
    { icon: Truck, title: "Fast Shipping", desc: "Printed and dispatched in 5–7 business days." },
    { icon: Shield, title: "Secure Checkout", desc: "Encrypted payments and a love-it guarantee." },
    { icon: Headphones, title: "Professional Support", desc: "Real humans helping you design a perfect book." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Why Memoirly</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-display font-semibold tracking-tight">
            Built like a book you'll keep <span className="font-serif-italic text-primary">forever</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <div key={i.title} className="group rounded-3xl border border-border p-7 hover:border-primary/40 hover:shadow-soft transition bg-background">
              <div className="size-12 rounded-2xl bg-accent/60 grid place-items-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <i.icon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{i.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
const PLANS = [
  { name: "Basic", price: "₹999", desc: "Soft-cover photobook. Perfect for first books.", features: ["20 pages included", "Soft matte cover", "Standard paper", "Email support"], highlight: false },
  { name: "Premium", price: "₹1,999", desc: "Our most-loved hardcover. Editorial quality.", features: ["40 pages included", "Hardcover linen finish", "200 gsm matte art paper", "Priority printing & support"], highlight: true },
  { name: "Luxury", price: "₹3,499", desc: "Heirloom album. Built to outlive you.", features: ["60 pages included", "Leather + gold foil cover", "Archival giclée print", "Dedicated design concierge"], highlight: false },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Simple, Honest Pricing</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] font-display font-semibold tracking-tight">
            Pick the cover. We'll bind the <span className="font-serif-italic text-primary">memory</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 flex flex-col ${
              p.highlight
                ? "bg-ink text-background border border-primary/30 shadow-lift md:-translate-y-4"
                : "bg-background border border-border"
            }`}>
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Loved
                </span>
              )}
              <p className={`text-xs uppercase tracking-[0.18em] font-semibold mb-2 ${p.highlight ? "text-primary" : "text-primary"}`}>{p.name}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold tracking-tight">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-background/60" : "text-muted-foreground"}`}>/ book</span>
              </div>
              <p className={`mt-3 text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`size-4 mt-0.5 ${p.highlight ? "text-primary" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3.5 text-sm font-medium transition ${
                p.highlight
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-foreground/15 hover:bg-muted"
              }`}>
                Start with {p.name} <ArrowRight className="size-4" />
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
  { q: "How long does printing & delivery take?", a: "Most orders are printed, bound and shipped within 5–7 business days. Express options are available at checkout." },
  { q: "What paper and binding do you use?", a: "Our default is 200 gsm matte art paper with a layflat or hardcover linen binding. Luxury albums use archival giclée print and leather covers." },
  { q: "Can I design every page myself?", a: "Absolutely. Use our online editor for full control, or pick a designer-made template and just drop in your photos." },
  { q: "What if I'm not happy with my book?", a: "We'll reprint or refund — no questions asked. Every Memoirly book is backed by our love-it-or-we-fix-it guarantee." },
  { q: "Do you ship internationally?", a: "Yes, we ship worldwide with tracked delivery. Rates are calculated at checkout." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Frequently Asked</p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] leading-[1.02] font-display font-semibold tracking-tight">
            Everything you wanted to <span className="font-serif-italic text-primary">know</span>.
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl border border-border bg-background overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/40 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="size-8 grid place-items-center rounded-full bg-accent/60 text-primary shrink-0">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
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
    <section className="px-6 pb-24">
      <div className="relative max-w-7xl mx-auto rounded-[2rem] overflow-hidden bg-ink-deep text-background px-8 py-20 md:py-28 text-center grain">
        <div aria-hidden className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 size-[400px] rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-5">Your story, bound.</p>
          <h2 className="text-balance text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] font-display font-semibold tracking-tight max-w-3xl mx-auto">
            Ready to bring your memories to <span className="font-serif-italic text-primary">life</span>?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-background/70 text-lg">
            Start designing your photobook today — no account needed to begin.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#collections" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition">
              Start Designing <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-background/30 text-background px-7 py-4 text-sm font-medium hover:bg-background/10 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const cols = [
    { title: "Collections", links: ["Travel Photobook", "Custom Magazine", "Love Story Book", "Wedding Album", "Memory Book"] },
    { title: "Resources", links: ["Design Guide", "Paper & Binding", "Sample Books", "Gift Cards", "Blog"] },
    { title: "Support", links: ["Help Center", "Shipping & Returns", "Track Order", "Contact", "FAQ"] },
    { title: "Company", links: ["About", "Careers", "Press", "Privacy", "Terms"] },
  ];
  return (
    <footer className="bg-ink-deep text-background pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="size-9 rounded-xl bg-primary grid place-items-center text-primary-foreground font-display font-bold">M</span>
              <span className="font-display text-xl font-semibold">Memoirly</span>
            </div>
            <p className="text-background/70 text-sm max-w-xs leading-relaxed">
              Premium custom photobooks, magazines and memory keepsakes — handcrafted to outlive trends.
            </p>
            <form className="mt-6 flex items-center gap-2 rounded-full bg-white/5 border border-white/10 p-1.5 max-w-sm">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-background/40" aria-label="Email" />
              <button className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-background/65 hover:text-primary transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-background/50">© {new Date().getFullYear()} Memoirly. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="size-9 grid place-items-center rounded-full bg-white/5 hover:bg-primary transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
