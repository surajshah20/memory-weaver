import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { WizardSteps, WizardFooter } from "@/components/WizardSteps";
import { useWizard, type Template } from "@/lib/wizard-store";

export const Route = createFileRoute("/create/template")({
  head: () => ({ meta: [{ title: "Pick a template | blushbook" }] }),
  component: TemplatePage,
});

const TEMPLATES: { id: Template; name: string; desc: string; img: string; premium?: boolean }[] = [
  {
    id: "modern",
    name: "Modern Minimal",
    desc: "Clean lines, bold typography, dark backgrounds",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "vintage",
    name: "Vintage Travel",
    desc: "Warm tones, aged textures, nostalgic feel",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "luxury",
    name: "Luxury Album",
    desc: "Rich colors, gold accents, premium feel",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    premium: true,
  },
  {
    id: "adventure",
    name: "Adventure Scrapbook",
    desc: "Playful layouts, fun colors, creative style",
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "journal",
    name: "Travel Journal",
    desc: "Diary feel, handwritten fonts, personal touch",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
  },
];

function TemplatePage() {
  const { state, update } = useWizard();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AppHeader back={{ to: "/dashboard", label: "Back to Dashboard" }} />
      <WizardSteps current={1} />
      <main className="max-w-5xl mx-auto px-6">
        <div className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-3">Step 2</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95]">
            pick a <span className="font-serif-italic text-rose">design template</span>
          </h1>
          <p className="mt-3 text-muted-foreground">Each template has a unique visual style and layout.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {TEMPLATES.map((t) => {
              const selected = state.template === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => update({ template: t.id })}
                  className={`text-left rounded-2xl border-2 transition overflow-hidden bg-background ${
                    selected ? "border-rose shadow-soft" : "border-border hover:border-ink/40"
                  }`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                    {t.premium && (
                      <span className="absolute top-3 left-3 bg-amber-400 text-amber-950 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg">{t.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>
      <WizardFooter
        step={2}
        onBack={() => navigate({ to: "/create" })}
        disabled={!state.template}
        onNext={() => navigate({ to: "/create/trip-info" })}
      />
    </div>
  );
}
