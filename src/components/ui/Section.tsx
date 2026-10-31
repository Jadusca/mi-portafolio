import type { ReactNode } from 'react';
import PixelSparkle from '@/components/ui/PixelSparkle';
import Reveal from '@/components/ui/Reveal';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:px-10 md:py-24 lg:py-32"
    >
      <PixelSparkle className="right-6 top-10 h-5 w-5 md:right-12 md:top-16" color="#a98ae6" shape="heart" />
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl sm:mb-14 md:mb-16">
          <p className="mb-3 font-pixel text-[10px] uppercase leading-relaxed tracking-wider text-brand-600 dark:text-brand-400">
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
