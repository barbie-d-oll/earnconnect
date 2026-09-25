import {
  BriefcaseBusiness,
  CircleDollarSign,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "Workers",
    label: "Find task-based opportunities that match your skills.",
    icon: Users,
  },
  {
    value: "Employers",
    label: "Post tasks and connect with people who can do the work.",
    icon: BriefcaseBusiness,
  },
  {
    value: "Payments",
    label: "A payment workflow is being built into the platform.",
    icon: CircleDollarSign,
  },
];

export default function Stats() {
  return (
    <section className="border-b border-slate-200 bg-white px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid border-y border-slate-200 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.value}
                className={`py-7 md:px-8 ${
                  index !== stats.length - 1
                    ? "border-b border-slate-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-[#1877F2]"
                  />

                  <div>
                    <p className="text-base font-bold text-[#050505]">
                      {stat.value}
                    </p>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-[#65676B]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}