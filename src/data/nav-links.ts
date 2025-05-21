import type { NavLink } from '@/lib/types';
import { Home, Briefcase, MessageSquare, UserCircle } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/resume', label: 'Resume', icon: UserCircle },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
];
