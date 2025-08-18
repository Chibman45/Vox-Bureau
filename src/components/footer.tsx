"use client";

import Link from "next/link";
import React from "react";

export function Footer() {
    const [year, setYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; {year} Vox Bureau. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gacap-6">
            <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </footer>
      );
}
