import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Star, ArrowRight, Truck, Menu, X,
  CloudUpload, Wand2, Eye, Printer,
  Check, X as XIcon, ChevronDown,
  Instagram, Facebook, Youtube,
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
      { title: "LUMINA | Premium Photobook & Magazine Store" },
      { name: "description", content: "Create personalized photobooks, magazines, travel journals, wedding albums and memory collections. High-end editorial design with premium print quality." },
      { property: "og:title", content: "LUMINA — Premium Photobooks & Magazines" },
      { property: "og:description", content: "Turn your memories into beautiful stories with custom photobooks and magazines." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Nav />
      <Hero />
      <Collections />
      <Storytelling />
      <Process />
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-tight">LUMINA</a>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground/80">
          <a href="#collections" className="hover:text-rose transition">Collections</a>
          <a href="#process" className="hover:text-rose transition">How it Works</a>
          <a href="#pricing" className="hover:text-rose transition">Pricing</a>
          <a href="#faq" className="hover:text-rose transition">FAQ</a>
        </nav>
        <a href="#pricing" className="hidden md:inline-flex items-center gap-2 bg-rose text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-rose/90 transition">
          Start Designing
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-4 flex flex-col gap-3 text-sm">
          <a href="#collections" onClick={() => setOpen(false)}>Collections</a>
          <a href="#process" onClick={() => setOpen(false)}>How it Works</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#pricing" className="bg-rose text-white px-5 py-2.5 rounded-full text-center mt-2">Start Designing</a>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-rose-tint grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <h1 className="font-display uppercase text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-ink">
            Turn Your <br />
            Memories Into <br />
            <span className="font-serif-italic text-rose normal-case tracking-tight">Beautiful</span> Stories
          </h1>
          <p className="mt-8 max-w-xl text-foreground/70 text-lg leading-relaxed">
            Create personalized photobooks, magazines, travel journals, wedding albums, and memory collections that last forever. High-end editorial design meets premium print quality.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="inline-flex items-center gap-2 bg-ink text-white px-7 py-4 rounded-full font-medium hover:bg-rose transition">
              Create Your Book <ArrowRight className="size-4" />
            </a>
            <a href="#collections" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium border border-ink/20 hover:border-ink transition">
              Explore Collections
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8 text-xs tracking-[0.18em] font-semibold text-ink/70">
            <div className="flex items-center gap-2">
              <Star className="size-4 fill-rose text-rose" />
              4.9 RATING (2K+ REVIEWS)
            </div>
            <div className="flex items-center gap-2">
              <Truck className="size-4" />
              WORLDWIDE DELIVERY
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[520px] lg:h-[620px]">
          <div className="absolute top-0 right-8 w-[260px] lg:w-[320px] rotate-[6deg] animate-float-slow" style={{ ["--tw-rotate" as never]: "6deg" }}>
            <div className="bg-white p-3 pb-12 shadow-lift">
              <img src={heroLandscape} alt="Travel photobook spread" className="w-full h-[320px] object-cover" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-[240px] lg:w-[300px] -rotate-[5deg] animate-float-slow" style={{ ["--tw-rotate" as never]: "-5deg", animationDelay: "1.5s" }}>
            <div className="bg-white p-3 pb-12 shadow-lift">
              <img src={heroCouple} alt="Couple photobook" className="w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COLLECTIONS ---------- */
const collections = [
  { title: "Travel Photobook", price: "FROM $49", img: colTravel },
  { title: "Custom Magazine", price: "FROM $29", img: colMagazine },
  { title: "Wedding Album", price: "FROM $89", img: colWedding },
  { title: "Love Story Book", price: "FROM $39", img: colLove },
];
function Collections() {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">CURATED EXCELLENCE</p>
            <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">Featured <br /><span className="font-serif-italic normal-case text-rose">Collections</span></h2>
          </div>
          <a href="#" className="text-sm font-semibold tracking-[0.18em] border-b border-ink pb-1 hover:text-rose hover:border-rose transition">VIEW ALL CATEGORIES →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((c, i) => (
            <a key={c.title} href="#" className={`group block ${i % 2 === 1 ? "lg:mt-16" : ""}`}>
              <div className="overflow-hidden bg-rose-soft aspect-[3/4]">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="mt-5 flex items-end justify-between">
                <h3 className="text-xl font-display uppercase tracking-tight">{c.title}</h3>
                <span className="text-xs tracking-[0.18em] font-semibold text-foreground/60">{c.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STORYTELLING ---------- */
function Storytelling() {
  return (
    <section className="py-24 lg:py-32 bg-rose-tint grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src={storyFlower} alt="Detail" className="w-full h-[280px] lg:h-[400px] object-cover" />
          <img src={storySpread} alt="Open spread" className="w-full h-[280px] lg:h-[400px] object-cover mt-12" />
        </div>
        <div>
          <h2 className="font-display text-5xl lg:text-6xl uppercase tracking-tight leading-none">
            Every Memory <br />Deserves A <br /><span className="font-serif-italic text-rose normal-case">Beautiful Home</span>
          </h2>
          <p className="mt-8 text-foreground/70 leading-relaxed text-lg max-w-xl">
            Our premium photobooks are designed to be heirloom-quality. We combine traditional craftsmanship with modern printing technology to ensure your most precious journeys and milestones are preserved in stunning detail for generations.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-ink/15 pt-8">
            {[
              ["10k+", "BOOKS CREATED"],
              ["4.9", "CUSTOMER RATING"],
              ["3-5", "DAYS DELIVERY"],
              ["100%", "QUALITY GUARANTEE"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl lg:text-5xl text-rose">{n}</div>
                <div className="mt-2 text-[10px] tracking-[0.2em] font-semibold text-foreground/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const steps = [
  { icon: CloudUpload, title: "Upload Photos", text: "Easily import your photos from your phone, computer, or Instagram." },
  { icon: Wand2, title: "Customize Layout", text: "Choose a curated template or design every page with our intuitive editor." },
  { icon: Eye, title: "Review Design", text: "See a digital 3D preview of your book before we send it to print." },
  { icon: Printer, title: "Print & Deliver", text: "We print on luxury paper and deliver to your doorstep in recycled packaging." },
];
function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">THE PROCESS</p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">
            Simple, Seamless, <br /><span className="font-serif-italic normal-case text-rose">Storytelling</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className={`p-8 border border-border rounded-2xl bg-card hover:bg-rose-tint hover:border-rose/40 transition ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}>
              <s.icon className="size-10 text-rose" strokeWidth={1.5} />
              <div className="mt-8 text-xs tracking-[0.2em] font-semibold text-foreground/50">STEP 0{i + 1}</div>
              <h3 className="mt-3 font-display text-2xl uppercase">{s.title}</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { quote: "The print quality surpassed my highest expectations. My wedding album looks like something from a gallery. LUMINA truly captures the soul of photography.", name: "SARAH JENKINS", role: "Wedding Album Project" },
  { quote: "I've made travel journals before, but never with this level of design. The custom magazine format is so chic and professional. My Iceland trip feels legendary.", name: "MARCUS REED", role: "Travel Magazine Project" },
  { quote: "It was so easy to create! I made a 'Year in Review' book for my family in under 20 minutes. The automated layouts are surprisingly artistic.", name: "ELENA VOGT", role: "Family Memory Book" },
];
function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-ink-deep text-white grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">TESTIMONIALS</p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">
            What Creators <br /><span className="font-serif-italic normal-case text-rose">Are Saying</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-dark rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-rose text-rose" />)}
              </div>
              <p className="text-white/85 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-display text-sm tracking-[0.15em]">{t.name}</div>
                <div className="mt-1 text-xs text-white/50">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
const plans = [
  { name: "ESSENTIAL", price: "$29", features: [["Softcover Magazine", true], ["40 Pages Included", true], ["Standard Matte Paper", true], ["Hardcover Options", false]], cta: "CHOOSE ESSENTIAL", featured: false },
  { name: "COLLECTOR", price: "$59", features: [["Hardcover Linen Wrap", true], ["60 Pages Included", true], ["Lustre Silk Paper", true], ["Premium Box Packaging", true]], cta: "CHOOSE COLLECTOR", featured: true },
  { name: "HEIRLOOM", price: "$129", features: [["Genuine Leather Cover", true], ["100 Pages Included", true], ["Archival Art Paper", true], ["Lay-Flat Binding", true]], cta: "CHOOSE HEIRLOOM", featured: false },
];
function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-rose-tint grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">SELECT YOUR CANVAS</p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">
            Pricing <span className="font-serif-italic normal-case text-rose">Plans</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-10 flex flex-col ${p.featured ? "bg-rose text-white shadow-lift scale-[1.03]" : "bg-white border border-border"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-white px-4 py-1 rounded-full text-[10px] tracking-[0.2em] font-semibold">MOST POPULAR</div>
              )}
              <div className={`text-xs tracking-[0.25em] font-semibold ${p.featured ? "text-white/70" : "text-foreground/50"}`}>{p.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-6xl">{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-white/70" : "text-foreground/50"}`}>/book</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                {p.features.map(([label, on]) => (
                  <li key={label as string} className="flex items-center gap-3 text-sm">
                    {on ? <Check className="size-4 shrink-0" /> : <XIcon className={`size-4 shrink-0 ${p.featured ? "text-white/40" : "text-foreground/30"}`} />}
                    <span className={!on ? "opacity-50 line-through" : ""}>{label as string}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-10 inline-flex justify-center items-center px-6 py-4 rounded-full text-xs tracking-[0.2em] font-semibold transition ${p.featured ? "bg-white text-rose hover:bg-ink hover:text-white" : "bg-ink text-white hover:bg-rose"}`}>
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
const faqs = [
  { q: "What is the typical shipping time?", a: "We typically print and ship within 3-5 business days. International shipping varies by location but generally takes 7-10 business days." },
  { q: "Can I import photos directly from Instagram?", a: "Yes! Our editor connects directly to Instagram, Google Photos, and Dropbox for seamless uploading." },
  { q: "Do you offer design assistance?", a: "Our \"Auto-Curate\" feature uses AI to layout your book beautifully in seconds, which you can then fine-tune manually." },
];
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-display text-5xl lg:text-6xl uppercase tracking-tight text-center mb-16">
          Frequently <span className="font-serif-italic normal-case text-rose">Asked</span> Questions
        </h2>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-6 text-left">
                <span className="font-display text-lg lg:text-xl uppercase tracking-tight pr-6">{f.q}</span>
                <ChevronDown className={`size-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="pb-6 text-foreground/70 leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-rose text-white relative overflow-hidden grain">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-display uppercase text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight">
          Ready To Bring Your <br />
          <span className="font-serif-italic normal-case">Memories</span> To Life?
        </h2>
        <p className="mt-8 text-white/80 max-w-2xl mx-auto text-lg">
          Join 10,000+ creators who trust LUMINA for their most precious stories. Start your first book today and save 15% on your order.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#pricing" className="bg-white text-rose px-8 py-4 rounded-full font-semibold hover:bg-ink hover:text-white transition">Start Designing</a>
          <a href="#" className="border border-white/40 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rose transition">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-ink-deep text-white/70 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-12">
        <div>
          <div className="font-display text-2xl text-white">LUMINA</div>
          <p className="mt-4 text-sm leading-relaxed">Premium photobooks and editorial magazines for the modern creator.</p>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Instagram"><Instagram className="size-5" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="size-5" /></a>
            <a href="#" aria-label="Youtube"><Youtube className="size-5" /></a>
          </div>
        </div>
        {[
          ["PRODUCTS", ["Collections", "Travel Books", "Wedding Albums", "Love Story"]],
          ["RESOURCES", ["How it Works", "Support Center", "Pricing", "FAQ"]],
          ["SOCIAL", ["Instagram", "Pinterest", "TikTok", "Facebook"]],
        ].map(([title, items]) => (
          <div key={title as string}>
            <div className="text-xs tracking-[0.2em] font-semibold text-white mb-5">{title as string}</div>
            <ul className="space-y-3 text-sm">
              {(items as string[]).map((i) => <li key={i}><a href="#" className="hover:text-rose transition">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
        <div>© 2026 Lumina Editorial. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
