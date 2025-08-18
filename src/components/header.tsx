"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Logo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 44 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-primary-foreground"
  >
    <path
      d="M24.5136 10.5504L22.4072 10.5607L22.3892 11.9104C22.3692 13.4083 22.3416 13.6212 22.0568 14.4761C21.347 16.6063 19.5702 18.3867 17.2835 19.2587C16.8374 19.4289 16.237 19.6028 16.1919 19.575C16.1744 19.5642 16.16 17.5313 16.16 15.0576L16.16 10.56L13.94 10.56L11.72 10.56L11.72 17.0968L11.72 23.6336L11.83 23.6559C12.5731 23.806 14.8507 23.8354 15.8 23.707C21.4968 22.9365 25.7971 19.1253 26.7077 14.04C26.8774 13.0923 26.8483 10.6965 26.6657 10.5713C26.6405 10.5541 25.6721 10.5447 24.5136 10.5504Z"
      fill="currentColor"
    />
    <path
      d="M26.52 20.464C25.4621 20.7467 25.1377 22.0177 25.922 22.807C26.7032 23.5931 28.0948 23.1136 28.2451 22.0065C28.3799 21.0128 27.4794 20.2077 26.52 20.464Z"
      fill="hsl(var(--accent))"
    />
  </svg>
);


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
          <Logo />
          <span className="font-headline">
            <span className="text-accent">VOX</span>
            <span className="text-white"> Bureau</span>
          </span>
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
                      <Logo />
                      <span className="font-headline">
                        <span className="text-accent">VOX</span> Bureau
                      </span>
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
