import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Mail, Lock, User, Eye, EyeOff, Check } from "lucide-react";
import { useState } from "react";
import { Brand } from "@/components/AppHeader";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account | blushbook" },
      { name: "description", content: "Free to start — pay only when you order a printed travel photobook." },
    ],
  }),
  component: SignupPage,
});

const PERKS = [
  "Free to design — no credit card needed",
  "AI automatically organizes your photos",
  "50+ professional templates to choose from",
  "Download as PDF or order a printed copy",
  "Delivered worldwide in 5–12 business days",
];

function SignupPage() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex items-center justify-center px-6 py-16 lg:py-24 bg-background">
        <div className="w-full max-w-md animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-4">
            Get started
          </p>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
            create your <span className="font-serif-italic text-rose">account</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Free to start — pay only when you order a printed book.
          </p>

          <form
            className="mt-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/dashboard" });
            }}
          >
            <Field icon={<User className="w-4 h-4" />} label="Full Name" placeholder="Your full name" />
            <Field icon={<Mail className="w-4 h-4" />} type="email" label="Email address" placeholder="you@example.com" />
            <div>
              <label className="text-sm font-semibold text-ink">Password</label>
              <div className="mt-2 relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Min 6 characters"
                  className="w-full h-12 pl-11 pr-12 rounded-full border border-border bg-background text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/15 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-ink"
                >
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-full bg-ink-deep text-white text-sm font-semibold hover:bg-ink transition shadow-soft"
            >
              Create Free Account
            </button>
            <p className="text-xs text-center text-muted-foreground">
              By creating an account you agree to our{" "}
              <a className="text-rose hover:underline">Terms</a> and{" "}
              <a className="text-rose hover:underline">Privacy Policy</a>.
            </p>
          </form>

          <div className="my-8 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" />or<span className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-rose font-semibold hover:underline">
              Sign in
            </Link>
          </p>
          <p className="mt-3 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-ink">
              Back to homepage
            </Link>
          </p>
        </div>
      </div>

      <div className="relative lg:w-1/2 min-h-[40vh] lg:min-h-screen overflow-hidden grain">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80"
          alt="Mountains above clouds"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
        <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col">
          <Brand light />
          <div className="mt-auto max-w-md">
            <h2 className="font-display text-4xl md:text-5xl text-white leading-[1.05] tracking-tight">
              start creating your <span className="font-serif-italic text-rose-soft">travel book</span> today
            </h2>
            <ul className="mt-8 space-y-3">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/90 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-rose flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid grid-cols-3 gap-3">
              <Stat k="10K+" v="Books Created" />
              <Stat k="4.9★" v="Rating" />
              <Stat k="100+" v="Countries" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon,
  label,
  placeholder,
  type = "text",
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-ink">{label}</label>
      <div className="mt-2 relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full h-12 pl-11 pr-4 rounded-full border border-border bg-background text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/15 transition"
        />
      </div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="glass-dark rounded-xl px-3 py-3 text-center">
      <div className="font-display text-xl text-white">{k}</div>
      <div className="text-[10px] uppercase tracking-wider text-white/60 mt-0.5">{v}</div>
    </div>
  );
}
