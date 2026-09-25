import Link from "next/link";
import { UserRound } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.35fr] lg:gap-10">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center bg-[#1877F2] text-white shadow-[0_8px_20px_rgba(24,119,242,0.18)]">
                <UserRound size={24} strokeWidth={2} />
              </span>

              <span className="text-xl font-bold tracking-tight text-[#050505]">
                Earn<span className="text-[#1877F2]">Connect</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#65676B]">
              A task marketplace connecting workers with employers and
              opportunities that match their skills.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#65676B]">
              Product
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[15px] text-[#65676B]">
              <Link
                href="/"
                className="transition-colors hover:text-[#1877F2]"
              >
                Home
              </Link>

              <Link
                href="/#opportunities"
                className="transition-colors hover:text-[#1877F2]"
              >
                Opportunities
              </Link>

              <Link
                href="/auth/login"
                className="transition-colors hover:text-[#1877F2]"
              >
                Sign in
              </Link>

              <Link
                href="/auth/register"
                className="transition-colors hover:text-[#1877F2]"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#65676B]">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[15px] text-[#65676B]">
              <Link
                href="/"
                className="transition-colors hover:text-[#1877F2]"
              >
                About
              </Link>

              <Link
                href="/"
                className="transition-colors hover:text-[#1877F2]"
              >
                Contact
              </Link>

              <Link
                href="/"
                className="transition-colors hover:text-[#1877F2]"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#65676B]">
              Legal
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[15px] text-[#65676B]">
              <Link
                href="/"
                className="transition-colors hover:text-[#1877F2]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/"
                className="transition-colors hover:text-[#1877F2]"
              >
                Terms of Service
              </Link>

              <Link
                href="/"
                className="transition-colors hover:text-[#1877F2]"
              >
                Refund Policy
              </Link>

              <Link
                href="/"
                className="transition-colors hover:text-[#1877F2]"
              >
                Security
              </Link>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#65676B]">
              Get in touch
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[15px] leading-6 text-[#65676B]">
              <a
                href="mailto:support@earnconnect.app"
                className="transition-colors hover:text-[#1877F2]"
              >
                support@earnconnect.app
              </a>

              <a
                href="mailto:hello@earnconnect.app"
                className="transition-colors hover:text-[#1877F2]"
              >
                hello@earnconnect.app
              </a>

              <p>[Your Phone Number]</p>

              <p>
                [Business Address]
                <br />
                [City, Region]
                <br />
                Ghana
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-7 text-sm text-[#65676B] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} EarnConnect. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="transition-colors hover:text-[#1877F2]"
            >
              Privacy
            </Link>

            <span className="text-slate-300">·</span>

            <Link
              href="/"
              className="transition-colors hover:text-[#1877F2]"
            >
              Terms
            </Link>

            <span className="text-slate-300">·</span>

            <Link
              href="/"
              className="transition-colors hover:text-[#1877F2]"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}