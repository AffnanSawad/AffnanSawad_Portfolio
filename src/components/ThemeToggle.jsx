import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default dark

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme || storedTheme === "dark") {
      // No stored theme or dark saved → enable dark mode
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // Stored theme is light → enable light mode
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
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
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <Sun className="h-8 w-8 text-yellow-300" />
      ) : (
        <Moon className="h-8 w-8 text-blue-900" />
      )}
    </button>
  );
};
