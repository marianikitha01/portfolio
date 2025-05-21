import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ResumeSectionProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}

export function ResumeSection({ title, icon: Icon, children }: ResumeSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        <Icon className="h-8 w-8 text-primary mr-3" />
        <h2 className="text-2xl font-semibold text-foreground tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}
