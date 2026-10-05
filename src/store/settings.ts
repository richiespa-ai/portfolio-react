import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "es" | "en";
export type Theme = "light" | "dark";

type SettingsState = {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
};

const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      language: "es",
      theme: systemTheme,
      setLanguage: (language) => set({ language }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    { name: "portfolio-settings" },
  ),
);
