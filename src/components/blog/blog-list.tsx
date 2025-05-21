import { blogPosts } from '@/data/blog';
import { BlogPostCard } from './blog-post-card';

export function BlogList() {
  if (!blogPosts || blogPosts.length === 0) {
    return <p className="text-center text-muted-foreground">No blog posts yet. Stay tuned for insights and tutorials!</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
