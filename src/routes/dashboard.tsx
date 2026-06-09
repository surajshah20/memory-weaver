import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Clock, CheckCircle2, Package, Plus, Edit3, Eye } from "lucide-react";
import { DashboardHeader } from "@/components/AppHeader";
import { useBooks } from "@/lib/wizard-store";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Books | blushbook" },
      { name: "description", content: "Manage your travel photobooks — drafts, completed, and ordered." },
    ],
  }),
  component: DashboardPage,
});

type Filter = "all" | "draft" | "complete" | "ordered";

function DashboardPage() {
  const { books } = useBooks();
  const [filter, setFilter] = useState<Filter>("all");

  const stats = {
    total: books.length,
    inProgress: books.filter((b) => b.status === "draft").length,
    completed: books.filter((b) => b.status === "complete").length,
    ordered: books.filter((b) => b.status === "ordered").length,
  };

  const filtered = filter === "all" ? books : books.filter((b) => b.status === filter);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-3">
              Dashboard
            </p>
            <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              my <span className="font-serif-italic text-rose">books</span>
            </h1>
            <p className="mt-3 text-muted-foreground">
              Welcome back. Here are all your travel books.
            </p>
          </div>
          <Link
            to="/create"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink-deep text-white text-sm font-semibold hover:bg-ink transition shadow-soft"
          >
            <Plus className="w-4 h-4" /> Create New Book
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <StatCard icon={<BookOpen />} value={stats.total} label="Total Books" tint="bg-rose-soft text-rose" />
          <StatCard icon={<Clock />} value={stats.inProgress} label="In Progress" tint="bg-amber-100 text-amber-700" />
          <StatCard icon={<CheckCircle2 />} value={stats.completed} label="Completed" tint="bg-emerald-100 text-emerald-700" />
          <StatCard icon={<Package />} value={stats.ordered} label="Ordered" tint="bg-sky-100 text-sky-700" />
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-10">
          {(["all", "draft", "complete", "ordered"] as Filter[]).map((f) => {
            const count =
              f === "all" ? stats.total : f === "draft" ? stats.inProgress : f === "complete" ? stats.completed : stats.ordered;
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`h-10 px-5 rounded-full text-sm font-semibold capitalize transition inline-flex items-center gap-2 ${
                  active
                    ? "bg-ink-deep text-white"
                    : "bg-background border border-border text-ink hover:border-ink"
                }`}
              >
                {f === "all" ? "All Books" : f}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? "bg-white/20" : "bg-muted"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Link
            to="/create"
            className="group border-2 border-dashed border-border rounded-3xl min-h-[380px] flex flex-col items-center justify-center text-muted-foreground hover:border-rose hover:text-rose transition"
          >
            <div className="w-14 h-14 rounded-full bg-muted group-hover:bg-rose-soft flex items-center justify-center transition">
              <Plus className="w-6 h-6" />
            </div>
            <span className="mt-4 font-semibold">New Book</span>
          </Link>

          {filtered.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </main>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  tint,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  tint: string;
}) {
  return (
    <div className="bg-background border border-border rounded-2xl p-5 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tint}`}>
        <span className="[&>svg]:w-5 [&>svg]:h-5">{icon}</span>
      </div>
      <div>
        <div className="font-display text-3xl tracking-tight">{value}</div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">{label}</div>
      </div>
    </div>
  );
}

function BookCard({ book }: { book: { id: string; title: string; destination: string; startDate?: string; endDate?: string; status: string; cover?: string } }) {
  const statusColor =
    book.status === "ordered"
      ? "bg-sky-100 text-sky-700"
      : book.status === "complete"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-amber-100 text-amber-700";
  const statusLabel =
    book.status === "ordered" ? "Ordered" : book.status === "complete" ? "Complete" : "Draft";

  const fmt = (d?: string) =>
    d ? new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";

  return (
    <div className="bg-background border border-border rounded-3xl overflow-hidden hover:shadow-soft transition group">
      <div className="relative h-56 overflow-hidden">
        {book.cover ? (
          <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rose-soft to-rose-tint flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-rose/40" />
          </div>
        )}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor}`}>
          {statusLabel}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl tracking-tight">{book.title || "Untitled"}</h3>
        <p className="text-sm text-muted-foreground mt-1">{book.destination || "—"}</p>
        {(book.startDate || book.endDate) && (
          <p className="text-xs text-muted-foreground mt-1">
            {fmt(book.startDate)} — {fmt(book.endDate)}
          </p>
        )}
        <div className="flex gap-2 mt-4">
          <Link
            to="/editor"
            search={{ id: book.id }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 rounded-full bg-ink-deep text-white text-sm font-semibold hover:bg-ink transition"
          >
            <Edit3 className="w-3.5 h-3.5" /> Edit
          </Link>
          <Link
            to="/editor"
            search={{ id: book.id }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 rounded-full border border-border text-sm font-semibold text-ink hover:border-ink transition"
          >
            <Eye className="w-3.5 h-3.5" /> Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
