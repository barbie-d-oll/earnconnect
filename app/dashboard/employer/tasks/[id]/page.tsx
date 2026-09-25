"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";

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

export default function TaskDetailsPage() {
  const params = useParams<{ id: string }>();

  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await fetch(`/api/tasks/${params.id}`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load task.");
        }

        setTask(data.task);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load task."
        );
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      loadTask();
    }
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F0F2F5] px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="border border-slate-200 bg-white p-8 text-sm text-[#65676B]">
            Loading task...
          </div>
        </div>
      </main>
    );
  }

  if (error || !task) {
    return (
      <main className="min-h-screen bg-[#F0F2F5] px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/dashboard/employer/tasks"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2]"
          >
            <ArrowLeft size={17} />
            Back to My Tasks
          </Link>

          <div className="border border-red-200 bg-white p-8">
            <h1 className="text-lg font-bold text-[#050505]">
              Unable to load task
            </h1>

            <p className="mt-2 text-sm text-[#65676B]">
              {error || "This task could not be found."}
            </p>
          </div>
        </div>
      </main>
    );
  }

  const formattedDeadline = new Date(task.deadline).toLocaleDateString(
    "en-GH",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <main className="min-h-screen bg-[#F0F2F5] px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/dashboard/employer/tasks"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] hover:text-[#166FE5]"
        >
          <ArrowLeft size={17} />
          Back to My Tasks
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Task image */}
          <div className="border border-slate-200 bg-white">
            {task.imageUrl ? (
              <Image
                src={task.imageUrl}
                alt={task.title}
                width={1100}
                height={700}
                className="h-[420px] w-full object-cover"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center bg-[#F7F8FA] text-sm text-[#65676B]">
                No task image
              </div>
            )}
          </div>

          {/* Task information */}
          <div className="border border-slate-200 bg-white p-7 sm:p-8">

            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#1877F2]">
                {task.category}
              </span>

              <span
                className={`px-3 py-1 text-xs font-semibold ${
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

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#050505]">
              {task.title}
            </h1>

            <div className="mt-7 border-t border-slate-200 pt-6">

              <div className="flex items-center gap-3">
                <Wallet
                  size={19}
                  className="text-[#1877F2]"
                />

                <div>
                  <p className="text-xs text-[#65676B]">
                    Payment
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#050505]">
                    GH₵{task.payment.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <MapPin
                  size={19}
                  className="text-[#1877F2]"
                />

                <div>
                  <p className="text-xs text-[#65676B]">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#050505]">
                    {task.location || "Remote"}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <CalendarDays
                  size={19}
                  className="text-[#1877F2]"
                />

                <div>
                  <p className="text-xs text-[#65676B]">
                    Application deadline
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#050505]">
                    {formattedDeadline}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Description */}
        <section className="mt-6 border border-slate-200 bg-white p-7 sm:p-8">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness
              size={20}
              className="text-[#1877F2]"
            />

            <h2 className="text-xl font-bold text-[#050505]">
              Task description
            </h2>
          </div>

          <p className="mt-5 max-w-4xl whitespace-pre-wrap text-[15px] leading-7 text-[#65676B]">
            {task.description}
          </p>
        </section>

      </div>
    </main>
  );
}