import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/common/page-header';
import { BlogList } from '@/components/blog/blog-list';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read insights, tutorials, and articles on Data Science, Machine Learning, and AI.',
};

export default function BlogPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        title="Data Science Insights"
        description="Sharing knowledge, tutorials, and thoughts on the ever-evolving world of data."
      />
      <BlogList />
    </Container>
  );
}
