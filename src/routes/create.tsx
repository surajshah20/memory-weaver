import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { WizardSteps, WizardFooter } from "@/components/WizardSteps";
import { useWizard, type BookType } from "@/lib/wizard-store";

export const Route = createFileRoute("/create")({
  head: () => ({ meta: [{ title: "Choose book type | blushbook" }] }),
  component: CreatePage,
});

const TYPES: {
  id: BookType;
  name: string;
  price: string;
  priceColor: string;
  desc: string;
  meta: string[];
  badge?: string;
  img: string;
}[] = [
  {
    id: "travel-journal",
    name: "Travel Journal",
    price: "Rs. 1,999",
    priceColor: "text-rose",
    desc: "Classic diary style with a handwritten, personal feel. Perfect for solo trips.",
    meta: ["A5 · 14.8 × 21 cm", "20–60 pages", "Softcover"],
    img: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "adventure",
    name: "Adventure Scrapbook",
    price: "Rs. 2,499",
    priceColor: "text-emerald-600",
    desc: "Fun, creative layouts with bold typography. Great for adventurous trips.",
    meta: ["A4 · 21 × 29.7 cm", "20–80 pages", "Softcover"],
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "premium",
    name: "Premium Hardcover",
    price: "Rs. 3,499",
    priceColor: "text-rose",
    desc: "Professional hardcover album. The most popular choice for gift-worthy books.",
    meta: ["A4 · 21 × 29.7 cm", "40–100 pages", "Hardcover"],
    badge: "MOST POPULAR",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "luxury",
    name: "Luxury Album",
    price: "Rs. 4,999",
    priceColor: "text-fuchsia-600",
    desc: "Premium thick glossy pages with stunning lay-flat binding. Pure luxury.",
    meta: ["30 × 30 cm", "60–120 pages", "Hardcover"],
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
  },
];

function CreatePage() {
  const { state, update } = useWizard();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AppHeader back={{ to: "/dashboard", label: "Back to Dashboard" }} />
      <WizardSteps current={0} />
      <main className="max-w-5xl mx-auto px-6">
        <div className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-3">Step 1</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95]">
            choose your <span className="font-serif-italic text-rose">book type</span>
          </h1>
          <p className="mt-3 text-muted-foreground">Each book type has different sizes, page counts, and finishes.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {TYPES.map((t) => {
              const selected = state.bookType === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => update({ bookType: t.id })}
                  className={`text-left rounded-2xl border-2 transition overflow-hidden bg-background ${
                    selected ? "border-rose shadow-soft" : "border-border hover:border-ink/40"
                  }`}
                >
                  {t.badge && (
                    <div className="bg-rose text-white text-center text-xs font-bold tracking-wider py-1.5">
                      {t.badge}
                    </div>
                  )}
                  <div className="p-4 flex gap-4">
                    <img src={t.img} alt={t.name} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-xl">{t.name}</h3>
                        <span className={`font-display text-lg ${t.priceColor}`}>{t.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {t.meta.map((m) => (
                          <span key={m} className="text-[11px] px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>
      <WizardFooter
        step={1}
        disabled={!state.bookType}
        onNext={() => navigate({ to: "/create/template" })}
      />
    </div>
  );
}
