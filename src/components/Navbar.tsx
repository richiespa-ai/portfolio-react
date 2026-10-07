import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contactTexts } from "@/data/contactTexts";
import { sectionTitles } from "@/data/experience";
import { texts } from "@/data/texts";
import { useSettings } from "@/store/settings";

const navTexts = {
  es: {
    menu: "Menú",
    sections: "Secciones de la página",
    experience: "Experiencia",
  },
  en: { menu: "Menu", sections: "Page sections", experience: "Experience" },
};

const linkClass =
  "text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-blue-400";

function Navbar() {
  const [open, setOpen] = useState(false);
  const language = useSettings((state) => state.language);
  const t = texts[language];
  const n = navTexts[language];

  const links = [
    { href: "#sobre-mi", label: t.aboutTitle },
    { href: "#proyectos", label: t.projectsTitle },
    { href: "#experiencia", label: n.experience },
    { href: "#habilidades", label: t.skillsTitle },
    { href: "#formacion", label: sectionTitles[language].education },
    { href: "#contacto", label: contactTexts[language].title },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#inicio" className="font-semibold">
          Ricardo Español Rowe
        </a>
        <nav aria-label={n.sections} className="hidden lg:block">
          <ul className="flex gap-5 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="cursor-pointer rounded-md border border-slate-300 px-3 py-1 font-mono text-sm lg:hidden dark:border-slate-600">
            {n.menu}
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{n.menu}</SheetTitle>
              <SheetDescription>{n.sections}</SheetDescription>
            </SheetHeader>
            <nav aria-label={n.sections}>
              <ul className="flex flex-col px-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 text-base ${linkClass}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex items-center gap-2 border-t border-slate-200 p-4 dark:border-slate-700">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
