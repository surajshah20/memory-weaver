import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Brand } from "@/components/AppHeader";
import { useBooks, useWizard, newId } from "@/lib/wizard-store";

export const Route = createFileRoute("/ready")({
  head: () => ({ meta: [{ title: "Your book is ready | blushbook" }] }),
  component: ReadyPage,
});

function ReadyPage() {
  const { state, update, reset } = useWizard();
  const { save } = useBooks();
  const navigate = useNavigate();
  const photos = state.photos ?? [];
  const cover = photos[0];

  const openEditor = () => {
    const id = state.bookId ?? newId();
    save({
      id,
      title: state.title ?? "Untitled",
      destination: state.destination ?? "",
      startDate: state.startDate,
      endDate: state.endDate,
      status: "draft",
      cover,
      template: state.template,
      bookType: state.bookType,
      photos,
      createdAt: Date.now(),
    });
    update({ bookId: id });
    navigate({ to: "/editor", search: { id } });
    setTimeout(reset, 200);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Brand />
          <span className="text-sm text-muted-foreground">{photos.length} photo{photos.length === 1 ? "" : "s"} uploaded</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-3">Ready</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
          upload your <span className="font-serif-italic text-rose">photos</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Upload your travel photos — the more you add, the better your book will look.
        </p>

        <div className="mt-8 bg-background border border-border rounded-3xl p-12 text-center shadow-soft">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-display text-4xl mt-5">
            your book is <span className="font-serif-italic text-rose">ready!</span>
          </h2>
          <p className="mt-2 text-muted-foreground">AI has organized your photos into a beautiful travel book.</p>
        </div>

        <Section title="Cover Photo">
          <div className="flex items-center gap-5">
            {cover ? (
              <img src={cover} alt="Cover" className="w-28 h-28 rounded-2xl object-cover" />
            ) : (
              <div className="w-28 h-28 rounded-2xl bg-muted" />
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Subtitle</p>
              <p className="font-display text-2xl mt-1">Memories from {state.destination || state.title}</p>
            </div>
          </div>
        </Section>

        <Section title="Book Sections" subtitle="(1 section)">
          <div className="rounded-2xl bg-rose-tint/40 p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-rose-soft text-rose flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <p className="font-semibold text-ink">Arrival in {state.destination || state.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{photos.length} photos · single layout</p>
            </div>
          </div>
        </Section>

        <Section title="AI Captions">
          <div className="rounded-2xl bg-rose-tint/40 p-5 flex items-center gap-4">
            {cover && <img src={cover} alt="" className="w-14 h-14 rounded-xl object-cover" />}
            <p className="text-sm text-muted-foreground">
              A breathtaking moment captured in the heart of {state.destination || state.title}.
            </p>
          </div>
        </Section>

        <div className="mt-10 flex flex-col gap-3">
          <button
            onClick={openEditor}
            className="w-full h-14 rounded-2xl bg-ink-deep text-white font-semibold inline-flex items-center justify-center gap-2 hover:bg-ink transition shadow-soft"
          >
            Open Book Editor <ArrowRight className="w-4 h-4" />
          </button>
          <Link to="/upload" className="text-sm text-center text-muted-foreground hover:text-ink">
            ‹ Add more photos
          </Link>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 bg-background border border-border rounded-3xl p-6 md:p-8">
      <h3 className="font-display text-2xl tracking-tight">
        {title}
        {subtitle && <span className="text-sm font-sans text-muted-foreground ml-2">{subtitle}</span>}
      </h3>
      <div className="mt-5">{children}</div>
    </div>
  );
}
