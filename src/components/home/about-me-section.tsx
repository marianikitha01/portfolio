import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User, Send, FileText } from 'lucide-react';
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

        <div className="max-w-4xl mx-auto"> {/* Centering the content */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <p>
              I’m Maria Nikitha Suresh, a data scientist driven by the belief that data is more than numbers; it’s narrative, insight, and impact waiting to happen.
            </p>
            <p>
              With a Master’s in Data Science from the University of Arizona, my work lives at the intersection of analytical precision and creative exploration. I’ve built everything from predictive models that drive efficiency to generative AI systems that reimagine centuries-old art forms. One of my most meaningful projects involved using machine learning to revive the intricate Indian embroidery style of Chikankari.
            </p>
            <p>
              What sets me apart is that I don’t just build models, I ask better questions. I bring a multidisciplinary lens that blends technology, cultural context, and human value. Whether I’m analyzing messy datasets, designing interactive dashboards, or translating insights into business action, I approach data science with curiosity, clarity, and conviction.
            </p>
            <p>
              My technical toolkit includes Python, SQL, scikit-learn, and deep learning frameworks, with experience spanning domains like creative AI, healthcare, and business analytics. But my real strength lies in seeing the why behind the what, connecting the technical with the meaningful, creating solutions that are not only functional, but thoughtful, relevant, and built to make a difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"> {/* Centered buttons */}
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
      </Container>
    </section>
  );
}
