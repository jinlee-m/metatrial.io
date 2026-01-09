"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "metatrial_theme";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold shadow-sm"
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? "라이트 모드" : "다크 모드"}
    </button>
  );
}
