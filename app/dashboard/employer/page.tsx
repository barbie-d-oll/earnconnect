"use client";

import Link from "next/link";
import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  DollarSign,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    title: "Event Assistant",
    location: "Kumasi",
    applicants: 8,
    status: "Active",
    payment: "GHS 150",
  },
  {
    title: "Social Media Assistant",
    location: "Remote",
    applicants: 12,
    status: "Active",
    payment: "GHS 300",
  },
  {
    title: "Delivery Assistant",
    location: "Accra",
    applicants: 5,
    status: "Completed",
    payment: "GHS 200",
  },
];

export default function EmployerDashboard() {
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
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-slate-200 bg-white transition-transform ${
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
            className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#8A8D91]">
            Employer Workspace
          </p>

          <nav className="space-y-1">
            <SidebarLink
              icon={<LayoutDashboard size={19} />}
              label="Dashboard"
              active
            />

            <SidebarLink
              icon={<BriefcaseBusiness size={19} />}
              label="My Opportunities"
            />

            <SidebarLink
              icon={<Users size={19} />}
              label="Applicants"
            />

            <SidebarLink
              icon={<ClipboardList size={19} />}
              label="Active Tasks"
            />

            <SidebarLink
              icon={<DollarSign size={19} />}
              label="Payments"
            />
          </nav>
        </div>

        <div className="border-t border-slate-100 p-4">
          <SidebarLink
            icon={<Settings size={19} />}
            label="Settings"
          />

          <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600">
            <LogOut size={19} />
            Log out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-64">
        {/* Desktop Header */}
        <header className="hidden h-20 items-center justify-between border-b border-slate-200 bg-white px-8 lg:flex">
          <div>
            <p className="text-sm text-[#65676B]">
              Employer Workspace
            </p>
            <h2 className="text-lg font-bold">Dashboard</h2>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative rounded-xl p-2.5 text-[#65676B] hover:bg-slate-100">
              <Bell size={21} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#1877F2]" />
            </button>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7F3FF] font-bold text-[#1877F2]">
                E
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Employer Account
                </p>
                <p className="text-xs text-[#65676B]">Employer</p>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          {/* Welcome */}
          <section className="mb-8">
            <p className="text-sm font-medium text-[#1877F2]">
              Welcome back 👋
            </p>

            <h1 className="mt-1 text-3xl font-black sm:text-4xl">
              Manage your opportunities.
            </h1>

            <p className="mt-2 max-w-2xl text-[#65676B]">
              Post tasks, find skilled workers, manage applicants,
              and track your payments.
            </p>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={<BriefcaseBusiness size={20} />}
              label="Posted Opportunities"
              value="8"
            />

            <StatCard
              icon={<Users size={20} />}
              label="Applicants"
              value="25"
            />

            <StatCard
              icon={<CheckCircle2 size={20} />}
              label="Completed Tasks"
              value="14"
            />

            <StatCard
              icon={<DollarSign size={20} />}
              label="Total Spent"
              value="GHS 3,850"
            />
          </section>

          {/* Create Opportunity */}
          <section className="mt-10 rounded-2xl bg-[#1877F2] p-6 text-white sm:p-7">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-blue-100">
                  Need someone to get the job done?
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Create a new opportunity
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                  Post a task and connect with workers.
                </p>
              </div>

              <button
                onClick={() =>
                  alert("Create Opportunity feature coming next.")
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#1877F2] transition hover:bg-slate-100"
              >
                <Plus size={19} />
                Post Opportunity
              </button>
            </div>
          </section>

          {/* Opportunities */}
          <section className="mt-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Your opportunities
                </h2>

                <p className="mt-1 text-sm text-[#65676B]">
                  Manage tasks you have posted.
                </p>
              </div>

              <button className="hidden items-center gap-1 text-sm font-semibold text-[#1877F2] sm:flex">
                View all
                <ChevronRight size={17} />
              </button>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {jobs.map((job, index) => (
                <div
                  key={job.title}
                  className={`flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between ${
                    index !== jobs.length - 1
                      ? "border-b border-slate-100"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F3FF] text-[#1877F2]">
                      <BriefcaseBusiness size={20} />
                    </div>

                    <div>
                      <h3 className="font-bold">{job.title}</h3>

                      <p className="mt-1 text-sm text-[#65676B]">
                        {job.location} · {job.payment}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-sm">
                      <p className="font-semibold">
                        {job.applicants} applicants
                      </p>

                      <p className="text-xs text-[#8A8D91]">
                        Applications
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        job.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>
                </div>
              ))}
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
          : "text-slate-600 hover:bg-slate-100"
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
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F3FF] text-[#1877F2]">
        {icon}
      </div>

      <p className="mt-5 text-sm text-[#65676B]">{label}</p>

      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}