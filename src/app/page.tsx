
import { HeroSection } from '@/components/home/hero-section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Briefcase, UserCircle, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AboutMeSection } from '@/components/home/about-me-section';

export default function HomePage() {
  const quickLinks = [
    { title: 'Featured Projects', href: '/projects', icon: Briefcase, description: 'Discover my latest data science endeavors.', image: 'https://placehold.co/400x300.png', imageHint: 'data project' },
    { title: 'Interactive Resume', href: '/resume', icon: UserCircle, description: 'Explore my skills, experience, and education.', image: 'https://placehold.co/400x300.png', imageHint: 'resume document' },
    { title: 'Contact Me', href: '/contact', icon: Mail, description: 'Let\'s connect! Reach out for inquiries or collaborations.', image: 'https://placehold.co/400x300.png', imageHint: 'contact envelope' },
  ];

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <section className="py-16 bg-secondary/50 dark:bg-background">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Explore My Work</h2>
            <p className="mt-3 text-lg text-muted-foreground">Dive deeper into my projects, skills, and insights.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <Card key={link.href} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image 
                    src={link.image} 
                    alt={link.title} 
                    width={400} 
                    height={300} 
                    className="w-full h-48 object-cover"
                    data-ai-hint={link.imageHint} 
                  />
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex items-center mb-3 text-primary">
                    <link.icon className="h-6 w-6 mr-2" />
                    <CardTitle className="text-xl font-semibold">{link.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground flex-grow mb-4">{link.description}</p>
                  <Button asChild variant="outline" className="mt-auto self-start group">
                    <Link href={link.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
