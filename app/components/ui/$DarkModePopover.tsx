import { useEffect, useState } from "hono/jsx";

const target = "theme";

const themes = [
  {
    name: "system",
    icon: "모",
  },
  {
    name: "dark",
    icon: "⏾",
  },
  {
    name: "light",
    icon: "☀︎",
  },
];

type Theme = "system" | "dark" | "light";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<Theme>("system");

  useEffect(() => {
    console.log("init----", localStorage.getItem("ethtokyo.theme"));
    setDarkMode((localStorage.getItem("ethtokyo.theme") as Theme) ?? "system");
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
        class="anchor-theme rounded-full p-2 style-base w-8 h-8 flex items-center justify-center z-50 border"
      >
        ⏾
      </button>
      <div
        id={target}
        popover="auto"
        class="rounded shadow-lg m-0 style-base border top-16 right-6 left-auto fixed"
      >
        {themes.map((theme) => {
          return (
            <button
              class="block w-full px-3 py-2"
              key={theme.name}
              type="button"
              popovertargetAction="hide"
              onClick={() => setDarkMode(theme.name as Theme)}
            >
              {theme.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}
