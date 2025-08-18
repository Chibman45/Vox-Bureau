"use client";

import Link from "next/link";
import React from "react";

const Logo = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
    >
      <path
        d="M4 4H8V20H4V4Z"
        fill="hsl(var(--foreground))"
      />
      <path
        d="M8 4H12C16.4183 4 20 7.58172 20 12V20H16V12C16 9.79086 14.2091 8 12 8H8V4Z"
        fill="hsl(var(--foreground))"
      />
      <circle cx="20" cy="20" r="3" fill="hsl(var(--accent))" />
    </svg>
  );


export function Footer() {
    const [year, setYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    
    return (
        <footer className="bg-muted p-6 md:py-12 w-full text-muted-foreground">
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                <div className="flex flex-col gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-2">
                      <Logo />
                      <span className="font-headline">
                        <span className="text-foreground">VOX</span>
                        <span> Bureau</span>
                      </span>
                    </Link>
                    <p className="text-xs">
                        Expert communication and institutional representation solutions.
                    </p>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold text-foreground">Services</h3>
                    <Link href="/#services" prefetch={false}>Speechwriting</Link>
                    <Link href="/#services" prefetch={false}>Representation</Link>
                    <Link href="/#services" prefetch={false}>Consulting</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold text-foreground">Resources</h3>
                    <Link href="/#why-us" prefetch={false}>Why Us</Link>
                    <Link href="/success-stories" prefetch={false}>Case Studies</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold text-foreground">Legal</h3>
                    <Link href="/terms-of-service" prefetch={false}>Terms of Service</Link>
                    <Link href="/privacy-policy" prefetch={false}>Privacy Policy</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold text-foreground">Contact</h3>
                    <Link href="/#contact" prefetch={false}>Contact Us</Link>
                    <Link href="#" prefetch={false}>Support</Link>
                </div>
            </div>
             <div className="container max-w-7xl mt-8 flex justify-between items-center text-xs">
                <p>&copy; {year} Vox Bureau. All rights reserved.</p>
                <div className="flex gap-4">
                    {/* Social links can be added here */}
                </div>
            </div>
        </footer>
      );
}
