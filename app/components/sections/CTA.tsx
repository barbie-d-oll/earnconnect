import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          
          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold text-[#1877F2]">
              Start with EarnConnect
            </p>

            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#050505] sm:text-4xl lg:text-5xl">
  Find work that fits your skills.
</h2>
           
          </div>

          {/* Action */}
          <div>
            <Link
              href="/auth/register"
              className="group inline-flex items-center gap-3 bg-[#1877F2] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#166FE5]"
            >
              Get Started
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}