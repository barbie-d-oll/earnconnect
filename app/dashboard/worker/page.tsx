"use client";

import Link from "next/link";
import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Menu,
  Search,
  Settings,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";

const opportunities = [
  {
    title: "Event Assistant",
    company: "Kumasi Events Hub",
    location: "Kumasi",
    type: "Part-time",
    payment: "GHS 150",
    description:
      "Help with guest registration and event coordination at a weekend event.",
  },
  {
    title: "Social Media Assistant",
    company: "Local Business",
    location: "Remote",
    type: "Flexible",
    payment: "GHS 300",
    description:
      "Create and schedule social media content for a growing local business.",
  },
  {
    title: "Delivery Assistant",
    company: "QuickServe",
    location: "Accra",
    type: "Short-term",
    payment: "GHS 200",
    description:
      "Assist with deliveries and customer coordination during the weekend.",
  },
];

export default function WorkerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#050505]">
      {/* Mobile Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 lg:hidden">
        <Link href="/" className="text-xl font-black">
          <span className="text-[#1877F2]">Earn</span>
          <span>Connect</span>
        </Link>

        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-lg p-2 text-[#050505] hover:bg-slate-100"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <Link href="/" className="text-2xl font-black">
            <span className="text-[#1877F2]">Earn</span>
            <span>Connect</span>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#8A8D91]">
            Workspace
          </p>

          <nav className="space-y-1">
            <SidebarLink
              icon={<LayoutDashboard size={19} />}
              label="Dashboard"
              active
            />

            <SidebarLink
              icon={<Search size={19} />}
              label="Find Opportunities"
            />

            <SidebarLink
              icon={<ClipboardList size={19} />}
              label="My Tasks"
            />

            <SidebarLink
              icon={<CircleDollarSign size={19} />}
              label="Earnings"
            />

            <SidebarLink
              icon={<UserRound size={19} />}
              label="Profile"
            />
          </nav>
        </div>

        <div className="border-t border-slate-100 p-4">
          <SidebarLink
            icon={<Settings size={19} />}
            label="Settings"
          />

          <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600">
            <LogOut size={19} />
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Desktop Topbar */}
        <header className="hidden h-20 items-center justify-between border-b border-slate-200 bg-white px-8 lg:flex xl:px-10">
          <div>
            <p className="text-sm text-[#65676B]">Worker Workspace</p>
            <h2 className="text-lg font-bold">Dashboard</h2>
          </div>

          <div className="flex items-center gap-5">
            <button
              className="relative rounded-xl p-2.5 text-[#65676B] transition hover:bg-slate-100"
              aria-label="Notifications"
            >
              <Bell size={21} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#1877F2]" />
            </button>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7F3FF] font-bold text-[#1877F2]">
                T
              </div>

              <div>
                <p className="text-sm font-semibold">Test User</p>
                <p className="text-xs text-[#65676B]">Worker</p>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* Welcome */}
          <section className="mb-8">
            <p className="text-sm font-medium text-[#1877F2]">
              Welcome back 👋
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
              Find your next opportunity.
            </h1>

            <p className="mt-2 max-w-2xl text-[#65676B]">
              Discover tasks that match your skills, complete them, and get
              paid securely through EarnConnect.
            </p>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={<Search size={20} />}
              label="Available Tasks"
              value="12"
              description="New opportunities"
            />

            <StatCard
              icon={<ClipboardList size={20} />}
              label="Active Tasks"
              value="3"
              description="Currently working"
            />

            <StatCard
              icon={<CheckCircle2 size={20} />}
              label="Completed"
              value="18"
              description="Tasks completed"
            />

            <StatCard
              icon={<CircleDollarSign size={20} />}
              label="Total Earnings"
              value="GHS 2,450"
              description="All-time earnings"
            />
          </section>

          {/* Opportunities */}
          <section className="mt-10">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Available opportunities
                </h2>

                <p className="mt-1 text-sm text-[#65676B]">
                  Find work that fits your skills and schedule.
                </p>
              </div>

              <button className="hidden items-center gap-1 text-sm font-semibold text-[#1877F2] sm:flex">
                View all
                <ChevronRight size={17} />
              </button>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {opportunities.map((opportunity) => (
                <OpportunityCard
                  key={opportunity.title}
                  {...opportunity}
                />
              ))}
            </div>
          </section>

          {/* Quick Action */}
          <section className="mt-10 rounded-2xl border border-[#DCEBFA] bg-[#E7F3FF] p-6 sm:p-7">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-[#1877F2]">
                  Ready to earn?
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Find an opportunity that works for you.
                </h2>

                <p className="mt-1 text-sm text-[#65676B]">
                  Browse available tasks and start building your earnings.
                </p>
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#166FE5]">
                <Search size={18} />
                Find Opportunities
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function SidebarLink({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-[#E7F3FF] text-[#1877F2]"
          : "text-slate-600 hover:bg-slate-100 hover:text-[#050505]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function StatCard({
  icon,
  label,
  value,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F3FF] text-[#1877F2]">
          {icon}
        </div>

        <span className="text-xs font-medium text-green-600">
          +12%
        </span>
      </div>

      <p className="mt-5 text-sm text-[#65676B]">{label}</p>

      <p className="mt-1 text-2xl font-black">{value}</p>

      <p className="mt-1 text-xs text-[#8A8D91]">{description}</p>
    </div>
  );
}

function OpportunityCard({
  title,
  company,
  location,
  type,
  payment,
  description,
}: {
  title: string;
  company: string;
  location: string;
  type: string;
  payment: string;
  description: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F3FF] text-[#1877F2]">
          <BriefcaseBusiness size={21} />
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          {payment}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold">{title}</h3>

      <p className="mt-1 text-sm font-medium text-[#65676B]">
        {company}
      </p>

      <p className="mt-4 flex-1 text-sm leading-6 text-[#65676B]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
          {location}
        </span>

        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
          {type}
        </span>
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#1877F2] px-4 py-3 text-sm font-semibold text-[#1877F2] transition hover:bg-[#1877F2] hover:text-white">
        View Opportunity
        <ChevronRight size={17} />
      </button>
    </article>
  );
}