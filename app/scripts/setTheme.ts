const isDark =
  localStorage.theme === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !("ethtokyo.theme" in localStorage));

const setTheme = () => {
  document.documentElement.classList.toggle("dark", isDark);
};

setTheme();
