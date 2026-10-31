import { SKILL_GROUPS } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';

export default function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Habilidades"
      title="Tecnologías y herramientas que uso"
      description="Las áreas en las que trabajo, desde la interfaz hasta la información que hay detrás."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 100} className="h-full">
              <article className="h-full rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_12px_32px_-18px_rgba(197,42,128,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none dark:hover:border-brand-500/60">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-800 dark:bg-accent-900/50 dark:text-accent-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-800 transition-colors hover:border-brand-400 hover:bg-brand-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-brand-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
