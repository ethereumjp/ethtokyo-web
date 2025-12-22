import { useEffect, useState } from "hono/jsx";
import MoonIcon from "@/components/icons/Moon";
import SunIcon from "@/components/icons/Sun";

const target = "theme";

const themes = [
  {
    name: "dark",
    icon: <MoonIcon />,
  },
  {
    name: "light",
    icon: <SunIcon />,
  },
];

type Theme = "dark" | "light";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<Theme>("dark");

  useEffect(() => {
    setDarkMode((localStorage.getItem("ethtokyo.theme") as Theme) ?? "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode === "dark");
    localStorage.setItem("ethtokyo.theme", darkMode);
  }, [darkMode]);

  return (
    <div className="fixed top-6 right-6 text-xl">
      <button
        type="button"
        popovertarget={target}
        popovertargetAction="show"
        class="anchor-theme rounded-full p-1.5 style-base w-8 h-8 flex items-center justify-center z-50 border"
        onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")}
      >
        {darkMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
