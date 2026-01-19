'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href + '/'));

  return (
    <Link
      href={href}
      className={cn(
        'flex h-10 w-16 items-center justify-center rounded-md transition-colors',
        'hover:bg-[rgb(255,205,88)]',
        isActive ? 'bg-[rgb(255,205,88)] text-white' : 'bg-transparent text-white',
      )}
    >
      {children}
    </Link>
  );
}
