import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const opportunities = [
  {
    title: "Social Media Promotion",
    category: "Marketing",
    description:
      "Help brands promote their products and services across social platforms.",
    reward: "GH₵50",
  },
  {
    title: "Website Testing",
    category: "Technology",
    description:
      "Test websites and digital products and share useful feedback with businesses.",
    reward: "GH₵80",
  },
  {
    title: "Content Review",
    category: "Writing",
    description:
      "Review and improve digital content while helping businesses maintain quality.",
    reward: "GH₵35",
  },
];

export default function Opportunities() {
  return (
    <section
      id="opportunities"
      className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[#1877F2]">
              Featured opportunities
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#050505] sm:text-4xl">
              Find work that fits your skills
            </h2>

            <p className="mt-4 text-lg leading-7 text-[#65676B]">
              Explore opportunities from employers looking for people with
              skills like yours.
            </p>
          </div>

          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1877F2] hover:text-[#166FE5]"
          >
            View all opportunities
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Opportunity cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F3FF]">
                  <BriefcaseBusiness
                    size={20}
                    className="text-[#1877F2]"
                  />
                </div>

                <span className="rounded-full bg-[#E7F3FF] px-3 py-1 text-xs font-semibold text-[#1877F2]">
                  {opportunity.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-[#050505]">
                {opportunity.title}
              </h3>

              <p className="mt-3 min-h-[72px] leading-6 text-[#65676B]">
                {opportunity.description}
              </p>

              {/* Reward */}
              <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-5">
                <div>
                  <p className="text-xs text-[#65676B]">
                    Estimated reward
                  </p>

                  <p className="mt-1 text-2xl font-black text-[#050505]">
                    {opportunity.reward}
                  </p>
                </div>

                <Link
                  href="/opportunities"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1877F2] text-white transition group-hover:bg-[#166FE5]"
                  aria-label={`View ${opportunity.title}`}
                >
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Trust indicator */}
              <div className="mt-4 flex items-center gap-2 text-xs text-[#31A24C]">
                <CheckCircle2 size={15} />
                Verified opportunity
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}