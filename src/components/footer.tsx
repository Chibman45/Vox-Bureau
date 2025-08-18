"use client";

import Link from "next/link";
import React from "react";

const Logo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 44 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-foreground"
  >
    <path
      d="M21.921 34.25L13.111 1.00003L4.35105 34.25H0.999999L13.111 0L25.222 34.25H21.921Z"
      fill="currentColor"
    />
    <path
      d="M43.089 34.25L34.279 1.00003L25.519 34.25H22.168L34.279 0L46.39 34.25H43.089Z"
      fill="currentColor"
    />
    <ellipse cx="34.022" cy="38.75" rx="3.35" ry="3.25" fill="hsl(var(--accent))" />
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
                    <Link href="/#contact" prefetch={false}>FAQ</Link>
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
