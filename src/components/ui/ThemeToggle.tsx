import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-brand-300 dark:hover:border-brand-400"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-500 hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-500 hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
