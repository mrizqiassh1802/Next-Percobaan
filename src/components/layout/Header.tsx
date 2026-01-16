import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-column justify-between px-10 py-5 bg-[rgb(250_180_17)] align-middle">
      <img src="/logo/logo.png" alt="logo" className="w-20" />
      <nav className="flex flex-column gap-3 items-center text-white text-base font-semibold">
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </nav>
    </header>
  );
}
