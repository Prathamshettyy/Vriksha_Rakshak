import Image from "next/image"
import Logo from "@/assets/logo.png"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Reduced vertical padding for a thinner overall look */}
      <div className="container mx-auto px-6 py-3">
        {/* Reduced gap between elements on mobile from gap-6 to gap-4 */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
          
          {/* Brand */}
            <Link href="/" className="flex items-center  footer-link-modern">
            <Image
              src={Logo}
              alt={`${siteConfig.name} Logo`}
              width={100} // Increased logo size
              height={100}
              quality={100}
              className="!w-16 !h-16" // Ensures the image size is enforced
            />
            <p>{siteConfig.name}</p>
            </Link>

          {/* Wrapper for links and social icon */}
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link href="/home" className="footer-link-modern">Home</Link>
              <Link href="/about" className="footer-link-modern">About</Link>
            </nav>

            <a
              href="https://github.com/prathamshettyy/vriksha_rakshak"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub Repository"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Reduced spacing for the copyright section */}
        <div className="mt-4 border-t border-t-black/10 dark:border-t-white/10 pt-3 text-center text-xs footer-copyright">
          <p>&#169; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}