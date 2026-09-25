import {
  UserPlus,
  Search,
  Wallet,
  ArrowUpRight,
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
      className="border-b border-slate-200 bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-[#1877F2]">
              How it works
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#050505] sm:text-4xl">
              From finding a task to getting the work done.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#65676B] lg:justify-self-end">
            EarnConnect keeps the process straightforward. Create your
            account, discover an opportunity, complete the work, and build
            your earning history.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 border-t border-slate-200">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="grid gap-6 border-b border-slate-200 py-8 md:grid-cols-[80px_220px_1fr_auto] md:items-center md:gap-8"
              >
                {/* Number */}
                <span className="text-sm font-semibold text-[#1877F2]">
                  {step.number}
                </span>

                {/* Icon + title */}
                <div className="flex items-center gap-4">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#1877F2]"
                  />

                  <h3 className="text-lg font-semibold text-[#050505]">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-6 text-[#65676B]">
                  {step.description}
                </p>

                {/* Small visual detail */}
                <ArrowUpRight
                  size={19}
                  className="hidden text-slate-300 md:block"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}