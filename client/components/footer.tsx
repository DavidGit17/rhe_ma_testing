/**
 * Footer Component
 * ----------------
 * A shared footer that appears at the bottom of every page.
 * Contains quick links, contact info, and a copyright notice.
 */

import Link from "next/link";
import { BookOpen } from "lucide-react";

/* -- Quick navigation links for the footer ------------------ */
const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* ---- Top Row: Logo + Links + Contact ---- */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Ministry name and tagline */}
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="font-serif text-lg font-bold">
                HopeTransTech
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed opacity-70">
              Making important texts and educational materials accessible to
              every person, in every language, through every medium.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-70">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-70">
              Contact
            </h3>
            <address className="flex flex-col gap-2 not-italic text-sm opacity-70">
              <span>info@wordandlight.org</span>
              <span>(555) 123-4567</span>
              <span>
                123 Faith Avenue
                <br />
                Springfield, IL 62701
              </span>
            </address>
          </div>
        </div>

        {/* ---- Bottom Row: Copyright ---- */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs opacity-50">
          <p>
            &copy; {new Date().getFullYear()} HopeTransTech. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
