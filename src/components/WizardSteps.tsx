import { Check } from "lucide-react";

const STEPS = [
  { key: "book-type", label: "Book Type" },
  { key: "template", label: "Template" },
  { key: "trip-info", label: "Trip Info" },
  { key: "mode", label: "Create Mode" },
];

export function WizardSteps({ current }: { current: number }) {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-10 pb-8">
      <div className="flex items-center">
        {STEPS.map((s, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={s.key} className="flex-1 flex items-center">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition ${
                    done
                      ? "bg-rose text-white"
                      : active
                      ? "bg-ink-deep text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {done ? <Check className="w-5 h-5" /> : i + 1}
                </div>
                <span
                  className={`mt-2 text-xs uppercase tracking-wider ${
                    active ? "text-ink font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-px mx-2 ${done ? "bg-rose" : "bg-border"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function WizardFooter({
  step,
  total = 4,
  onBack,
  onNext,
  nextLabel = "Continue",
  disabled,
}: {
  step: number;
  total?: number;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  disabled?: boolean;
}) {
  return (
    <div className="max-w-5xl mx-auto px-6 pb-16 pt-8 flex items-center justify-between">
      <button
        onClick={onBack}
        disabled={!onBack}
        className="h-11 px-6 rounded-full border border-border text-sm font-semibold text-ink hover:border-ink disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        ‹ Back
      </button>
      <p className="text-sm text-muted-foreground">
        Step {step} of {total}
      </p>
      <button
        onClick={onNext}
        disabled={disabled}
        className="h-11 px-8 rounded-full bg-ink-deep text-white text-sm font-semibold hover:bg-ink disabled:opacity-40 disabled:cursor-not-allowed transition shadow-soft"
      >
        {nextLabel} ›
      </button>
    </div>
  );
}
