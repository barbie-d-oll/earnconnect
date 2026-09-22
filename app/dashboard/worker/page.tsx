"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  Wallet,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Briefcase,
  ChevronRight,
  X,
} from "lucide-react";

type TaskStatus = "AVAILABLE" | "APPLIED" | "ACTIVE" | "COMPLETED";

type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  payment: number;
  deadline: string;
  employer: string;
  status: TaskStatus;
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Help move office furniture",
    description:
      "We need someone to help move desks, chairs and office equipment to a new location.",
    category: "Moving",
    location: "Kumasi",
    payment: 150,
    deadline: "Tomorrow",
    employer: "Bright Office Ltd",
    status: "AVAILABLE",
  },
  {
    id: 2,
    title: "Social media assistant",
    description:
      "Help create and schedule social media posts for a small local business.",
    category: "Digital",
    location: "Remote",
    payment: 250,
    deadline: "3 days",
    employer: "Nova Media",
    status: "AVAILABLE",
  },
  {
    id: 3,
    title: "House cleaning",
    description:
      "General cleaning of a three-bedroom house. Cleaning materials will be provided.",
    category: "Cleaning",
    location: "Ejisu",
    payment: 180,
    deadline: "Saturday",
    employer: "Private Client",
    status: "AVAILABLE",
  },
  {
    id: 4,
    title: "Event setup assistant",
    description:
      "Assist with setting up chairs, tables and decorations for a weekend event.",
    category: "Events",
    location: "Santasi",
    payment: 200,
    deadline: "Friday",
    employer: "Golden Events",
    status: "AVAILABLE",
  },
];

const categories = [
  "All",
  "Moving",
  "Digital",
  "Cleaning",
  "Events",
];

export default function WorkerDashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [savedTasks, setSavedTasks] = useState<number[]>([]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase()) ||
        task.location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || task.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [tasks, search, category]);

  const availableTasks = filteredTasks.filter(
    (task) => task.status === "AVAILABLE"
  );

  const appliedTasks = tasks.filter(
    (task) => task.status === "APPLIED"
  );

  const toggleSave = (taskId: number) => {
    setSavedTasks((current) =>
      current.includes(taskId)
        ? current.filter((id) => id !== taskId)
        : [...current, taskId]
    );
  };

  const applyForTask = (taskId: number) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId
          ? { ...task, status: "APPLIED" }
          : task
      )
    );

    setSelectedTask(null);
  };

  const cancelApplication = (taskId: number) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId
          ? { ...task, status: "AVAILABLE" }
          : task
      )
    );
  };

  return (
<main className="min-h-screen bg-[#F0F2F5] text-[#050505]">
  <header className="border-b border-slate-200 bg-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
      
      <Link
        href="/"
        className="text-xl font-black tracking-tight sm:text-2xl"
      >
        <span className="text-[#1877F2]">Earn</span>
        <span>Connect</span>
      </Link>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-[#050505]">
            Barbara
          </p>
          <p className="text-xs text-[#65676B]">
            Worker
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-sm font-bold text-white">
          B
        </div>
      </div>

    </div>
  </header>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}

       <section className="mb-8">
  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1877F2]">
    Worker dashboard
  </p>

  <h1 className="text-3xl font-bold tracking-tight text-[#050505] sm:text-4xl">
    Find work. Earn money.
  </h1>

  <p className="mt-3 max-w-xl text-sm leading-6 text-[#65676B] sm:text-base">
    Browse available tasks, find opportunities that match your skills,
    and manage your work from one place.
  </p>
</section>
        {/* Stats */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Briefcase size={20} />}
            label="Available Tasks"
            value={String(availableTasks.length)}
          />

          <StatCard
            icon={<Clock size={20} />}
            label="Applications"
            value={String(appliedTasks.length)}
          />

          <StatCard
            icon={<Wallet size={20} />}
            label="Total Earnings"
            value="GH₵ 0"
          />

          <StatCard
            icon={<CheckCircle2 size={20} />}
            label="Completed"
            value="0"
          />
        </section>

        {/* Search + Filter */}
        <section className="mb-6 border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for tasks..."
                className="w-full rounded-xl border border-slate-200 bg-[#F7F8FA] py-3 pl-12 pr-4 text-sm outline-none transition focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    category === item
                      ? "bg-[#1877F2] text-white"
                      : "bg-[#F0F2F5] text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        {appliedTasks.length > 0 && (
          <section className="mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold">My Applications</h2>
              <p className="text-sm text-slate-500">
                Tasks you have applied for.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {appliedTasks.map((task) => (
                <div
                  key={task.id}
                  className="border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase text-[#1877F2]">
                        Application submitted
                      </p>

                      <h3 className="font-bold">{task.title}</h3>

                      <p className="mt-2 text-sm text-slate-600">
                        {task.employer}
                      </p>
                    </div>

                    <button
                      onClick={() => cancelApplication(task.id)}
                      className="rounded-lg px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-100"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Available Tasks */}
        <section>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold">Available Tasks</h2>
              <p className="text-sm text-slate-500">
                Find an opportunity that matches your skills.
              </p>
            </div>

            <span className="text-sm font-medium text-slate-500">
              {availableTasks.length} found
            </span>
          </div>

          {availableTasks.length === 0 ? (
            <div className="border border-slate-200 bg-white p-12 text-center shadow-sm">
              <Search className="mx-auto mb-3 text-slate-400" size={32} />

              <h3 className="font-bold">No tasks found</h3>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-4 rounded-xl bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#166FE5]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {availableTasks.map((task) => (
                <article
                  key={task.id}
                  className="group flex flex-col border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#1877F2]/30"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <span className="rounded-md bg-[#E7F3FF] px-3 py-1 text-xs font-semibold text-[#1877F2]">
                      {task.category}
                    </span>

                    <button
                      onClick={() => toggleSave(task.id)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-[#1877F2]"
                      aria-label="Save task"
                    >
                      {savedTasks.includes(task.id) ? (
                        <BookmarkCheck size={20} />
                      ) : (
                        <Bookmark size={20} />
                      )}
                    </button>
                  </div>

                  <h3 className="text-lg font-bold">{task.title}</h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                    {task.description}
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {task.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      Deadline: {task.deadline}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Payment</p>
                        <p className="text-lg font-bold text-[#1877F2]">
                          GH₵ {task.payment}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedTask(task)}
                        className="flex items-center gap-1 rounded-xl bg-[#1877F2] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#166FE5]"
                      >
                        View task
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Task Details Modal */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div>
                <p className="text-xs font-semibold uppercase text-[#1877F2]">
                  Task details
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  {selectedTask.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedTask(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 p-5">
              <div>
                <p className="text-sm font-semibold">Description</p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {selectedTask.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Detail
                  label="Payment"
                  value={`GH₵ ${selectedTask.payment}`}
                />

                <Detail
                  label="Category"
                  value={selectedTask.category}
                />

                <Detail
                  label="Location"
                  value={selectedTask.location}
                />

                <Detail
                  label="Deadline"
                  value={selectedTask.deadline}
                />
              </div>

              <div className="border border-slate-200 bg-[#F7F8FA] p-4">
                <p className="text-xs text-slate-500">Employer</p>
                <p className="mt-1 font-semibold">
                  {selectedTask.employer}
                </p>
              </div>

              <button
                onClick={() => applyForTask(selectedTask.id)}
                className="w-full rounded-xl bg-[#1877F2] px-4 py-3.5 font-semibold text-white transition hover:bg-[#166FE5]"
              >
                Apply for this task
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
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
    <div className="border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E7F3FF] text-[#1877F2]">
        {icon}
      </div>

      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border border-slate-200 bg-white p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}