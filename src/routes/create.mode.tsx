import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Lightbulb, Pencil, Check } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { WizardSteps, WizardFooter } from "@/components/WizardSteps";
import { useWizard, type CreateMode } from "@/lib/wizard-store";

export const Route = createFileRoute("/create/mode")({
  head: () => ({ meta: [{ title: "Choose create mode | blushbook" }] }),
  component: ModePage,
});

const MODES: {
  id: CreateMode;
  name: string;
  badge: string;
  badgeColor: string;
  icon: typeof Lightbulb;
  iconBg: string;
  desc: string;
  perks: string[];
}[] = [
  {
    id: "ai",
    name: "AI Mode",
    badge: "Recommended",
    badgeColor: "bg-rose-soft text-rose",
    icon: Lightbulb,
    iconBg: "bg-ink-deep text-white",
    desc: "Upload your photos and let AI automatically organize them into sections, write captions, select the best cover, and create your complete book.",
    perks: ["Auto photo organization", "AI-generated captions", "Smart cover selection", "Ready in seconds"],
  },
  {
    id: "manual",
    name: "Manual Mode",
    badge: "Full Control",
    badgeColor: "bg-muted text-ink",
    icon: Pencil,
    iconBg: "bg-rose text-white",
    desc: "Build your book yourself. Choose your own layouts, pick photos for each page, write your own captions, and arrange everything exactly how you want.",
    perks: ["Choose your own layouts", "Pick photos per page", "Write custom captions", "Full creative control"],
  },
];

function ModePage() {
  const { state, update } = useWizard();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AppHeader back={{ to: "/dashboard", label: "Back to Dashboard" }} />
      <WizardSteps current={3} />
      <main className="max-w-5xl mx-auto px-6">
        <div className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-3">Step 4</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95]">
            how do you want to <span className="font-serif-italic text-rose">create?</span>
          </h1>
          <p className="mt-3 text-muted-foreground">Choose how you want to build your book.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {MODES.map((m) => {
              const selected = state.mode === m.id;
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => update({ mode: m.id })}
                  className={`text-left rounded-2xl border-2 transition p-6 bg-background ${
                    selected ? "border-rose shadow-soft" : "border-border hover:border-ink/40"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${m.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <h3 className="font-display text-2xl">{m.name}</h3>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${m.badgeColor}`}>
                      {m.badge}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {m.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-ink">
                        <span className="w-5 h-5 rounded-full bg-rose-soft text-rose flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>
      </main>
      <WizardFooter
        step={4}
        onBack={() => navigate({ to: "/create/trip-info" })}
        disabled={!state.mode}
        nextLabel="Create My Book"
        onNext={() => navigate({ to: "/upload" })}
      />
    </div>
  );
}
