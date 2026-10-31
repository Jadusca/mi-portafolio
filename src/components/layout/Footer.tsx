import { ArrowUp } from 'lucide-react';
import PixelCat from '@/components/ui/PixelCat';
import { OWNER_NAME } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50/60 px-6 py-10 sm:px-10 dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <PixelCat className="h-12 w-12 shrink-0" />
          <div>
            <p className="font-display text-lg font-bold text-zinc-900 dark:text-zinc-50">{OWNER_NAME}</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} {OWNER_NAME}. Todos los derechos reservados.
            </p>
          </div>
        </div>
        <a
          href="#inicio"
          className="group inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-700 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-brand-300"
        >
          Volver arriba
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
