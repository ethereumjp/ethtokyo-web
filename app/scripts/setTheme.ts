const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const isDark =
  localStorage.theme === "dark" ||
  (isSystemDark &&
    !("ethtokyo.theme" in localStorage) &&
    localStorage?.ethtokyo?.theme === "system");

const setTheme = () => {
  document.documentElement.classList.toggle("dark", isDark);
};

setTheme();
