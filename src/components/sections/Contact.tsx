import { CONTACT_LINKS } from '@/data/portfolio';
import ContactForm from '@/components/contact/ContactForm';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';

export default function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Hablemos de tu próxima idea o oportunidad"
      description="Si buscas a alguien para desarrollar una aplicación web, organizar tus datos o analizar información, escríbeme."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CONTACT_LINKS.map((link, index) => {
          const Icon = link.icon;
          const card = (
            <>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 dark:bg-brand-500">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-6 font-pixel text-[9px] uppercase leading-relaxed tracking-wide text-accent-700 dark:text-accent-300">
                {link.label}
              </p>
              <p className="mt-2 break-all text-lg font-semibold text-zinc-900 dark:text-zinc-50">{link.value}</p>
            </>
          );

          const cardClass =
            'group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_12px_32px_-18px_rgba(197,42,128,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_24px_48px_-18px_rgba(197,42,128,0.45)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none dark:hover:border-brand-500/60';

          return (
            <Reveal key={link.label} delay={index * 100} className="h-full sm:last:col-span-2 lg:last:col-span-1">
              {link.href ? (
                <a href={link.href} className={cardClass}>
                  {card}
                </a>
              ) : (
                <div className={cardClass}>{card}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={150} className="mt-10 sm:mt-12">
        <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-[0_12px_32px_-18px_rgba(197,42,128,0.35)] sm:p-10 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
          <h3 className="text-2xl font-bold">Escríbeme directamente</h3>
          <p className="mt-2 mb-8 text-zinc-600 dark:text-zinc-400">Déjame tu mensaje y te responderé en cuanto pueda.</p>
          <ContactForm />
        </div>
      </Reveal>
    </Section>
  );
}
