import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Wallet,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F0F2F5]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E7F3FF]" />

      <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-14 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
        
        {/* LEFT */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E7F3FF] px-4 py-2 text-sm font-semibold text-[#1877F2]">
            <span className="h-2 w-2 rounded-full bg-[#1877F2]" />
            Your skills. Your opportunities. Your income.
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-[#050505] sm:text-6xl lg:text-7xl">
            Find opportunities.
            <br />
            <span className="text-[#1877F2]">Connect.</span> Earn.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#65676B] sm:text-xl">
            Discover tasks, connect with opportunities, and turn your skills
            into income. EarnConnect brings workers and employers together in
            one simple platform.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1877F2] px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-[#166FE5]"
            >
              Get Started
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-3.5 font-semibold text-[#050505] transition hover:border-[#1877F2] hover:bg-[#E7F3FF]"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#65676B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#31A24C]" />
              Verified opportunities
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#31A24C]" />
              Secure payments
            </div>
          </div>
        </div>

        {/* RIGHT — PRODUCT PREVIEW */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Floating stat */}
          <div className="absolute -left-5 top-10 z-10 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F3FF]">
                <BriefcaseBusiness size={19} className="text-[#1877F2]" />
              </div>

              <div>
                <p className="text-xs text-[#65676B]">Available tasks</p>
                <p className="font-bold text-[#050505]">500+</p>
              </div>
            </div>
          </div>

          {/* Main dashboard card */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] sm:p-7">
            
            {/* Card header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-[#65676B]">
                  Wallet Balance
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <h2 className="text-4xl font-black tracking-tight text-[#050505]">
                    GH₵2,480
                  </h2>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-[#31A24C]">
                    +18.6%
                  </span>
                </div>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F3FF]">
                <Wallet size={22} className="text-[#1877F2]" />
              </div>
            </div>

            {/* Mini chart */}
            <div className="mt-7 rounded-2xl bg-[#F0F2F5] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#050505]">
                  Earnings overview
                </p>

                <span className="text-xs text-[#65676B]">
                  This month
                </span>
              </div>

              <div className="mt-5 flex h-28 items-end gap-2">
                {[35, 48, 42, 58, 52, 68, 61, 79, 72, 90].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-[#1877F2]"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Tasks */}
            <div className="mt-7">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-[#050505]">
                  Recommended tasks
                </h3>

                <span className="text-sm font-semibold text-[#1877F2]">
                  View all
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Social Media Promotion",
                    category: "Marketing",
                    amount: "GH₵50",
                  },
                  {
                    title: "Website Testing",
                    category: "Technology",
                    amount: "GH₵80",
                  },
                  {
                    title: "Content Review",
                    category: "Writing",
                    amount: "GH₵35",
                  },
                ].map((task) => (
                  <div
                    key={task.title}
                    className="flex items-center justify-between rounded-xl border border-slate-100 p-4"
                  >
                    <div>
                      <p className="font-semibold text-[#050505]">
                        {task.title}
                      </p>

                      <p className="mt-1 text-xs text-[#65676B]">
                        {task.category}
                      </p>
                    </div>

                    <p className="font-bold text-[#1877F2]">
                      {task.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed indicator */}
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-green-50 p-4">
              <CheckCircle2 size={20} className="text-[#31A24C]" />

              <div>
                <p className="text-sm font-bold text-[#050505]">
                  12 tasks completed
                </p>

                <p className="text-xs text-[#65676B]">
                  Keep going — you're doing great.
                </p>
              </div>
            </div>
          </div>

          {/* Floating earnings */}
          <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
            <p className="text-xs text-[#65676B]">Earned this week</p>
            <p className="mt-1 text-xl font-black text-[#31A24C]">
              +GH₵320
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}