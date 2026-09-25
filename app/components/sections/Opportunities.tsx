import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";
import Link from "next/link";

const opportunities = [
  {
    title: "Social Media Promotion",
    category: "Marketing",
    description:
      "Help brands promote their products and services across social platforms.",
    location: "Remote",
    reward: "GH₵50",
  },
  {
    title: "Website Testing",
    category: "Technology",
    description:
      "Test websites and digital products and share useful feedback with businesses.",
    location: "Remote",
    reward: "GH₵80",
  },
  {
    title: "Content Review",
    category: "Writing",
    description:
      "Review and improve digital content while helping businesses maintain quality.",
    location: "Accra",
    reward: "GH₵35",
  },
];

export default function Opportunities() {
  return (
    <section
      id="opportunities"
      className="border-b border-slate-200 bg-[#F0F2F5] px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#1877F2]">
              Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#050505] sm:text-4xl">
              Work that matches what you can do.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#65676B]">
              Explore different types of tasks and connect with employers
              looking for people with the right skills.
            </p>
          </div>

          <Link
            href="/opportunities"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] transition-colors hover:text-[#166FE5]"
          >
            Browse opportunities
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Opportunity list */}
        <div className="mt-14 border-t border-slate-300">
          {opportunities.map((opportunity, index) => (
            <article
              key={opportunity.title}
              className="group grid gap-6 border-b border-slate-300 py-7 transition-colors hover:bg-white/60 md:grid-cols-[64px_1fr_220px_auto] md:items-center md:gap-8"
            >
              {/* Number */}
              <span className="text-sm font-semibold text-[#1877F2]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Main information */}
              <div>
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness
                    size={19}
                    strokeWidth={1.8}
                    className="text-[#1877F2]"
                  />

                  <h3 className="text-lg font-semibold text-[#050505]">
                    {opportunity.title}
                  </h3>
                </div>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#65676B]">
                  {opportunity.description}
                </p>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#65676B]">
                <span className="font-medium text-[#050505]">
                  {opportunity.category}
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {opportunity.location}
                </span>
              </div>

              {/* Reward + action */}
              <div className="flex items-center justify-between gap-6 md:justify-end">
                <div className="text-left md:text-right">
                  <p className="text-xs text-[#65676B]">
                    Reward
                  </p>

                  <p className="mt-1 text-lg font-bold text-[#050505]">
                    {opportunity.reward}
                  </p>
                </div>

                <Link
                  href="/opportunities"
                  className="flex h-9 w-9 items-center justify-center text-[#1877F2] transition-transform duration-200 group-hover:translate-x-1"
                  aria-label={`View ${opportunity.title}`}
                >
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-center gap-3 text-sm text-[#65676B]">
          <span className="h-2 w-2 bg-[#1877F2]" />
          More opportunities can be explored after creating an account.
        </div>
      </div>
    </section>
  );
}