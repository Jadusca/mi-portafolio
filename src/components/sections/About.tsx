import { Award, Briefcase, GraduationCap, Heart, Sparkles } from 'lucide-react';
import PixelSparkle from '@/components/ui/PixelSparkle';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';

const TRAITS = [
  { label: 'Titulada en Ingeniería en Sistemas Computacionales', icon: GraduationCap },
  { label: 'Cuento con cédula profesional', icon: Award },
  { label: 'Desarrolladora web Jr', icon: Briefcase },
  { label: 'Bases de datos y análisis de datos', icon: Sparkles },
];

function AvatarFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[400px]">
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-brand-200 via-white to-lavender-100 p-3 shadow-[0_24px_60px_-24px_rgba(201,42,128,0.55)] sm:p-4 dark:from-brand-900/70 dark:via-zinc-900 dark:to-lavender-900/70 dark:shadow-[0_24px_60px_-24px_rgba(255,123,208,0.35)]">
        <div className="relative overflow-hidden rounded-[2rem] border-4 border-white bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <img
            src="/Streamlette_Gamer_en_Neon_Morado.png"
            alt="Avatar ilustrado de Jade Martin estilo gamer"
            loading="lazy"
            decoding="async"
            className="h-auto w-full animate-float-soft object-contain motion-reduce:animate-none"
          />
        </div>
      </div>

      <PixelSparkle className="-left-2 -top-3 h-6 w-6 sm:-left-4" />
      <PixelSparkle className="-right-2 top-6 h-5 w-5 sm:-right-4" color="#a98ae6" shape="heart" />
      <PixelSparkle className="-bottom-2 -left-3 h-4 w-4" color="#17b0a4" />
      <PixelSparkle className="-bottom-3 -right-2 h-6 w-6 sm:-right-3" color="#ff7bd0" shape="heart" />
      <span
        className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-brand-300 shadow-[0_0_12px_4px_rgba(255,123,208,0.45)] sm:-right-3"
        aria-hidden="true"
      />
    </div>
  );
}

export default function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Detrás de cada proyecto hay una persona que disfruta resolver problemas"
    >
      <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-20">
        <Reveal className="w-full">
          <AvatarFrame />
          <div className="mt-6 flex items-center justify-center gap-2 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm dark:bg-zinc-950/80 dark:text-brand-300">
              <Heart className="h-4 w-4 fill-brand-500 text-brand-500" aria-hidden="true" />
              Jugadora de código
            </span>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Soy ingeniera en Sistemas Computacionales, titulada y con cédula profesional. Me interesa construir sitios web que se vean bien y
              funcionen igual de bien. Trabajo con bases de datos para mantener la información ordenada y con análisis
              de datos para entender qué dicen los números.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Este espacio está pensado para contar mi historia profesional con calma: proyectos, herramientas y
              aprendizajes, de forma clara para quien me visite.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="grid gap-4">
              {TRAITS.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-100">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
