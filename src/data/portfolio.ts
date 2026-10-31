import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BarChart3,
  Briefcase,
  Code2,
  Database,
  GraduationCap,
  Mail,
  Terminal,
  Wrench,
  Github,
  Linkedin,
} from 'lucide-react';

export const SITE_NAME = 'Jadusca Developer';

export const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'contacto', label: 'Contacto' },
] as const;

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export const OWNER_NAME = 'Jade Martin';

export const HERO = {
  greeting: `Hola, soy ${OWNER_NAME}`,
  headline: 'Ingeniera en Sistemas que convierte datos en soluciones web claras y funcionales',
  highlight: 'convierte datos',
  description:
    'Diseño y desarrollo interfaces web, organizo la información en bases de datos sólidas y analizo los datos para que cada proyecto sea claro, útil y fácil de usar.',
  titles: [
    'Ingeniera en Sistemas Computacionales',
    'Desarrolladora web Jr',
    'Bases de datos',
    'Análisis de datos',
  ],
};

export interface Project {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

export const PROJECTS: Project[] = [
  {
    title: 'Proyecto académico 01',
    category: 'Por definir',
    description: 'Aquí describirás el problema que resolvió, las herramientas que usaste y tu papel en el equipo.',
    icon: Code2,
  },
  {
    title: 'Proyecto de bases de datos',
    category: 'Por definir',
    description: 'Un espacio para mostrar el modelo de datos, las consultas y cómo organizaste la información.',
    icon: Database,
  },
  {
    title: 'Proyecto de análisis de datos',
    category: 'Por definir',
    description: 'Aquí irán tus hallazgos, las visualizaciones y las conclusiones que obtuviste.',
    icon: BarChart3,
  },
];

export const SKILL_GROUPS: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: 'Desarrollo web',
    icon: Code2,
    items: ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML y CSS'],
  },
  {
    title: 'Bases de datos',
    icon: Database,
    items: ['SQL', 'PostgreSQL', 'Modelado de datos', 'Consultas optimizadas'],
  },
  {
    title: 'Análisis de datos',
    icon: BarChart3,
    items: ['Limpieza de datos', 'Visualización', 'Interpretación de resultados'],
  },
  {
    title: 'Herramientas',
    icon: Wrench,
    items: ['Git', 'Vite', 'Supabase', 'Terminal'],
  },
];

export const TIMELINE: {
  type: string;
  title: string;
  organization: string;
  period: string;
  icon: LucideIcon;
}[] = [
  {
    type: 'Formación',
    title: 'Ingeniería en Sistemas Computacionales',
    organization: 'Institución por confirmar',
    period: 'Periodo por confirmar',
    icon: GraduationCap,
  },
  {
    type: 'Experiencia',
    title: 'Desarrolladora web Jr',
    organization: 'Empresa u organización por agregar',
    period: 'Periodo por confirmar',
    icon: Briefcase,
  },
];

export const CERTIFICATIONS: { title: string; issuer: string; icon: LucideIcon }[] = [
  { title: 'Certificación por agregar', issuer: 'Emisor por confirmar', icon: Award },
  { title: 'Curso por agregar', issuer: 'Plataforma por confirmar', icon: Terminal },
  { title: 'Curso por agregar', issuer: 'Plataforma por confirmar', icon: Award },
];

export const CONTACT_LINKS: { label: string; value: string; href?: string; icon: LucideIcon }[] = [
  { label: 'Correo', value: 'tu-correo@ejemplo.com', href: 'mailto:tu-correo@ejemplo.com', icon: Mail },
  { label: 'LinkedIn', value: 'Agrega tu perfil', icon: Linkedin },
  { label: 'GitHub', value: 'Agrega tu usuario', icon: Github },
];
