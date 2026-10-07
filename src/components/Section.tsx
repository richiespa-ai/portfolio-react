import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-b border-slate-200 py-16 dark:border-slate-700"
    >
      <h2 className="font-mono text-sm uppercase tracking-widest text-brand dark:text-blue-400">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default Section;
