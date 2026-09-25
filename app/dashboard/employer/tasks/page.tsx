"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Plus,
  Wallet,
} from "lucide-react";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";

type Task = {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string | null;
  payment: number;
  deadline: string;
  imageUrl: string | null;
  status: "DRAFT" | "PUBLISHED";
  createdAt: string;
};

type Filter = "ALL" | "PUBLISHED" | "DRAFT";

export default function MyTasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("ALL");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/tasks");

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load tasks.");
        }

        setTasks(data.tasks || []);
      } catch (error) {
        console.error("Load tasks error:", error);

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load your tasks."
        );
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    if (filter === "ALL") {
      return tasks;
    }

    return tasks.filter((task) => task.status === filter);
  }, [tasks, filter]);

  const publishedCount = tasks.filter(
    (task) => task.status === "PUBLISHED"
  ).length;

  const draftCount = tasks.filter(
    (task) => task.status === "DRAFT"
  ).length;

  return (
    <main className="min-h-screen bg-[#F0F2F5] px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/employer"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#65676B] transition hover:text-[#1877F2]"
          >
            <ArrowLeft size={17} />
            Back to Employer Dashboard
          </Link>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1877F2]">
                Employer
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-[#050505] sm:text-4xl">
                My Tasks
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#65676B]">
                View and manage the tasks you have posted on EarnConnect.
              </p>
            </div>

            <Link
              href="/dashboard/employer/tasks/create"
              className="inline-flex items-center justify-center gap-2 bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#166FE5]"
            >
              <Plus size={18} />
              Post a Task
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#65676B]">
              All Tasks
            </p>

            <p className="mt-2 text-2xl font-bold text-[#050505]">
              {tasks.length}
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#65676B]">
              Published
            </p>

            <p className="mt-2 text-2xl font-bold text-[#050505]">
              {publishedCount}
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#65676B]">
              Drafts
            </p>

            <p className="mt-2 text-2xl font-bold text-[#050505]">
              {draftCount}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 border-b border-slate-200 bg-white">
          <div className="flex overflow-x-auto">
            {[
              { label: "All Tasks", value: "ALL" as Filter },
              { label: "Published", value: "PUBLISHED" as Filter },
              { label: "Drafts", value: "DRAFT" as Filter },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                className={`border-b-2 px-5 py-4 text-sm font-semibold transition ${
                  filter === item.value
                    ? "border-[#1877F2] text-[#1877F2]"
                    : "border-transparent text-[#65676B] hover:text-[#050505]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="border border-slate-200 bg-white px-6 py-12 text-center">
            <p className="text-sm text-[#65676B]">
              Loading your tasks...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="border border-red-200 bg-red-50 px-6 py-5">
            <p className="text-sm font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filteredTasks.length === 0 && (
          <div className="border border-slate-200 bg-white px-6 py-14 text-center">
            <BriefcaseBusiness
              size={30}
              className="mx-auto text-[#1877F2]"
            />

            <h2 className="mt-4 text-lg font-bold text-[#050505]">
              {filter === "ALL"
                ? "You haven't posted any tasks yet."
                : filter === "PUBLISHED"
                  ? "You don't have any published tasks."
                  : "You don't have any draft tasks."}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#65676B]">
              {filter === "ALL"
                ? "Create your first task and start connecting with workers."
                : "Tasks matching this filter will appear here."}
            </p>

            {filter === "ALL" && (
              <Link
                href="/dashboard/employer/tasks/create"
                className="mt-6 inline-flex items-center gap-2 bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#166FE5]"
              >
                <Plus size={18} />
                Post Your First Task
              </Link>
            )}
          </div>
        )}

        {/* Tasks */}
        {!loading && !error && filteredTasks.length > 0 && (
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <article
                key={task.id}
                className="border border-slate-200 bg-white transition hover:border-slate-300"
              >
                <div className="grid md:grid-cols-[220px_1fr]">

                  {/* Image */}
                  
<div className="h-52 bg-[#F7F8FA] md:h-full">
  {task.imageUrl ? (
    <Image
      src={task.imageUrl}
      alt={task.title}
      width={800}
      height={500}
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full min-h-[208px] items-center justify-center">
      <BriefcaseBusiness
        size={30}
        className="text-slate-300"
      />
    </div>
  )}
</div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-semibold uppercase tracking-wide text-[#1877F2]">
                            {task.category}
                          </span>

                          <span
                            className={`px-2.5 py-1 text-xs font-semibold ${
                              task.status === "PUBLISHED"
                                ? "bg-green-50 text-green-700"
                                : "bg-slate-100 text-[#65676B]"
                            }`}
                          >
                            {task.status === "PUBLISHED"
                              ? "Published"
                              : "Draft"}
                          </span>
                        </div>

                        <h2 className="mt-3 text-xl font-bold text-[#050505]">
                          {task.title}
                        </h2>
                      </div>

                      <Link
                        href={`/dashboard/employer/tasks/${task.id}`}
                        className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#1877F2] transition hover:text-[#166FE5]"
                      >
                        View Task
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>

                    <p className="mt-3 line-clamp-2 max-w-3xl text-sm leading-6 text-[#65676B]">
                      {task.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-100 pt-5 text-sm text-[#65676B]">
                      <div className="flex items-center gap-2">
                        <Wallet
                          size={16}
                          className="text-[#1877F2]"
                        />
                        <span>
                          GH₵{Number(task.payment).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={16}
                          className="text-[#1877F2]"
                        />
                        <span>
                          {task.location || "Remote"}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={16}
                          className="text-[#1877F2]"
                        />
                        <span>
                          Deadline:{" "}
                          {new Date(task.deadline).toLocaleDateString(
                            "en-GH",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}