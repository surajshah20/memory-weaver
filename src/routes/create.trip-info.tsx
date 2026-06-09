import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppHeader } from "@/components/AppHeader";
import { WizardSteps, WizardFooter } from "@/components/WizardSteps";
import { useWizard } from "@/lib/wizard-store";

export const Route = createFileRoute("/create/trip-info")({
  head: () => ({ meta: [{ title: "Trip info | blushbook" }] }),
  component: TripInfoPage,
});

function TripInfoPage() {
  const { state, update } = useWizard();
  const navigate = useNavigate();

  const valid = !!(state.title && state.destination);

  return (
    <div className="min-h-screen bg-background">
      <AppHeader back={{ to: "/dashboard", label: "Back to Dashboard" }} />
      <WizardSteps current={2} />
      <main className="max-w-5xl mx-auto px-6">
        <div className="bg-background border border-border rounded-3xl p-8 md:p-10 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-3">Step 3</p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95]">
            tell us about your <span className="font-serif-italic text-rose">trip</span>
          </h1>
          <p className="mt-3 text-muted-foreground">This information will appear on your book cover.</p>

          <div className="mt-8 space-y-5 max-w-2xl">
            <Input
              label="Book Title"
              placeholder="My Bali Adventure"
              value={state.title ?? ""}
              onChange={(v) => update({ title: v })}
            />
            <Input
              label="Destination"
              placeholder="Bali, Indonesia"
              value={state.destination ?? ""}
              onChange={(v) => update({ destination: v })}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Start Date"
                type="date"
                value={state.startDate ?? ""}
                onChange={(v) => update({ startDate: v })}
              />
              <Input
                label="End Date"
                type="date"
                value={state.endDate ?? ""}
                onChange={(v) => update({ endDate: v })}
              />
            </div>
          </div>
        </div>
      </main>
      <WizardFooter
        step={3}
        onBack={() => navigate({ to: "/create/template" })}
        disabled={!valid}
        onNext={() => navigate({ to: "/create/mode" })}
      />
    </div>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full h-12 px-5 rounded-2xl border border-border bg-background text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/15 transition"
      />
    </div>
  );
}
