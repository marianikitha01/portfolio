'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { MainNavLinks } from './main-nav-links';
import { Container } from './container';
import { ThemeToggleSwitch } from './theme-toggle-switch';

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  if (!mounted) {
    return ( 
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
              <Sparkles className="h-6 w-6" />
              <span>Maria Nikitha Suresh</span>
            </Link>
            <nav className="hidden items-center space-x-2 md:flex">
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
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary hover:text-primary/90 transition-colors md:text-xl">
            <Database className="h-6 w-6" />
            <span>Maria Nikitha Suresh</span>
          </Link>

          <nav className="hidden items-center space-x-2 md:flex">
            <MainNavLinks />
            <div className="ml-2">
              <ThemeToggleSwitch />
            </div>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
             <ThemeToggleSwitch />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6">
                <div className="mb-6 flex items-center justify-between">
                   <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={() => setIsSheetOpen(false)}>
                    <Database className="h-6 w-6" />
                    <span>Maria Nikitha Suresh</span>
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
