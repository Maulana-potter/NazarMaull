import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setIsDarkMode(theme === "dark");
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full",
          "focus:outline-none"
        )}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-300" />
        ) : (
          <Moon className="w-6 h-6 text-blue-900" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
