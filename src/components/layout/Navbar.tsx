import { useEffect, useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { NAV_ITEMS, OWNER_NAME, SECTION_IDS } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-brand-100 bg-white/90 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Principal" className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-10">
        <a href="#inicio" onClick={closeMenu} className="group flex items-center gap-2 rounded-lg">
          <Heart className="h-5 w-5 shrink-0 fill-brand-500 text-brand-500 transition-transform duration-300 group-hover:scale-125 dark:fill-brand-400 dark:text-brand-400" aria-hidden="true" />
          <span className="font-display text-lg font-bold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50">
            {OWNER_NAME}
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-zinc-800 dark:hover:text-brand-300 ${
                  isActive ? 'text-brand-700 dark:text-brand-300' : 'text-zinc-600 dark:text-zinc-300'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-600 transition-transform duration-300 dark:bg-brand-400 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-sm transition-colors hover:border-brand-400 xl:hidden dark:border-zinc-700 dark:bg-zinc-900 dark:text-brand-300"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="menu-movil"
          className="animate-fade-down border-t border-brand-100 bg-white px-6 pb-6 pt-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 xl:hidden"
        >
          <ul className="mx-auto grid max-w-3xl gap-1 sm:grid-cols-2 sm:gap-x-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-zinc-800 dark:hover:text-brand-300 ${
                      isActive
                        ? 'bg-brand-50 text-brand-700 dark:bg-zinc-800 dark:text-brand-300'
                        : 'text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
