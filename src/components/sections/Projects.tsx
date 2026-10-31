import { PROJECTS } from '@/data/portfolio';
import ProjectCard from '@/components/ui/ProjectCard';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';

export default function Projects() {
  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos"
      title="Trabajos académicos y prácticas"
      description="Proyectos académicos y prácticas en desarrollo web, bases de datos y análisis de datos."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 100} className="h-full sm:last:col-span-2 lg:last:col-span-1">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
