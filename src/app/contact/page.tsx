
import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { PageHeader } from '@/components/common/page-header';
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for collaborations, inquiries, or just to say hello.',
};

export default function ContactPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        title="Contact Me"
        description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="lg:col-span-1">
          <Card className="shadow-xl border">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:marianikitha.suresh@gmail.com" className="hover:text-accent transition-colors">
                    marianikitha.suresh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Linkedin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/maria-nikitha-588994242" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    linkedin.com/in/maria-nikitha-588994242
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Github className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">GitHub</h4>
                  <a href="https://github.com/marianikitha01" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    github.com/marianikitha01
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p>Arizona (Open to relocate anywhere in USA)</p> {/* Example, update if needed */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
