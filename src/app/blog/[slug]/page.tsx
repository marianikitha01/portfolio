import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { blogPosts } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, User, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="py-12 md:py-16 max-w-3xl mx-auto">
      <article className="bg-card p-6 sm:p-8 rounded-lg shadow-xl border">
        <header className="mb-8">
          <Button asChild variant="ghost" className="mb-6 text-primary hover:bg-primary/10">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <User className="mr-1.5 h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center">
              <CalendarDays className="mr-1.5 h-4 w-4" />
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="relative w-full aspect-[16/9] mb-8 rounded-md overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.imageHint}
            priority
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
          {/* This is placeholder content. In a real blog, this would come from a CMS or Markdown file. */}
          <p className="lead mb-6 text-lg">{post.excerpt}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Subheading Example</h2>
          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
            nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
            Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis,
            vel tincidunt sapien diam vel magna. Nam quis enim.
          </p>
          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>List item one with important details.</li>
            <li>Another list item to illustrate structure.</li>
            <li>Final point in this example list.</li>
          </ul>
          <p>
            Phasellus et lorem id felis nonummy placerat. Fusce dui leo, imperdiet eu, consectetuer dapibus, Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla.
          </p>
        </div>
      </article>
    </Container>
  );
}
