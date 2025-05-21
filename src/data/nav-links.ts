import type { NavLink } from '@/lib/types';
import { Home, Briefcase, PencilLine, MessageSquare, Cpu, UserCircle } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/resume', label: 'Resume', icon: UserCircle },
  { href: '/blog', label: 'Blog', icon: PencilLine },
  { href: '/ai-tailor', label: 'AI Tailor', icon: Cpu },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
];
