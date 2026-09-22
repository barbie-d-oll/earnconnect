import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-blue-600"
            >
              Earn<span className="text-slate-950">Connect</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              Connect with opportunities, discover flexible work, and build
              your income with EarnConnect.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/auth/register"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                href="/auth/login"
                className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Log In
              </Link>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-bold text-slate-950">
              Platform
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <Link
                href="/#how-it-works"
                className="transition hover:text-blue-600"
              >
                How It Works
              </Link>

              <Link
                href="/#opportunities"
                className="transition hover:text-blue-600"
              >
                Opportunities
              </Link>

              <Link
                href="/auth/register"
                className="transition hover:text-blue-600"
              >
                Find Work
              </Link>

              <Link
                href="/auth/register"
                className="transition hover:text-blue-600"
              >
                Post a Job
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-bold text-slate-950">
              Account
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <Link
                href="/auth/login"
                className="transition hover:text-blue-600"
              >
                Log In
              </Link>

              <Link
                href="/auth/register"
                className="transition hover:text-blue-600"
              >
                Create Account
              </Link>

              <Link
                href="/auth/register?role=WORKER"
                className="transition hover:text-blue-600"
              >
                Join as Worker
              </Link>

              <Link
                href="/auth/register?role=EMPLOYER"
                className="transition hover:text-blue-600"
              >
                Join as Employer
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} EarnConnect. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/auth/login"
              className="transition hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="transition hover:text-blue-600"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}