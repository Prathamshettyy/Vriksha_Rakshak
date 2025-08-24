// Inside web/src/components/navbar.tsx

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Navbar() {
  return (
    // Add the new text color class here
    <nav className="flex fixed w-full backdrop-blur-sm items-center px-4 py-4 justify-between z-50 bg-[hsl(var(--navbar-background))] text-[hsl(var(--navbar-foreground))]">
      <div className="flex gap-8 items-center">
        <div>
          <p className="scroll-m-20 text-xl font-semibold">
            <Link href="/">{siteConfig.name}</Link>
          </p>
        </div>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <Link href="/home" className="nav-link">
              <strong>Home</strong>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/about" className="nav-link">
              <strong>About</strong>
            </Link>
          </li>
        </ul>
      </div>
      <ThemeToggle />
    </nav>
  );
}