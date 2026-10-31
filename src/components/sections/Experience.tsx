import { TIMELINE } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';

export default function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiencia y formación"
      title="Mi camino profesional"
      description="Formación académica y experiencia laboral, en orden cronológico."
    >
      <ol className="relative ml-3 space-y-10 border-l-2 border-brand-200 pl-10 dark:border-zinc-700">
        {TIMELINE.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="relative">
              <span className="absolute -left-[3.25rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white shadow-md ring-4 ring-white dark:ring-zinc-950">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <Reveal delay={index * 120}>
                <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                  <p className="font-pixel text-[9px] uppercase leading-relaxed tracking-wide text-accent-700 dark:text-accent-300">
                    {item.type}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">{item.organization}</p>
                  <p className="mt-3 text-sm font-medium text-brand-700 dark:text-brand-300">{item.period}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
