import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Star } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In | blushbook" },
      { name: "description", content: "Sign in to continue creating beautiful travel photobooks with blushbook." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left visual panel */}
      <div className="relative lg:w-1/2 min-h-[42vh] lg:min-h-screen overflow-hidden grain">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80"
          alt="Travel map and camera"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        {/* Brand */}
        <div className="relative z-10 p-8 lg:p-12">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose" />
            <span className="font-display text-2xl tracking-tight text-white">
              blush<span className="text-rose">book</span>
            </span>
          </Link>
        </div>

        {/* Editorial quote */}
        <div className="relative z-10 absolute-fallback mt-auto p-8 lg:p-12 flex flex-col justify-end h-[calc(100%-6rem)]">
          <div className="max-w-md">
            <p className="font-display text-3xl md:text-5xl text-white leading-[1.05] tracking-tight">
              every journey
              <br />
              deserves to be
              <br />
              <span className="font-serif-italic text-rose-soft">remembered</span> beautifully.
            </p>
            <p className="mt-6 text-sm text-white/75 max-w-sm">
              Join 10,000+ travelers who preserve their memories with blushbook.
            </p>

            {/* Testimonial card */}
            <div className="mt-10 glass-dark rounded-2xl p-5 max-w-sm">
              <div className="flex items-center gap-1 text-rose">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 font-serif-italic text-white/90 text-[15px] leading-snug">
                "My Bali travel book is absolutely stunning. The AI created perfect captions for every photo."
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/60">
                — Sarah M., New York
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="lg:w-1/2 flex items-center justify-center px-6 py-16 lg:py-24">
        <div className="w-full max-w-md animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-rose font-semibold mb-4">
            Welcome
          </p>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
            welcome <span className="font-serif-italic text-rose">back</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Sign in to continue creating beautiful memories.
          </p>

          <form className="mt-10 space-y-5">
            <div>
              <label className="text-sm font-semibold text-ink">Email address</label>
              <div className="mt-2 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-12 pl-11 pr-4 rounded-full border border-border bg-background text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/15 transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-ink">Password</label>
                <a href="#" className="text-sm text-rose hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="mt-2 relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Your password"
                  className="w-full h-12 pl-11 pr-12 rounded-full border border-border bg-background text-sm focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/15 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-ink"
                  aria-label="Toggle password visibility"
                >
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full bg-ink-deep text-white text-sm font-semibold tracking-wide hover:bg-ink transition shadow-soft"
            >
              Sign In
            </button>
          </form>

          <div className="my-8 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/" className="text-rose font-semibold hover:underline">
              Create one free
            </Link>
          </p>
          <p className="mt-3 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-ink transition">
              Back to homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
