
import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/common/page-header';
import { resumeData } from '@/data/resume.tsx';
import { ResumeSection } from '@/components/resume/resume-section';
import { ExperienceItem } from '@/components/resume/experience-item';
import { EducationItem } from '@/components/resume/education-item';
import { SkillBadge } from '@/components/resume/skill-badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Zap, Mail, Linkedin, Github, Download, UserCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Detailed overview of my skills, experience, and education in Data Science.',
};

export default function ResumePage() {
  const { name, title, summary, contact, experience, education, skills } = resumeData;

  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <Container className="py-12 md:py-16">
      <div className="mb-12 flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8 p-6 bg-card rounded-xl shadow-xl border">
        <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary shadow-lg">
          <AvatarImage src="https://placehold.co/200x200.png" alt={name} data-ai-hint="graduation portrait"/>
          <AvatarFallback className="text-4xl">{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">{name}</h1>
          <p className="text-lg text-accent font-medium mt-1">{title}</p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto md:mx-0">{summary}</p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <Button asChild variant="outline" size="sm">
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
             <Button asChild size="sm">
              <Link href="/resume.pdf" target="_blank" download> {/* Replace with actual resume link */}
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ResumeSection title="Experience" icon={Briefcase}>
            {experience.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </ResumeSection>

          <ResumeSection title="Education" icon={GraduationCap}>
            {education.map((item) => (
              <EducationItem key={item.id} item={item} />
            ))}
          </ResumeSection>
        </div>

        <div className="lg:col-span-1">
          <ResumeSection title="Skills" icon={Zap}>
            {skillCategories.map(category => (
              <div key={category} className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <SkillBadge key={skill.id} skill={skill} />
                    ))}
                </div>
              </div>
            ))}
          </ResumeSection>
        </div>
      </div>
    </Container>
  );
}
