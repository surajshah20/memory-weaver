import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Star, ArrowRight, Truck, Menu, X,
  Image as ImageIcon, Upload, Wand2,
  Sparkles, Pencil, FileDown, LayoutTemplate, Package,
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
      { title: "Blushbook | Custom Photobooks & Magazines in Nepal" },
      { name: "description", content: "Design beautiful custom photobooks, travel journals, wedding albums and magazines. Premium print quality, delivered across Nepal." },
      { property: "og:title", content: "Blushbook — Your memories, beautifully bound" },
      { property: "og:description", content: "Custom photobooks and magazines made in Nepal. Easy editor, premium print, fast delivery." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Nav />
      <Hero />
      <Bestsellers />
      <HowItWorks />
      <Advantage />
      <QualityShowcase />
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
        <a href="#" className="font-display text-2xl tracking-tight flex items-center gap-2">
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-rose text-white">
            <BookOpen className="size-4" strokeWidth={2.5} />
          </span>
          Blushbook
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground/80">
          <a href="#bestsellers" className="hover:text-rose transition">Bestsellers</a>
          <a href="#how" className="hover:text-rose transition">How it Works</a>
          <a href="#advantage" className="hover:text-rose transition">Advantage</a>
          <a href="#pricing" className="hover:text-rose transition">Pricing</a>
          <a href="#faq" className="hover:text-rose transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium hover:text-rose">Sign in</a>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-rose transition">
            Get Started
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-4 flex flex-col gap-3 text-sm">
          <a href="#bestsellers" onClick={() => setOpen(false)}>Bestsellers</a>
          <a href="#how" onClick={() => setOpen(false)}>How it Works</a>
          <a href="#advantage" onClick={() => setOpen(false)}>Advantage</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#pricing" className="bg-ink text-white px-5 py-2.5 rounded-full text-center mt-2">Get Started</a>
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
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-6">PROUDLY MADE IN NEPAL</p>
          <h1 className="font-display uppercase text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-ink">
            Your Memories, <br />
            <span className="font-serif-italic text-rose normal-case tracking-tight">beautifully</span> bound.
          </h1>
          <p className="mt-8 max-w-xl text-foreground/70 text-lg leading-relaxed">
            Upload your photos, weddings, or travel stories and turn them into beautifully crafted photobooks, magazines, and albums — printed and delivered across Nepal.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="inline-flex items-center gap-2 bg-ink text-white px-7 py-4 rounded-full font-medium hover:bg-rose transition">
              Start your photobook <ArrowRight className="size-4" />
            </a>
            <a href="#bestsellers" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium border border-ink/20 hover:border-ink transition">
              Browse Books
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["500+", "Books Bound"],
              ["4.9★", "Avg Rating"],
              ["48hrs", "Quick Print"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl lg:text-3xl text-ink">{n}</div>
                <div className="mt-1 text-[10px] tracking-[0.18em] font-semibold text-foreground/60 uppercase">{l}</div>
              </div>
            ))}
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
              <img src={heroCouple} alt="Wedding photobook" className="w-full h-[300px] object-cover" />
            </div>
          </div>
          <div className="absolute top-1/3 right-0 glass rounded-2xl px-4 py-3 shadow-soft animate-float-slow" style={{ animationDelay: "0.8s" }}>
            <div className="text-[10px] tracking-[0.2em] font-semibold text-rose">YOUR BOOK</div>
            <div className="text-sm font-medium">Forever kept ✦</div>
          </div>
          <div className="absolute bottom-10 right-4 glass rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-2 shadow-soft animate-float-slow" style={{ animationDelay: "2.2s" }}>
            <Check className="size-3 text-rose" /> Customizable
          </div>
        </div>
      </div>
      <div className="mt-16 max-w-7xl mx-auto px-6 lg:px-10 text-center text-xs tracking-[0.2em] font-semibold text-ink/60">
        <div className="flex items-center justify-center gap-2">
          <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-rose text-rose" />)}</div>
          TRUSTED BY HUNDREDS OF FAMILIES IN NEPAL
        </div>
      </div>
    </section>
  );
}

/* ---------- BESTSELLERS ---------- */
const bestsellers = [
  { title: "Travel Photobook", price: "Rs. 2,499", tag: "Best Seller", img: colTravel },
  { title: "Custom Photobook", price: "Rs. 3,499", tag: "Most Loved", img: colMagazine },
  { title: "Love Stories", price: "Rs. 4,499", tag: "Bestseller", img: colLove },
];
function Bestsellers() {
  return (
    <section id="bestsellers" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">TOP PICKS</p>
            <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">
              best <span className="font-serif-italic normal-case text-rose">sellers</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold tracking-[0.18em] border-b border-ink pb-1 hover:text-rose hover:border-rose transition">VIEW ALL →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bestsellers.map((c, i) => (
            <div key={c.title} className={`group ${i === 1 ? "lg:mt-12" : ""}`}>
              <div className="relative overflow-hidden bg-rose-soft aspect-[3/4]">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] tracking-[0.18em] font-semibold text-rose">{c.tag}</span>
              </div>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="size-3 fill-rose text-rose" />)}
              </div>
              <h3 className="mt-3 text-xl font-display uppercase tracking-tight">{c.title}</h3>
              <div className="mt-1 text-lg font-semibold text-ink">{c.price}</div>
              <a href="#pricing" className="mt-5 inline-flex w-full justify-center items-center bg-ink text-white px-6 py-3 rounded-full text-xs tracking-[0.2em] font-semibold hover:bg-rose transition">
                START DESIGN
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
const steps = [
  { icon: LayoutTemplate, title: "Choose your template", text: "Pick from curated templates designed for travel, weddings, love stories, and family memories." },
  { icon: Upload, title: "Upload your photos", text: "Easily upload your favorite photos from your phone, computer, or cloud — no editing skills needed." },
  { icon: Pencil, title: "Customize your book", text: "Personalize layouts, add captions, choose papers and covers. Preview every page before printing." },
];
function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32 bg-rose-tint grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">SIMPLE PROCESS</p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">
            It's easy as 1, 2, 3 <br />
            to create your <span className="font-serif-italic normal-case text-rose">photobook</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className={`p-8 rounded-2xl bg-white border border-rose/15 hover:border-rose/40 transition ${i === 1 ? "lg:translate-y-8" : ""}`}>
              <s.icon className="size-10 text-rose" strokeWidth={1.5} />
              <div className="mt-8 text-xs tracking-[0.2em] font-semibold text-foreground/50">STEP 0{i + 1}</div>
              <h3 className="mt-3 font-display text-2xl uppercase">{s.title}</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a href="#pricing" className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full font-medium hover:bg-rose transition">
            Start My Design <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ADVANTAGE ---------- */
const features = [
  { icon: Sparkles, title: "AI Smart Curator", text: "Smart layouts auto-arrange your photos beautifully with one click, saving you hours." },
  { icon: Pencil, title: "Powerful Editor", text: "Drag, drop, resize and restyle — full creative control with our intuitive editor." },
  { icon: BookOpen, title: "Realistic Preview", text: "See a true 3D preview of your photobook before it goes to print. No surprises." },
  { icon: FileDown, title: "PDF Download", text: "Download a high-resolution digital copy of your book whenever you need it." },
  { icon: LayoutTemplate, title: "Templates", text: "Beautiful, curated templates for every occasion — travel, weddings, family, and more." },
  { icon: Package, title: "Fast Nepal Delivery", text: "Premium quality books packed with care and delivered across Nepal in days." },
];
function Advantage() {
  return (
    <section id="advantage" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">KEY FEATURES</p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">
            Discover the Blushbook <span className="font-serif-italic normal-case text-rose">advantage</span>
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">Everything you need to turn your memories into a keepsake.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-8 lg:p-10 hover:bg-rose-tint transition">
              <f.icon className="size-8 text-rose" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl uppercase tracking-tight">{f.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QUALITY SHOWCASE (dark section) ---------- */
function QualityShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-ink-deep text-white grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-3">
          <img src={colTravel} alt="Travel" className="w-full h-48 lg:h-64 object-cover rounded-xl" />
          <img src={colMagazine} alt="Magazine" className="w-full h-48 lg:h-64 object-cover rounded-xl mt-8" />
          <img src={storyFlower} alt="Detail" className="w-full h-48 lg:h-64 object-cover rounded-xl" />
          <img src={colLove} alt="Love" className="w-full h-48 lg:h-64 object-cover rounded-xl mt-8" />
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">PREMIUM CRAFTSMANSHIP</p>
          <h2 className="font-display text-5xl lg:text-6xl uppercase tracking-tight leading-none">
            Beautiful quality for <br />
            <span className="font-serif-italic text-rose normal-case">beautiful moments</span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed text-lg max-w-xl">
            Every Blushbook is printed on premium archival paper with vivid, true-to-life colors. Crafted to last generations — because your memories deserve nothing less.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              "Premium 200gsm matte paper",
              "Hardcover & softcover options",
              "Vivid, true-to-life printing",
              "Archival-quality binding",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 glass-dark rounded-full px-4 py-3 text-sm">
                <Check className="size-4 text-rose shrink-0" /> {f}
              </div>
            ))}
          </div>
          <a href="#pricing" className="mt-10 inline-flex items-center gap-2 bg-rose text-white px-7 py-4 rounded-full font-medium hover:bg-white hover:text-rose transition">
            Browse Our Books <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { quote: "The print quality is amazing. I made a travel photobook of our Pokhara trip and it turned out better than I imagined!", name: "Priya K.", role: "Kathmandu" },
  { quote: "Got my wedding album from Blushbook — soft, premium, and delivered on time. Highly recommend to every couple in Nepal.", name: "Aakash B.", role: "Lalitpur" },
  { quote: "Easy to design, super fast delivery. I gifted my parents a memory book and they were in tears. Truly special.", name: "Sabin K.", role: "Bhaktapur" },
];
function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-rose-tint grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">REVIEWS</p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">
            Loved by customers <br /><span className="font-serif-italic normal-case text-rose">across Nepal</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-rose text-rose" />)}</div>
            4.9 from 500+ reviews
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 flex flex-col border border-rose/10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-rose text-rose" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                <div className="size-10 rounded-full bg-rose/15 text-rose flex items-center justify-center font-display">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-display text-sm tracking-tight">{t.name}</div>
                  <div className="text-xs text-foreground/50">{t.role}</div>
                </div>
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
  { name: "TRAVEL JOURNAL", price: "Rs. 2,499", features: [["Softcover", true], ["20 Pages", true], ["A5 Size", true], ["Premium Paper", false]], cta: "START DESIGNING", featured: false },
  { name: "PREMIUM HARDCOVER", price: "Rs. 4,499", features: [["Hardcover", true], ["40-60 Pages", true], ["A4 Size", true], ["Lay-flat Binding", true]], cta: "START DESIGNING", featured: true },
  { name: "LUXURY ALBUM", price: "Rs. 6,499", features: [["Linen Hardcover", true], ["80 Pages", true], ["XL Size", true], ["Gift Box Included", true]], cta: "START DESIGNING", featured: false },
];
function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">PRICING</p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase tracking-tight">
            Simple, honest <span className="font-serif-italic normal-case text-rose">pricing</span>
          </h2>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">No hidden fees. Just beautiful books at fair prices in NPR.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-10 flex flex-col ${p.featured ? "bg-rose text-white shadow-lift scale-[1.03]" : "bg-white border border-border"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-white px-4 py-1 rounded-full text-[10px] tracking-[0.2em] font-semibold">MOST POPULAR</div>
              )}
              <div className={`text-xs tracking-[0.25em] font-semibold ${p.featured ? "text-white/70" : "text-foreground/50"}`}>{p.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl">{p.price}</span>
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
  { q: "How do I order?", a: "Pick a template, upload your photos, customize your book in our editor, and place your order. We handle the rest." },
  { q: "How long will it take to arrive?", a: "We print and ship within 3-5 business days inside Nepal. Kathmandu valley typically receives orders in 2-3 days." },
  { q: "Do you support hard covers?", a: "Yes — softcover, hardcover, and premium linen hardcover are all available depending on your plan." },
  { q: "Can I customize my images?", a: "Absolutely. Crop, filter, rearrange, and caption every photo until your book feels exactly right." },
  { q: "What are the dimensions of your books?", a: "We offer A5, A4 and XL sizes. Each plan lists its book size — pick what fits your story." },
  { q: "Do you accept payments via eSewa or Khalti?", a: "Yes, we accept eSewa, Khalti, IME Pay, bank transfer, and cash on delivery across Nepal." },
];
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32 bg-rose-tint grain">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] font-semibold text-rose mb-4">HELP</p>
          <h2 className="font-display text-5xl lg:text-6xl uppercase tracking-tight">
            Frequently <span className="font-serif-italic normal-case text-rose">asked</span> questions
          </h2>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10 bg-white/50 rounded-2xl px-6">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between py-6 text-left">
                <span className="font-display text-lg uppercase tracking-tight pr-6">{f.q}</span>
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
          Ready to create your <br />
          <span className="font-serif-italic normal-case">photo book?</span>
        </h2>
        <p className="mt-8 text-white/85 max-w-2xl mx-auto text-lg">
          Join hundreds of families across Nepal who have created their own beautiful Blushbook.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#pricing" className="bg-white text-rose px-8 py-4 rounded-full font-semibold hover:bg-ink hover:text-white transition">Get Started Free</a>
          <a href="#" className="border border-white/40 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rose transition">Contact Us</a>
        </div>
        <p className="mt-6 text-xs text-white/70 tracking-wider">Free to design · Pay only when your Blushbook is ready</p>
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
          <div className="font-display text-2xl text-white flex items-center gap-2">
            <span className="inline-flex size-7 items-center justify-center rounded-md bg-rose text-white">
              <BookOpen className="size-4" strokeWidth={2.5} />
            </span>
            Blushbook
          </div>
          <p className="mt-4 text-sm leading-relaxed">Custom photobooks, journals and albums — proudly made and delivered across Nepal.</p>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Instagram"><Instagram className="size-5" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="size-5" /></a>
            <a href="#" aria-label="Youtube"><Youtube className="size-5" /></a>
          </div>
        </div>
        {[
          ["PRODUCT", ["Bestsellers", "Travel Photobook", "Custom Photobook", "Love Stories", "Wedding Albums"]],
          ["COMPANY", ["About", "How it Works", "Pricing", "FAQ", "Contact"]],
          ["SUPPORT", ["Help Center", "Shipping in Nepal", "Returns", "Payment Methods"]],
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
        <div>© 2026 Blushbook. All rights reserved · Made in Nepal.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
