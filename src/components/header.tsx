"use client";

import Link from "next/link";
import { Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#why-us", label: "Why Us" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary text-primary-foreground backdrop-blur supports-[backdrop-filter]:bg-primary/90">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Shield className="h-6 w-6" />
          <span className="font-headline">Vox Bureau</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/#contact">Get a Quote</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-primary-foreground/50 hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-12 text-center">
                <SheetClose asChild>
                  <Link href="/" className="flex items-center justify-center gap-2 font-bold text-lg text-primary mb-6">
                      <Shield className="h-6 w-6" />
                      <span className="font-headline">Vox Bureau</span>
                  </Link>
                </SheetClose>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                 <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <SheetClose asChild>
                        <Link href="/#contact">Get a Quote</Link>
                    </SheetClose>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
