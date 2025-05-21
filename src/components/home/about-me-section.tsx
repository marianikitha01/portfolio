import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, Send, FileText } from 'lucide-react';
import { resumeData } from '@/data/resume';
import Image from 'next/image';
import { Container } from '@/components/layout/container';

export function AboutMeSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 dark:bg-card">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center">
            <User className="mr-3 h-8 w-8 text-primary" />
            About Me
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            A Glimpse into My Journey and Aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Maria Nikitha Suresh - About Me"
              width={400}
              height={500}
              className="rounded-lg shadow-xl object-cover max-h-[500px]"
              data-ai-hint="woman working computer"
            />
          </div>
          <div className="md:col-span-3">
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              {resumeData.summary}
            </p>
            <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
              My experience includes designing a high-accuracy suture classification model using YOLOv8 at ASTEC Lab and enhancing data analysis capabilities as a Data Analyst and Software Development Engineer at Protecto (OneDPO Private Limited), where I built interactive Tableau dashboards and improved internal tools. I&apos;ve also led a Generative AI capstone project, creating a Chikankari design generator by fine-tuning Stable Diffusion with Advanced LoRA techniques. My core interests lie in building scalable AI/ML systems, particularly in GenAI, NLP, data visualization, and cloud data engineering (AWS, Azure). I thrive in collaborative environments and am excited by opportunities to drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                <Link href="/resume">
                  <FileText className="mr-2 h-5 w-5" />
                  View My Resume
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                <Link href="/contact">
                  <Send className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
