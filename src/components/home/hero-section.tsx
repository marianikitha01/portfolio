
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="-mt-16 py-6 md:py-8 lg:py-12 flex items-center min-h-screen">
      <div className="container mx-auto grid grid-cols-1 items-center gap-4
       md:grid-cols-2 lg:gap-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Maria Nikitha Suresh
          </h1>
          <p className="mt-3 text-xl font-medium text-accent md:text-2xl">
            Master’s in Data Science | Turning Questions into Models, and Models into Results
          </p>
          <p className="mt-6 text-lg text-foreground md:text-xl">
            Welcome to my portfolio. I’m a recent graduate from the University of Arizona with a deep passion for data science and its power to solve real-world problems. This portfolio showcases the projects, skills, and experiences that reflect my journey so far.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/projects">
                View My Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/resume.pdf" target="_blank" download> {/* Replace with actual resume link */}
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <img
            src="/profile.jpg"
            alt="Maria Nikitha Suresh - Profile"
            width={400}
            height={400}
            className="rounded-full shadow-2xl object-cover aspect-square"
            
            data-ai-hint="graduation portrait"
          />
        </div>
      </div>
    </section>
  );
}
