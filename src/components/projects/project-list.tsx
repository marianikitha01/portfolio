import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

export function ProjectList() {
  if (!projects || projects.length === 0) {
    return <p className="text-center text-muted-foreground">No projects to display yet. Check back soon!</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
