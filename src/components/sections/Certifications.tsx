import { CERTIFICATIONS } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';

export default function Certifications() {
  return (
    <Section
      id="certificaciones"
      eyebrow="Certificaciones y cursos"
      title="Aprendizaje continuo"
      description="Certificaciones y cursos que complementan mi formación."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={`${item.title}-${index}`} delay={index * 100} className="h-full sm:last:col-span-2 lg:last:col-span-1">
              <article className="flex h-full flex-col rounded-3xl border-2 border-dashed border-brand-200 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-900">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.issuer}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
