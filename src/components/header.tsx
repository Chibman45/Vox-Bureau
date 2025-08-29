"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import LogoSVG from "./logo";

const Logo = () => (
  <>
    <div className="hidden md:block">
      <LogoSVG width={40} height={40} />
    </div>
    <div className="md:hidden">
      <LogoSVG width={32} height={32} />
    </div>
  </>
);

const MobileLogo = () => (
  <LogoSVG width={32} height={32} />
)

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="text-foreground">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function Header() {
  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#why-us", label: "Why Us" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Logo />
          <span className="font-headline">
            <span className="text-foreground">VOX</span>
            <span className="text-muted-foreground"> Bureau</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
              <Button asChild>
                  <Link href="/#contact">Get a Quote</Link>
              </Button>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-6">
                        <MobileLogo />
                        <span className="font-headline">
                          <span className="text-foreground">VOX</span>
                          <span className="text-muted-foreground"> Bureau</span>
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
                   <Button asChild className="mt-4">
                      <SheetClose asChild>
                          <Link href="/#contact">Get a Quote</Link>
                      </SheetClose>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
