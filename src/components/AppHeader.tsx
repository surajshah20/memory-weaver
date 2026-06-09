import { Link } from "@tanstack/react-router";
import { ChevronLeft, LogOut, ShoppingBag } from "lucide-react";
import type { ReactNode } from "react";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5">
      <span className="w-1.5 h-1.5 rounded-full bg-rose" />
      <span className={`font-display text-2xl tracking-tight ${light ? "text-white" : "text-ink"}`}>
        blush<span className="text-rose">book</span>
      </span>
    </Link>
  );
}

export function AppHeader({
  back,
  right,
}: {
  back?: { to: string; label: string };
  right?: ReactNode;
}) {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {back ? (
            <Link
              to={back.to}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink transition"
            >
              <ChevronLeft className="w-4 h-4" />
              {back.label}
            </Link>
          ) : (
            <Brand />
          )}
        </div>
        <div className="flex items-center gap-5">{right}</div>
      </div>
    </header>
  );
}

export function DashboardHeader() {
  return (
    <AppHeader
      right={
        <>
          <Link
            to="/dashboard"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-ink hover:text-rose transition"
          >
            <ShoppingBag className="w-4 h-4" /> My Orders
          </Link>
          <Link to="/" className="text-sm text-ink hover:text-rose transition">
            Admin
          </Link>
          <div className="w-9 h-9 rounded-full bg-rose-soft border border-rose/20" />
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink transition"
          >
            <LogOut className="w-4 h-4" /> Logout
          </Link>
        </>
      }
    />
  );
}
