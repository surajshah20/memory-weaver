import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LayoutGrid, BookOpen, Palette, Eye, Save, ChevronLeft, Pencil } from "lucide-react";
import { useBooks, type Book } from "@/lib/wizard-store";
import { z } from "zod";

export const Route = createFileRoute("/editor")({
  head: () => ({ meta: [{ title: "Book editor | blushbook" }] }),
  validateSearch: z.object({ id: z.string().optional() }),
  component: EditorPage,
});

type Tab = "photos" | "cover" | "style";

function EditorPage() {
  const { id } = Route.useSearch();
  const { books, save } = useBooks();
  const [tab, setTab] = useState<Tab>("photos");
  const [book, setBook] = useState<Book | undefined>(undefined);

  useEffect(() => {
    setBook(books.find((b) => b.id === id) ?? books[0]);
  }, [id, books]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-center px-6">
        <div>
          <h1 className="font-display text-3xl">No book found</h1>
          <p className="mt-3 text-muted-foreground">Create a book first to open the editor.</p>
          <Link to="/create" className="mt-6 inline-block h-11 px-6 rounded-full bg-ink-deep text-white font-semibold leading-[44px]">
            Create a book
          </Link>
        </div>
      </div>
    );
  }

  const saveBook = () => save({ ...book, status: "complete" });

  return (
    <div className="min-h-screen bg-rose-tint/30 flex flex-col">
      <header className="bg-background border-b border-border">
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink">
              <ChevronLeft className="w-4 h-4" /> Dashboard
            </Link>
            <span className="text-border">|</span>
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-rose flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </span>
              <span className="font-display text-lg tracking-tight">{book.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm font-semibold hover:border-ink transition">
              <Eye className="w-4 h-4" /> Preview
            </button>
            <button
              onClick={saveBook}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-ink-deep text-white text-sm font-semibold hover:bg-ink transition shadow-soft"
            >
              <Save className="w-4 h-4" /> Save
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-60 bg-background border-r border-border flex-shrink-0 p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-4">Editor</p>
          <nav className="space-y-1.5">
            <TabBtn active={tab === "photos"} onClick={() => setTab("photos")} icon={<LayoutGrid className="w-4 h-4" />} label="Photos" />
            <TabBtn active={tab === "cover"} onClick={() => setTab("cover")} icon={<BookOpen className="w-4 h-4" />} label="Cover" />
            <TabBtn active={tab === "style"} onClick={() => setTab("style")} icon={<Palette className="w-4 h-4" />} label="Style" />
          </nav>

          <div className="mt-10 space-y-4 text-sm">
            <Info label="Destination" value={book.destination} />
            <Info label="Photos" value={`${book.photos.length} photos`} />
            <Info label="Pages" value={`${Math.max(2, book.photos.length + 1)} pages`} />
            <Info label="Status">
              <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-700 capitalize">
                {book.status}
              </span>
            </Info>
          </div>
        </aside>

        <main className="flex-1 p-8 lg:p-12">
          {tab === "photos" && <PhotosTab book={book} />}
          {tab === "cover" && <CoverTab book={book} />}
          {tab === "style" && <StyleTab book={book} />}
        </main>
      </div>
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full inline-flex items-center gap-2.5 h-10 px-3 rounded-xl text-sm font-semibold transition ${
        active ? "bg-rose-soft text-rose" : "text-ink hover:bg-muted"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Info({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      {children ? <div className="mt-1">{children}</div> : <p className="text-ink font-semibold mt-1 break-words">{value}</p>}
    </div>
  );
}

function PhotosTab({ book }: { book: Book }) {
  return (
    <div>
      <h1 className="font-display text-4xl tracking-tight">
        photos &amp; <span className="font-serif-italic text-rose">captions</span>
      </h1>
      <p className="mt-2 text-muted-foreground text-sm">
        Drag to reorder · Click caption to edit · Hover to set cover
      </p>

      {book.photos.length === 0 ? (
        <div className="mt-10 border-2 border-dashed border-border rounded-3xl p-16 text-center text-muted-foreground">
          No photos yet.{" "}
          <Link to="/upload" className="text-rose font-semibold hover:underline">
            Upload some
          </Link>
          .
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {book.photos.map((p, i) => (
            <div key={i} className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition">
              <div className="relative">
                <img src={p} alt={`Photo ${i + 1}`} className="w-full aspect-square object-cover" />
                {i === 0 && (
                  <span className="absolute top-2 left-2 bg-rose text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Cover
                  </span>
                )}
                <span className="absolute top-2 right-2 text-[10px] font-bold text-ink bg-white/90 px-2 py-1 rounded-full">
                  {i + 1}
                </span>
              </div>
              <div className="p-3 flex items-start gap-2 text-xs text-muted-foreground">
                <Pencil className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>A breathtaking moment captured in the heart of {book.destination || book.title}…</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="font-display text-3xl tracking-tight mt-12">book sections</h2>
      <div className="mt-5 bg-background border border-border rounded-2xl p-5 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-rose-soft text-rose flex items-center justify-center font-bold">1</div>
        <div>
          <p className="font-semibold">Arrival in {book.destination || book.title}</p>
          <p className="text-xs text-muted-foreground">Single Layout</p>
        </div>
      </div>
    </div>
  );
}

function CoverTab({ book }: { book: Book }) {
  return (
    <div>
      <h1 className="font-display text-4xl tracking-tight">
        cover <span className="font-serif-italic text-rose">design</span>
      </h1>
      <p className="mt-2 text-muted-foreground text-sm">Choose the photo and text that appear on the cover.</p>
      <div className="mt-8 max-w-xl bg-background border border-border rounded-3xl p-6">
        {book.cover && <img src={book.cover} alt="Cover" className="w-full aspect-[3/4] object-cover rounded-2xl" />}
        <h3 className="font-display text-3xl mt-5">{book.title}</h3>
        <p className="text-muted-foreground">{book.destination}</p>
      </div>
    </div>
  );
}

function StyleTab({ book }: { book: Book }) {
  return (
    <div>
      <h1 className="font-display text-4xl tracking-tight">
        style &amp; <span className="font-serif-italic text-rose">template</span>
      </h1>
      <p className="mt-2 text-muted-foreground text-sm">
        Current template: <span className="font-semibold text-ink capitalize">{book.template ?? "default"}</span>
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
        {["modern", "vintage", "luxury", "adventure", "journal"].map((t) => (
          <div
            key={t}
            className={`rounded-2xl border-2 p-5 text-center capitalize font-semibold cursor-pointer transition ${
              book.template === t ? "border-rose bg-rose-soft text-rose" : "border-border hover:border-ink/40"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
