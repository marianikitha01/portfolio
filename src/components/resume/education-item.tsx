import Image from 'next/image';
import type { Education } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

interface EducationItemProps {
  item: Education;
}

export function EducationItem({ item }: EducationItemProps) {
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
         {item.logoUrl && (
          <Image
            src={item.logoUrl}
            alt={`${item.institution} logo`}
            width={48}
            height={48}
            className="rounded-md object-contain"
            data-ai-hint={item.logoHint}
          />
        )}
        <div className="flex-1">
          <CardTitle className="text-lg font-semibold text-primary">{item.degree}</CardTitle>
          <CardDescription className="text-base text-muted-foreground">{item.institution}</CardDescription>
           <div className="text-xs text-muted-foreground/80 mt-1 flex items-center">
            <CalendarDays className="h-3.5 w-3.5 mr-1.5" /> {item.period}
          </div>
        </div>
      </CardHeader>
      {item.description && item.description.length > 0 && (
        <CardContent>
          <ul className="list-disc list-outside space-y-1.5 pl-5 text-sm text-foreground/90">
            {item.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
