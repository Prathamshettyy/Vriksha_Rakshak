// Inside web/src/components/navbar.tsx

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Logo from "@/assets/logo.png" // Import your logo
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="modern-nav">
      <div className="flex items-center gap-2">
        <Image src={Logo} alt={`${siteConfig.name} Logo`} width={32} quality={100} />
        <p className="nav-brand text-lg font-semibold">
            <Link href="/">{siteConfig.name}</Link>
        </p>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <Link href="/home" className="nav-link-modern">
          Home
        </Link>
        <Link href="/about" className="nav-link-modern">
          About
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}