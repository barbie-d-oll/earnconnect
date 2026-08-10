import {
  UserPlus,
  Search,
  Wallet,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create an account",
    description:
      "Sign up as a worker or employer and set up your profile in a few simple steps.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Find opportunities",
    description:
      "Browse tasks and opportunities that match your skills, interests, and goals.",
    icon: Search,
  },
  {
    number: "03",
    title: "Complete & earn",
    description:
      "Complete approved tasks, submit your work, and receive your earnings securely.",
    icon: Wallet,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F0F2F5] px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            Simple process
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#050505] sm:text-4xl">
            How EarnConnect works
          </h2>

          <p className="mt-4 text-lg leading-7 text-[#65676B]">
            Getting started is simple. Create your account, discover the
            right opportunities, and start earning.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F3FF]">
                    <Icon size={22} className="text-[#1877F2]" />
                  </div>

                  <span className="text-sm font-black text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#050505]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-6 text-[#65676B]">
                  {step.description}
                </p>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                    <ArrowRight
                      size={20}
                      className="text-slate-300"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}