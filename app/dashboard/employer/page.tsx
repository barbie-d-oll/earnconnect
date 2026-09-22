"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  Menu,
  Plus,
  Settings,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";

const stats = [
  {
    label: "Active Tasks",
    value: "8",
    icon: BriefcaseBusiness,
  },
  {
    label: "Applications",
    value: "24",
    icon: Users,
  },
  {
    label: "Completed",
    value: "15",
    icon: CheckCircle2,
  },
  {
    label: "Total Spent",
    value: "GH₵ 4,850",
    icon: Wallet,
  },
];

const recentTasks = [
  {
    id: 1,
    title: "Logo Design for Small Business",
    category: "Design",
    applicants: 6,
    payment: "GH₵ 350",
    status: "Active",
  },
  {
    id: 2,
    title: "Social Media Content Creation",
    category: "Marketing",
    applicants: 9,
    payment: "GH₵ 500",
    status: "Active",
  },
  {
    id: 3,
    title: "Website Data Entry",
    category: "Data Entry",
    applicants: 4,
    payment: "GH₵ 250",
    status: "Completed",
  },
];

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard/employer",
    icon: LayoutDashboard,
  },
  {
    name: "My Tasks",
    href: "/dashboard/employer/tasks",
    icon: ClipboardList,
  },
  {
    name: "Applications",
    href: "/dashboard/employer/applications",
    icon: Users,
  },
  {
    name: "Payments",
    href: "/dashboard/employer/payments",
    icon: CreditCard,
  },
  {
    name: "Profile",
    href: "/dashboard/employer/profile",
    icon: Settings,
  },
];

export default function EmployerDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900">
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <Link href="/" className="text-2xl font-black">
            <span className="text-[#1877F2]">Earn</span>
            <span className="text-slate-950">Connect</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        {/* Employer label */}
        <div className="px-6 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Employer
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-3 flex-1 px-4">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    item.name === "Dashboard"
                      ? "bg-[#1877F2] text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom profile */}
        <div className="border-t border-slate-100 p-4">
          <Link
            href="/dashboard/employer/profile"
            className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-slate-100"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] font-bold text-white">
              TE
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">
                Test Employer
              </p>
              <p className="truncate text-xs text-slate-500">
                employer@test.com
              </p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-72">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 lg:hidden"
              aria-label="Open navigation"
            >
              <Menu size={21} />
            </button>

            {/* <div>
              <h1 className="text-xl font-bold text-slate-950 sm:text-2xl">
                Employer Dashboard
              </h1>
              <p className="hidden text-sm text-slate-500 sm:block">
                Manage your tasks and find skilled workers.
              </p>
            </div> */}
          </div>

          <Link
            href="/dashboard/employer/tasks/create"
            className="flex items-center gap-2 rounded-lg bg-[#1877F2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#166FE5]"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Post a Task</span>
            <span className="sm:hidden">Post</span>
          </Link>
        </header>

        {/* Content */}
        <main className="mx-auto max-w-7xl p-5 sm:p-8">
          {/* Welcome */}
          <section className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1877F2]">
              Employer dashboard
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Manage your work.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Post tasks, review applications, and manage your work from one place.
            </p>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {stat.label}
                      </p>

                      <p className="mt-2 text-2xl font-bold text-slate-950">
                        {stat.value}
                      </p>
                    </div>

                    <div className="rounded-lg bg-[#E7F3FF] p-2.5 text-[#1877F2]">
                      <Icon size={21} />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Main grid */}
          <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_320px]">
            {/* Recent tasks */}
            <div className="border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
                <div>
                  <h3 className="font-bold text-slate-950">
                    Recent Tasks
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Track your latest posted tasks.
                  </p>
                </div>

                <Link
                  href="/dashboard/employer/tasks"
                  className="text-sm font-semibold text-[#1877F2] hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                {recentTasks.map((task) => (
                  <Link
                    key={task.id}
                    href={`/dashboard/employer/tasks/${task.id}`}
                    className="flex items-center justify-between gap-4 p-5 transition hover:bg-slate-50 sm:p-6"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="truncate font-semibold text-slate-900">
                          {task.title}
                        </h4>

                        <span
                          className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                            task.status === "Completed"
                              ? "bg-green-50 text-green-700"
                              : "bg-[#E7F3FF] text-[#1877F2]"
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                        <span>{task.category}</span>
                        <span>{task.applicants} applicants</span>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <span className="hidden font-bold text-slate-900 sm:block">
                        {task.payment}
                      </span>

                      <ChevronRight
                        size={19}
                        className="text-slate-400"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-bold text-slate-950">Quick Actions</h3>

              <p className="mt-1 text-sm text-slate-500">
                Manage your employer account.
              </p>

              <div className="mt-5 space-y-3">
                <Link
                  href="/dashboard/employer/tasks/create"
                  className="flex items-center justify-between border border-slate-200 p-4 transition hover:border-[#1877F2]/30 hover:bg-[#F7F8FA]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-[#E7F3FF] p-2 text-[#1877F2]">
                      <Plus size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Post a new task
                      </p>
                      <p className="text-xs text-slate-500">
                        Find the right worker
                      </p>
                    </div>
                  </div>

                  <ChevronRight size={18} className="text-slate-400" />
                </Link>

                <Link
                  href="/dashboard/employer/applications"
                  className="flex items-center justify-between border border-slate-200 p-4 transition hover:border-[#1877F2]/30 hover:bg-[#F7F8FA]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-[#E7F3FF] p-2 text-[#1877F2]">
                      <Users size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Review applications
                      </p>
                      <p className="text-xs text-slate-500">
                        24 applications waiting
                      </p>
                    </div>
                  </div>

                  <ChevronRight size={18} className="text-slate-400" />
                </Link>

                <Link
                  href="/dashboard/employer/payments"
                  className="flex items-center justify-between border border-slate-200 p-4 transition hover:border-[#1877F2]/30 hover:bg-[#F7F8FA]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-[#E7F3FF] p-2 text-[#1877F2]">
                      <CreditCard size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Manage payments
                      </p>
                      <p className="text-xs text-slate-500">
                        View your transactions
                      </p>
                    </div>
                  </div>

                  <ChevronRight size={18} className="text-slate-400" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-6 border border-slate-800 bg-slate-950 p-6 text-white sm:p-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-bold">
                  Need someone to get the job done?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                  Post your task on EarnConnect and connect with skilled
                  workers ready to help.
                </p>
              </div>

              <Link
                href="/dashboard/employer/tasks/create"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                <Plus size={18} />
                Post a Task
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}