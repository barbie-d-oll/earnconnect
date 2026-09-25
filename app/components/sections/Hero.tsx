import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Wallet,
} from "lucide-react";

export default function Hero() {
  const tasks = [
    {
      title: "Social Media Promotion",
      category: "Marketing",
      location: "Remote",
      amount: "GH₵50",
    },
    {
      title: "Website Testing",
      category: "Technology",
      location: "Remote",
      amount: "GH₵80",
    },
    {
      title: "Content Review",
      category: "Writing",
      location: "Accra",
      amount: "GH₵35",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#F0F2F5]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid min-h-[calc(100vh-68px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">

          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-sm font-semibold text-[#1877F2]">
              <span className="h-px w-8 bg-[#1877F2]" />
              A task marketplace for workers and employers
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-[-0.025em] text-[#050505] sm:text-6xl lg:text-[68px]">
  Find work.
  <br />
  <span className="text-[#1877F2]">
    Connect with opportunity.
  </span>
</h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#65676B] sm:text-lg">
              EarnConnect gives workers a place to discover task based
              opportunities and gives employers a simple way to find people
              who can get the work done.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/register"
                className="group inline-flex items-center justify-center gap-2 bg-[#1877F2] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#166FE5]"
              >
                Create an account
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#050505] transition-colors hover:border-[#1877F2] hover:text-[#1877F2]"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-9 grid max-w-lg gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <BriefcaseBusiness
                  size={18}
                  className="mt-0.5 shrink-0 text-[#1877F2]"
                />

                <div>
                  <p className="text-sm font-semibold text-[#050505]">
                    For workers
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#65676B]">
                    Find tasks that match your skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#1877F2]"
                />

                <div>
                  <p className="text-sm font-semibold text-[#050505]">
                    For employers
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#65676B]">
                    Post tasks and find available workers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — PRODUCT PREVIEW */}
          <div className="relative lg:pl-4">

            {/* Small floating label */}
            <div className="absolute -left-3 top-8 z-10 hidden items-center gap-3 border border-slate-200 bg-white px-4 py-3 shadow-lg sm:flex">
              <div className="flex h-9 w-9 items-center justify-center bg-[#E7F3FF]">
                <Wallet size={18} className="text-[#1877F2]" />
              </div>

              <div>
                <p className="text-xs text-[#65676B]">Worker dashboard</p>
                <p className="text-sm font-semibold text-[#050505]">
                  Track your work
                </p>
              </div>
            </div>

            {/* Product preview */}
            <div className="border border-slate-300 bg-white shadow-[0_24px_60px_-35px_rgba(0,0,0,0.35)]">

              {/* Preview header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-medium text-[#65676B]">
                    Worker dashboard
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-[#050505]">
                    Available opportunities
                  </h2>
                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-xs text-[#65676B]">Account</p>
                  <p className="text-sm font-semibold text-[#050505]">
                    Worker
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
                <div className="border border-slate-200 bg-[#F7F8FA] px-4 py-3 text-sm text-[#65676B]">
                  Search for tasks...
                </div>
              </div>

              {/* Task list */}
              <div className="px-5 py-5 sm:px-6">
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#1877F2]">
                      Opportunities
                    </p>

                    <h3 className="mt-1 text-base font-bold text-[#050505]">
                      Available tasks
                    </h3>
                  </div>

                  <span className="text-xs text-[#65676B]">
                    Browse tasks
                  </span>
                </div>

                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.title}
                      className="group border border-slate-200 bg-white p-4 transition-colors hover:border-[#1877F2]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="font-semibold text-[#050505]">
                            {task.title}
                          </p>

                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#65676B]">
                            <span>{task.category}</span>

                            <span className="flex items-center gap-1">
                              <MapPin size={13} />
                              {task.location}
                            </span>
                          </div>
                        </div>

                        <p className="shrink-0 font-bold text-[#1877F2]">
                          {task.amount}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-xs text-[#65676B]">
                          Task opportunity
                        </span>

                        <span className="text-xs font-semibold text-[#1877F2] transition-transform group-hover:translate-x-1">
                          View task →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview footer */}
              <div className="border-t border-slate-200 bg-[#F7F8FA] px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#65676B]">
                      EarnConnect
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#050505]">
                      Find work. Get things done.
                    </p>
                  </div>

                  <Link
                    href="/auth/register"
                    className="text-sm font-semibold text-[#1877F2] hover:text-[#166FE5]"
                  >
                    Join →
                  </Link>
                </div>
              </div>
            </div>

            {/* Lower offset detail */}
            <div className="mt-4 ml-auto flex max-w-sm items-center gap-3 border-l-2 border-[#1877F2] pl-4">
              <p className="text-sm leading-6 text-[#65676B]">
                A simple marketplace connecting skills with task-based
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}