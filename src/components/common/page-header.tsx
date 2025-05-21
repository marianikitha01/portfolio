import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string | ReactNode;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={`mb-8 text-center md:mb-12 ${className}`}>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-lg text-muted-foreground sm:mt-4 sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
