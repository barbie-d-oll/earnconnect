"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Opportunities", href: "#opportunities" },
  // { label: "Benefits", href: "#benefits" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-[#1877F2]">Earn</span>
          <span className="text-[#050505]">Connect</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#65676B] transition hover:text-[#1877F2]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-[#1877F2] transition hover:bg-[#E7F3FF]"
          >
            Log In
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#166FE5]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#050505] hover:bg-[#F0F2F5] lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#65676B] hover:bg-[#E7F3FF] hover:text-[#1877F2]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-4">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-center text-sm font-semibold text-[#1877F2] hover:bg-[#E7F3FF]"
              >
                Log In
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-[#1877F2] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#166FE5]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}