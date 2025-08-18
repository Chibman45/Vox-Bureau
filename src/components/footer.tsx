"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
    const [year, setYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    
    return (
        <footer className="bg-muted p-6 md:py-12 w-full">
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                <div className="grid gap-1">
                    <h3 className="font-semibold">Company</h3>
                    <Link href="#" prefetch={false}>About Us</Link>
                    <Link href="#" prefetch={false}>Our Team</Link>
                    <Link href="#" prefetch={false}>Careers</Link>
                    <Link href="#" prefetch={false}>News</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Services</h3>
                    <Link href="/#services" prefetch={false}>Speechwriting</Link>
                    <Link href="/#services" prefetch={false}>Representation</Link>
                    <Link href="/#services" prefetch={false}>Consulting</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Resources</h3>
                    <Link href="#" prefetch={false}>Blog</Link>
                    <Link href="/success-stories" prefetch={false}>Case Studies</Link>
                    <Link href="#" prefetch={false}>FAQ</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Legal</h3>
                    <Link href="/terms-of-service" prefetch={false}>Terms of Service</Link>
                    <Link href="/privacy-policy" prefetch={false}>Privacy Policy</Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Contact</h3>
                    <Link href="/#contact" prefetch={false}>Contact Us</Link>
                    <Link href="#" prefetch={false}>Support</Link>
                </div>
            </div>
             <div className="container max-w-7xl mt-8 flex justify-between items-center">
                <p className="text-xs text-muted-foreground">&copy; {year} Vox Bureau. All rights reserved.</p>
                <div className="flex gap-4">
                    {/* Social links can be added here */}
                </div>
            </div>
        </footer>
      );
}
