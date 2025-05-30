import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils"; // Pastikan kamu punya fungsi cn ini atau bisa pakai className biasa

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        // Posisi untuk mobile: kanan bawah
        "fixed bottom-5 right-5",

        // Posisi untuk desktop/laptop: kanan atas
        "sm:top-5 sm:bottom-auto right-2",

        // Tampilan umum
        "z-50 p-2  transition-all duration-300",

        // Untuk aksesibilitas & interaksi
        "focus:outline-none"
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
