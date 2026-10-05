import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "es" | "en";

type SettingsState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      language: "es",
      setLanguage: (language) => set({ language }),
    }),
    { name: "portfolio-settings" },
  ),
);
