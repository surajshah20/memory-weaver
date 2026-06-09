import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { Upload, Image as ImageIcon, CheckCircle2, Sparkles, X } from "lucide-react";
import { useRef, useState } from "react";
import { Brand } from "@/components/AppHeader";
import { useWizard } from "@/lib/wizard-store";

export const Route = createFileRoute("/upload")({
  head: () => ({ meta: [{ title: "Upload your photos | blushbook" }] }),
  component: UploadPage,
});

function UploadPage() {
  const { state, update } = useWizard();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  const photos = state.photos ?? [];

  const handleFiles = async (files: FileList | null) => {
    if (!files) return;
    const list: string[] = [];
    for (const f of Array.from(files)) {
      if (!f.type.startsWith("image/")) continue;
      const url = await new Promise<string>((res) => {
        const r = new FileReader();
        r.onload = () => res(r.result as string);
        r.readAsDataURL(f);
      });
      list.push(url);
    }
    update({ photos: [...photos, ...list] });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Brand />
          <span className="text-sm text-muted-foreground">{photos.length} photo{photos.length === 1 ? "" : "s"} uploaded</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-3">Upload</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
          upload your <span className="font-serif-italic text-rose">photos</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Upload your travel photos — the more you add, the better your book will look.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Tip icon={<ImageIcon />} tint="bg-rose-soft text-rose" text="Upload 10–50 photos for best results" />
          <Tip icon={<CheckCircle2 />} tint="bg-emerald-100 text-emerald-700" text="JPG, PNG and WEBP formats supported" />
          <Tip icon={<Sparkles />} tint="bg-violet-100 text-violet-700" text="AI will organize them automatically" />
        </div>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            handleFiles(e.dataTransfer.files);
          }}
          className={`mt-6 border-2 border-dashed rounded-3xl p-12 text-center transition ${
            drag ? "border-rose bg-rose-soft/30" : "border-rose/40 bg-rose-tint/40"
          }`}
        >
          <div className="w-16 h-16 rounded-2xl bg-rose-soft text-rose mx-auto flex items-center justify-center">
            <Upload className="w-7 h-7" />
          </div>
          <h3 className="font-display text-2xl mt-5">Drag and drop your photos here</h3>
          <p className="text-sm text-muted-foreground mt-1">or click to browse your files</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => handleFiles(e.target.files)}
          />
          <button
            onClick={() => inputRef.current?.click()}
            className="mt-5 h-11 px-7 rounded-full bg-ink-deep text-white text-sm font-semibold hover:bg-ink transition shadow-soft"
          >
            Browse Photos
          </button>
        </div>

        {photos.length > 0 && (
          <>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8">
              {photos.map((p, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                  <img src={p} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                  <button
                    onClick={() => update({ photos: photos.filter((_, idx) => idx !== i) })}
                    className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-10">
              <Link
                to="/create/mode"
                className="h-11 px-6 rounded-full border border-border text-sm font-semibold text-ink hover:border-ink transition"
              >
                ‹ Back
              </Link>
              <button
                onClick={() => navigate({ to: "/ready" })}
                className="h-12 px-8 rounded-full bg-rose text-white text-sm font-semibold hover:opacity-90 transition shadow-soft"
              >
                Continue ›
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function Tip({ icon, tint, text }: { icon: React.ReactNode; tint: string; text: string }) {
  return (
    <div className="bg-background border border-border rounded-2xl p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tint}`}>
        <span className="[&>svg]:w-4 [&>svg]:h-4">{icon}</span>
      </div>
      <span className="text-sm text-ink">{text}</span>
    </div>
  );
}
