import { contactEmail } from "@/data/contactTexts";
import { useSettings } from "@/store/settings";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ricardo-espa%C3%B1ol-rowe/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/richiespa-ai", external: true },
  { label: contactEmail, href: `mailto:${contactEmail}`, external: false },
];

const newTabText = {
  es: "(se abre en una pestaña nueva)",
  en: "(opens in a new tab)",
};

function Footer() {
  const language = useSettings((state) => state.language);

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm">
        <p className="text-slate-600 dark:text-slate-400">
          © 2026 Ricardo Español Rowe
        </p>
        <ul className="flex flex-wrap gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-blue-400"
              >
                {link.label}
                {link.external && (
                  <>
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> {newTabText[language]}</span>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
