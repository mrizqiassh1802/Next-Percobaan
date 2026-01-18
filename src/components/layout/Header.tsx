import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '../ui/dropdown-menu';

import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="flex-column flex w-full justify-between bg-[rgb(250_180_17)] px-10 py-5 align-middle">
      <Link href="/">
        <img src="/logo/logo.png" alt="logo" className="w-20" />
      </Link>
      <nav className="flex-column flex items-center text-base font-semibold text-white">
        <div className="hidden gap-7 md:flex">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-transparent text-4xl">≡</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/auth/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/register">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
