/**
 * Navbar Component
 * ----------------
 * A responsive navigation bar that appears on every page.
 * It includes the ministry name/logo and links to all pages.
 * On mobile, a hamburger button toggles the menu open/closed.
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, BookOpen } from "lucide-react"

/* -- Navigation links array --------------------------------- */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  /* State to track whether the mobile menu is open */
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /* Get the current page path so we can highlight the active link */
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* ---- Logo / Ministry Name ---- */}
        <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
          <BookOpen className="h-6 w-6 text-accent" aria-hidden="true" />
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            HopeTransTech
          </span>
        </Link>

        {/* ---- Desktop Navigation Links (hidden on mobile) ---- */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---- Mobile Hamburger Button (hidden on desktop) ---- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* ---- Mobile Menu Dropdown ---- */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-6 py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
