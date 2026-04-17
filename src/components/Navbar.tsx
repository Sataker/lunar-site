"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "./LogoMark";
import Button from "./Button";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "Docs", href: "/docs" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#222222] bg-black/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark size={22} />
              <span className="text-sm font-semibold tracking-tight">
                Lunar Router
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#888888] hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Button href="https://github.com/lunar-org-ai/lunar-router" variant="ghost" className="text-sm">
              GitHub
            </Button>
            <Button href="https://app.lunar-sys.com" variant="primary" className="text-sm py-2 px-4">
              Get Started
            </Button>
          </div>
          <button
            type="button"
            className="md:hidden p-2 text-[#888888] hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#222222] py-4">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#888888] hover:text-white py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button href="https://app.lunar-sys.com" variant="primary" className="text-sm w-fit mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
