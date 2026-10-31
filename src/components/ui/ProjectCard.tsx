import type { Project } from '@/data/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_12px_32px_-16px_rgba(197,42,128,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_24px_48px_-16px_rgba(197,42,128,0.45)] dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none dark:hover:border-brand-500/60">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100 opacity-70 transition-transform duration-500 group-hover:scale-125 dark:bg-brand-900/40" />
      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 dark:bg-brand-500">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <p className="relative font-pixel text-[9px] uppercase leading-relaxed tracking-wide text-accent-700 dark:text-accent-300">
        {project.category}
      </p>
      <h3 className="relative mt-3 text-xl font-bold leading-snug">{project.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
    </article>
  );
}
