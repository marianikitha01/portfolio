'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { MainNavLinks } from './main-nav-links';
import { Container } from './container';

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  if (!mounted) {
    return ( // Render a placeholder or simplified navbar during SSR/initial client render to avoid hydration issues
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
              <Zap className="h-6 w-6" />
              <span>DataWeave</span>
            </Link>
            <div className="h-8 w-8 animate-pulse rounded-md bg-muted md:hidden" /> {/* Placeholder for menu button */}
            <nav className="hidden items-center space-x-2 md:flex">
              {/* Simplified links or placeholders for SSR */}
            </nav>
          </div>
        </Container>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/90 transition-colors">
            <Zap className="h-6 w-6" />
            <span>DataWeave</span>
          </Link>

          <nav className="hidden items-center space-x-1 md:flex">
            <MainNavLinks />
          </nav>

          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6">
                <div className="mb-6 flex items-center justify-between">
                   <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={() => setIsSheetOpen(false)}>
                    <Zap className="h-6 w-6" />
                    <span>DataWeave</span>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="h-6 w-6" />
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-3">
                  <MainNavLinks isMobile onLinkClick={() => setIsSheetOpen(false)} />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
