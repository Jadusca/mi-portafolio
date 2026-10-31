import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { HERO } from '@/data/portfolio';
import PixelCat from '@/components/ui/PixelCat';
import PixelSparkle from '@/components/ui/PixelSparkle';
import Reveal from '@/components/ui/Reveal';

function HeroHeadline() {
  const [before, after] = HERO.headline.split(HERO.highlight);
  return (
    <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
      {before}
      <span className="relative isolate inline-block text-brand-600 dark:text-brand-400">
        {HERO.highlight}
        <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-brand-200/70 dark:bg-brand-900/70" aria-hidden="true" />
      </span>
      {after}
    </h1>
  );
}

function TitleChips() {
  return (
    <ul className="mt-6 flex flex-wrap gap-2 sm:gap-3">
      {HERO.titles.map((title) => (
        <li
          key={title}
          className="rounded-full border border-lavender-200 bg-white/80 px-3.5 py-1.5 text-sm font-semibold text-lavender-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-lavender-200 sm:text-base"
        >
          {title}
        </li>
      ))}
    </ul>
  );
}

function TerminalCard() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-brand-100 bg-white/90 p-6 shadow-[0_24px_60px_-20px_rgba(201,42,128,0.4)] backdrop-blur sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/90 dark:shadow-[0_24px_60px_-20px_rgba(255,123,208,0.25)]">
      <div className="mb-5 flex items-center gap-2" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-brand-400" />
        <span className="h-3 w-3 rounded-full bg-lavender-300" />
        <span className="h-3 w-3 rounded-full bg-accent-300" />
      </div>
      <p className="mb-4 font-pixel text-[10px] leading-relaxed text-lavender-600 dark:text-lavender-200">
        PERFIL.EXE
      </p>
      <ul className="space-y-3">
        {HERO.titles.map((title) => (
          <li
            key={title}
            className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 font-medium text-brand-900 transition-transform duration-300 hover:translate-x-1 dark:bg-zinc-800 dark:text-zinc-100"
          >
            <span className="text-brand-600 dark:text-brand-400" aria-hidden="true">
              &gt;
            </span>
            {title}
          </li>
        ))}
      </ul>
      <p className="mt-6 flex items-center gap-2 font-medium text-zinc-600 dark:text-zinc-400">
        <span className="text-brand-600 dark:text-brand-400" aria-hidden="true">
          &gt;
        </span>
        Listo para nuevos retos
        <span className="inline-block h-4 w-2 animate-blink bg-brand-600 dark:bg-brand-400" aria-hidden="true" />
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-gradient-to-br from-brand-50 via-[#fff8fc] to-lavender-50 px-6 pb-20 pt-32 sm:px-10 md:pt-36 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900"
    >
      <div className="pixel-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <PixelSparkle className="left-[6%] top-[20%] h-6 w-6 md:left-[8%]" />
      <PixelSparkle className="right-[8%] top-[16%] h-4 w-4 md:right-[10%]" color="#a98ae6" />
      <PixelSparkle className="bottom-[14%] left-[46%] h-5 w-5 md:bottom-[16%]" color="#ff7bd0" shape="heart" />
      <PixelSparkle className="right-[14%] top-[62%] h-4 w-4 hidden md:block" color="#17b0a4" shape="heart" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-brand-300">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {HERO.greeting}
            </span>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <HeroHeadline />
          </Reveal>
          <Reveal delay={200} className="flex justify-center lg:justify-start">
            <TitleChips />
          </Reveal>
          <Reveal delay={250}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400 lg:mx-0">
              {HERO.description}
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#proyectos"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/40 sm:w-auto"
            >
              Ver mis proyectos
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contacto"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-300 bg-white px-7 py-3.5 font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-50 sm:w-auto dark:border-zinc-700 dark:bg-zinc-900 dark:text-brand-300 dark:hover:bg-zinc-800"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Contactarme
            </a>
          </Reveal>
        </div>

        <Reveal delay={250} className="relative">
          <TerminalCard />
          <PixelCat className="absolute -bottom-10 -left-4 hidden h-20 w-20 animate-float sm:block md:-left-10 md:h-24 md:w-24" />
        </Reveal>
      </div>
    </section>
  );
}
