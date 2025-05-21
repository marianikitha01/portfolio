
import type { Skill } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const IconComponent = skill.icon;
  
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="group flex flex-col items-center p-3 bg-card rounded-lg border border-border hover:border-primary transition-all duration-200 cursor-default shadow-sm hover:shadow-md">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {IconComponent ? <IconComponent className="h-5 w-5" /> : skill.iconSvg}
            </div>
            <p className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">{skill.name}</p>
            {skill.proficiency && typeof skill.proficiency === 'number' && (
              <Progress value={skill.proficiency} className="w-full h-1.5 mt-2 group-hover:[&>div]:bg-primary" />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{skill.category}{skill.proficiency && typeof skill.proficiency === 'number' ? ` - ${skill.proficiency}% proficiency` : ''}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
