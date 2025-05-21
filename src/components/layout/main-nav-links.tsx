'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/nav-links';
import { cn } from '@/lib/utils';
import type { NavLink as NavLinkType } from '@/lib/types';

interface MainNavLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export function MainNavLinks({ isMobile = false, onLinkClick }: MainNavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link: NavLinkType) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
            pathname === link.href
              ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary'
              : 'hover:bg-accent/10 hover:text-accent-foreground dark:hover:bg-accent/20',
            isMobile ? 'text-lg w-full justify-start' : ''
          )}
          aria-current={pathname === link.href ? 'page' : undefined}
        >
          {link.icon && <link.icon className="h-5 w-5" />}
          {link.label}
        </Link>
      ))}
    </>
  );
}
