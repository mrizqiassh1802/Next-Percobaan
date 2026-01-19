import Link from 'next/link';
import { NavLink } from './NavLink';
export default function DesktopNav() {
  return (
    <div className="text-md hidden h-full items-center gap-5 font-medium text-white md:flex">
      {/*<Link
        href="/"
        className="flex h-10 w-15 flex-col items-center justify-center rounded-md hover:bg-[rgb(255,205,88)]"
      >
        Home
      </Link> */}

      <NavLink href="/">Home</NavLink>
      {/* <Link
        href="/help"
        className="flex h-10 w-15 flex-col items-center justify-center rounded-md hover:bg-[rgb(255,205,88)]"
      >
        Help
      </Link> */}

      <NavLink href="/help">Help</NavLink>
      <Link
        href="/auth/login"
        className="flex h-10 w-15 flex-col items-center justify-center rounded-md hover:bg-[rgb(255,205,88)]"
      >
        Sign In
      </Link>
    </div>
  );
}
