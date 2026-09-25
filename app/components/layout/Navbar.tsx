"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Opportunities", href: "#opportunities" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-[23px] font-extrabold tracking-tight"
        >
          <span className="text-[#1877F2]">Earn</span>
          <span className="text-[#050505]">Connect</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[#65676B] transition-colors hover:text-[#050505]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/auth/login"
            className="text-sm font-semibold text-[#050505] transition-colors hover:text-[#1877F2]"
          >
            Log In
          </Link>

          <Link
            href="/auth/register"
            className="bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166FE5]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center text-[#050505] transition-colors hover:text-[#1877F2] lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-100 py-4 text-sm font-medium text-[#65676B] transition-colors hover:text-[#1877F2]"
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex items-center gap-5 pt-5">
                <Link
                  href="/auth/login"
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-[#050505] hover:text-[#1877F2]"
                >
                  Log In
                </Link>

                <Link
                  href="/auth/register"
                  onClick={() => setOpen(false)}
                  className="bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#166FE5]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}