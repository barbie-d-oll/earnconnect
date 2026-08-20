import { BriefcaseBusiness, CircleDollarSign, Users } from "lucide-react";

const stats = [
  {
    value: "10K+",
    label: "Active Workers",
    icon: Users,
  },
  {
    value: "500+",
    label: "Available Tasks",
    icon: BriefcaseBusiness,
  },
  {
    value: "GH₵50K+",
    label: "Paid to Workers",
    icon: CircleDollarSign,
  },
];

export default function Stats() {
  return (
    <section className="bg-white px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-6 py-6 ${
                  index !== stats.length - 1
                    ? "border-b border-slate-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F3FF]">
                  <Icon size={20} className="text-[#1877F2]" />
                </div>

                <div>
                  <p className="text-2xl font-black text-[#050505]">
                    {stat.value}
                  </p>

                  <p className="mt-0.5 text-sm text-[#65676B]">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}