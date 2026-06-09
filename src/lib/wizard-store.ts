import { useEffect, useState } from "react";

export type BookType = "travel-journal" | "adventure" | "premium" | "luxury";
export type Template = "modern" | "vintage" | "luxury" | "adventure" | "journal";
export type CreateMode = "ai" | "manual";

export interface WizardState {
  bookType?: BookType;
  template?: Template;
  title?: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  mode?: CreateMode;
  photos?: string[]; // data URLs
  bookId?: string;
}

export interface Book {
  id: string;
  title: string;
  destination: string;
  startDate?: string;
  endDate?: string;
  status: "draft" | "complete" | "ordered";
  cover?: string;
  template?: Template;
  bookType?: BookType;
  photos: string[];
  createdAt: number;
}

const WIZARD_KEY = "blushbook_wizard";
const BOOKS_KEY = "blushbook_books";

function read<T>(k: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(k);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(k: string, v: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(k, JSON.stringify(v));
  window.dispatchEvent(new StorageEvent("storage", { key: k }));
}

export function useWizard() {
  const [state, setState] = useState<WizardState>(() => read(WIZARD_KEY, {}));
  useEffect(() => {
    const fn = () => setState(read(WIZARD_KEY, {}));
    window.addEventListener("storage", fn);
    return () => window.removeEventListener("storage", fn);
  }, []);
  const update = (patch: Partial<WizardState>) => {
    const next = { ...read(WIZARD_KEY, {}), ...patch };
    write(WIZARD_KEY, next);
    setState(next);
  };
  const reset = () => {
    write(WIZARD_KEY, {});
    setState({});
  };
  return { state, update, reset };
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>(() => read(BOOKS_KEY, []));
  useEffect(() => {
    const fn = () => setBooks(read(BOOKS_KEY, []));
    window.addEventListener("storage", fn);
    return () => window.removeEventListener("storage", fn);
  }, []);
  const save = (book: Book) => {
    const cur = read<Book[]>(BOOKS_KEY, []);
    const idx = cur.findIndex((b) => b.id === book.id);
    if (idx >= 0) cur[idx] = book;
    else cur.unshift(book);
    write(BOOKS_KEY, cur);
    setBooks(cur);
  };
  const remove = (id: string) => {
    const cur = read<Book[]>(BOOKS_KEY, []).filter((b) => b.id !== id);
    write(BOOKS_KEY, cur);
    setBooks(cur);
  };
  return { books, save, remove };
}

export function newId() {
  return Math.random().toString(36).slice(2, 10);
}
