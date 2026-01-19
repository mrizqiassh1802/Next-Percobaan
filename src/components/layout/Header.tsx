import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '../ui/dropdown-menu';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export default function Header() {
  return (
    <header className="flex-column flex w-full justify-between bg-[rgb(250_180_17)] px-10 py-5 align-middle">
      <Link href="/">
        <img src="/logo/logo.png" alt="logo" className="w-20" />
      </Link>
      <nav>
        <div className="hidden h-full items-center md:flex">
          <NavigationMenu className="relative">
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus-visible:bg-transparent focus-visible:text-white data-[state=open]:bg-transparent data-[state=open]:text-white [&>svg]:text-white">
                  Home
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-gray-100 backdrop-blur">
                  <NavigationMenuLink asChild>
                    <Link href="/" className="block px-4 py-2 hover:bg-white/10">
                      Home
                    </Link>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild>
                    <Link href="/help" className="block px-4 py-2 hover:bg-white/10">
                      Help
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus-visible:bg-transparent focus-visible:text-white data-[state=open]:bg-transparent data-[state=open]:text-white [&>svg]:text-white">
                  Auth
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-gray-100 backdrop-blur">
                  <NavigationMenuLink asChild>
                    <Link href="/auth/login" className="block px-4 py-2 hover:bg-white/10">
                      Login
                    </Link>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild>
                    <Link href="/auth/register" className="block px-4 py-2 hover:bg-white/10">
                      Register
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="bg-black/80 backdrop-blur" />
          </NavigationMenu>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-transparent text-4xl text-white">
              ≡
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/help">Help</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/register">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
