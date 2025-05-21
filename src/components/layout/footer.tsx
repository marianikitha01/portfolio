import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from './container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background py-8 text-sm text-muted-foreground">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>&copy; {currentYear} DataWeave. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:maria.suresh@example.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/mariasuresh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/mariasuresh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
