import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/common/page-header';
import { ProjectList } from '@/components/projects/project-list';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore a collection of my data science projects, showcasing skills in machine learning, data analysis, and visualization.',
};

export default function ProjectsPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        title="My Projects"
        description="A showcase of my passion for data science and problem-solving. Each project reflects my dedication to turning data into insights."
      />
      <ProjectList />
    </Container>
  );
}
