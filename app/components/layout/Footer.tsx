import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-xl font-extrabold">
              <span className="text-[#1877F2]">Earn</span>
              <span className="text-[#050505]">Connect</span>
            </Link>

            <p className="mt-2 text-sm text-[#65676B]">
              Connect. Work. Earn.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#65676B]">
            {/* <Link
              href="#how-it-works"
              className="transition hover:text-[#1877F2]"
            >
              How It Works
            </Link> */}

            {/* <Link
              href="#opportunities"
              className="transition hover:text-[#1877F2]"
            >
              Opportunities
            </Link> */}

            <Link
              href="#"
              className="transition hover:text-[#1877F2]"
            >
              Privacy Policy 
            </Link>

            <Link
              href="#"
              className="transition hover:text-[#1877F2]"
            >
              Terms
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <p className="text-xs text-[#65676B]">
            © {new Date().getFullYear()} EarnConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}