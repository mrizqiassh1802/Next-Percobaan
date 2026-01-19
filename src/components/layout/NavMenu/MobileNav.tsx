import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { useState } from 'react';

import { Separator } from '@/components/ui/separator';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="bg-transparent text-3xl">≡</Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4">
          <SheetHeader className="sr-only">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <img src="/logo/logo-yellow.png" alt="logo" className="mb-5 w-1/2 self-center" />
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Separator />
          <Link href="/help" onClick={() => setOpen(false)}>
            Help
          </Link>
          <Separator />
          <Link href="/auth/login" onClick={() => setOpen(false)}>
            Login
          </Link>
          <Separator />
          <Link href="/auth/register" onClick={() => setOpen(false)}>
            Register
          </Link>
          <Separator />
          <SheetFooter className="sr-only">
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
