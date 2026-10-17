import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

/* ==========================================
   ASMARWEB STUDIO
   Light / Dark Theme Switch
========================================== */

const STORAGE_KEY = "theme";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Apply theme to the document
  const applyTheme = (selectedTheme) => {
    const isDark = selectedTheme === "dark";

    document.documentElement.classList.toggle("dark", isDark);

    document.documentElement.style.colorScheme = selectedTheme;
  };

  // Initialize theme after hydration
  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : systemPrefersDark
          ? "dark"
          : "light";

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    applyTheme(nextTheme);

    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      aria-label={
        mounted
          ? theme === "light"
            ? "Switch to dark mode"
            : "Switch to light mode"
          : "Toggle color theme"
      }
      aria-pressed={mounted ? theme === "dark" : undefined}
      title={
        mounted
          ? theme === "light"
            ? "Dark Mode"
            : "Light Mode"
          : "Toggle Theme"
      }
      className="
        fixed bottom-6 right-6
        z-[100]
        flex h-14 w-14
        items-center justify-center
        rounded-full
        border border-gray-200
        bg-white/90
        text-[#018A7C]
        shadow-xl
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:border-[#018A7C]
        hover:bg-[#018A7C]
        hover:text-white
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#018A7C]
        active:scale-95
        disabled:cursor-wait
        dark:border-white/15
        dark:bg-[#121126]/90
        dark:text-[#F5812D]
        dark:shadow-black/30
        dark:hover:border-[#F5812D]
        dark:hover:bg-[#F5812D]
        dark:hover:text-[#030017]
        sm:bottom-8
        sm:right-8
      "
    >
      <span
        className="
          pointer-events-none
          flex items-center
          justify-center
          transition-transform duration-300
        "
      >
        {!mounted ? (
          <span
            className="
              h-6 w-6 rounded-full
              border-2 border-current
              border-t-transparent
              animate-spin
            "
            aria-hidden="true"
          />
        ) : theme === "light" ? (
          <BsMoonStarsFill size={22} aria-hidden="true" />
        ) : (
          <BsSunFill size={23} aria-hidden="true" />
        )}
      </span>
    </button>
  );
};

export default ThemeSwitch;
