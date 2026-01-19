'use client';

import Link from 'next/link';

import DesktopNav from './NavMenu/DesktopNav';

import MobileNav from './NavMenu/MobileNav';

export default function Header() {
  return (
    <header className="flex-column flex w-full justify-between bg-[rgb(250_180_17)] px-10 py-5 align-middle">
      <Link href="/">
        <img src="/logo/logo.png" alt="logo" className="w-20" />
      </Link>
      <nav>
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
}
