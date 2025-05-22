import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-56 object-cover"
          data-ai-hint={project.imageHint}
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="text-xs">{project.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-semibold mb-2 text-primary">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t mt-auto">
        <div className="flex w-full justify-start space-x-3">
          {project.codeLink && (
            <Button asChild variant="outline" size="sm">
              <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Code
              </Link>
            </Button>
          )}
          {project.liveDemoLink && project.liveDemoLink !== '#' && (
            <Button asChild variant="default" size="sm">
              <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
