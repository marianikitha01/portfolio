import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Maria Nikitha Suresh
          </h1>
          <p className="mt-3 text-xl font-medium text-accent md:text-2xl">
            Master’s in Data Science | AI & Machine Learning Enthusiast
          </p>
          <p className="mt-6 text-lg text-foreground md:text-xl">
            Welcome to my portfolio! I&apos;m a recent Data Science graduate from the University of Arizona, passionate about transforming data into impactful solutions. Explore my projects and journey in AI and machine learning.
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
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Maria Nikitha Suresh - Profile"
            width={600}
            height={600}
            className="rounded-full shadow-2xl object-cover aspect-square"
            priority
            data-ai-hint="professional portrait"
          />
           <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent opacity-70 blur-xl animate-pulse"></div>
           <div className="absolute -top-4 -left-4 h-20 w-20 rounded-lg bg-primary opacity-60 blur-lg animate-ping delay-1000"></div>
        </div>
      </div>
    </section>
  );
}
