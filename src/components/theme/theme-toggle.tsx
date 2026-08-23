"use client";

import { useEffect } from "react";

export function ThemeToggle({ label }: { label: string }) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      document.documentElement.dataset.theme = storedTheme;
    }
  }, []);

  function toggleTheme() {
    const currentTheme =
      document.documentElement.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={label}>
      <span aria-hidden="true">◐</span>
    </button>
  );
}
