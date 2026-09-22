"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowLeft, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { saveTask } from "@/app/lib/tasks";

const categories = [
  "Web Development",
  "Mobile Development",
  "Graphic Design",
  "Writing",
  "Marketing",
  "Data Entry",
  "Photography",
  "Cleaning",
  "Delivery",
  "Other",
];

type FormData = {
  title: string;
  category: string;
  description: string;
  location: string;
  payment: string;
  deadline: string;
};

const initialForm: FormData = {
  title: "",
  category: "",
  description: "",
  location: "",
  payment: "",
  deadline: "",
};

export default function PostTaskPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

    setError("");
    setSuccessMessage("");
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      return "Please enter a task title.";
    }

    if (!formData.category) {
      return "Please select a category.";
    }

    if (!formData.description.trim()) {
      return "Please describe the task.";
    }

    if (!formData.location.trim()) {
      return "Please enter the task location.";
    }

    if (!formData.payment || Number(formData.payment) <= 0) {
      return "Please enter a valid payment amount.";
    }

    if (!formData.deadline) {
      return "Please select a deadline.";
    }

    return "";
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    status: "DRAFT" | "PUBLISHED"
  ) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const task = {
        id: crypto.randomUUID(),
        title: formData.title.trim(),
        description: formData.description.trim(),
        category: formData.category,
        location: formData.location.trim(),
        payment: Number(formData.payment),
        deadline: formData.deadline,
        status,
        employerId: "current-employer",
        createdAt: new Date().toISOString(),
      };

      saveTask(task);

      setSuccessMessage(
        status === "DRAFT"
          ? "Task saved as a draft."
          : "Task published successfully."
      );

      setFormData(initialForm);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F2F5] px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/employer"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#65676B] transition hover:text-[#1877F2]"
          >
            <ArrowLeft size={17} />
            Back to Employer Dashboard
          </Link>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E7F3FF] text-[#1877F2]">
              <BriefcaseBusiness size={24} />
            </div>

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1877F2]">
                Create a task
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-[#050505]">
                Post a Task
              </h1>

              <p className="mt-2 text-[#65676B]">
                Tell skilled workers what you need done and find the
                right person for your task.
              </p>
            </div>
          </div>
        </div>

        {/* Success */}
        {successMessage && (
          <div className="mb-6 flex items-start gap-3 border border-green-200 bg-green-50 px-5 py-4 text-green-700">
            <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

            <div>
              <p className="font-semibold">{successMessage}</p>

              <Link
                href="/dashboard/employer/tasks"
                className="mt-1 inline-block text-sm font-medium underline"
              >
                View My Tasks
              </Link>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-6 border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {/* Form Card */}
        <div className="border border-slate-200 bg-white shadow-sm">
          <form className="p-6 sm:p-8">

            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#050505]">
                Task Information
              </h2>

              <p className="mt-1 text-sm text-[#65676B]">
                Provide the basic details about the task.
              </p>
            </div>

            <div className="space-y-6">

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-semibold text-[#050505]"
                >
                  Task title
                </label>

                <input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Build an e-commerce website"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-[#050505]"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                >
                  <option value="">Select a category</option>

                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-[#050505]"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Describe what the worker needs to deliver..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                />

                <p className="mt-2 text-xs text-[#8A8D91]">
                  Be clear about what the worker needs to deliver.
                </p>
              </div>

              {/* Location + Payment */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-semibold text-[#050505]"
                  >
                    Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Kumasi or Remote"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="payment"
                    className="mb-2 block text-sm font-semibold text-[#050505]"
                  >
                    Payment (GHS)
                  </label>

                  <input
                    id="payment"
                    name="payment"
                    type="number"
                    min="1"
                    step="0.01"
                    value={formData.payment}
                    onChange={handleChange}
                    placeholder="e.g. 500"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                  />
                </div>
              </div>

              {/* Deadline */}
              <div>
                <label
                  htmlFor="deadline"
                  className="mb-2 block text-sm font-semibold text-[#050505]"
                >
                  Application deadline
                </label>

                <input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">

              <Link
                href="/dashboard/employer"
                className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-[#050505] transition hover:bg-slate-50"
              >
                Cancel
              </Link>

              <button
                type="button"
                disabled={loading}
                onClick={(e) => {
                  const form = e.currentTarget.form;

                  if (form) {
                    handleSubmit(
                      {
                        preventDefault: () => {},
                      } as FormEvent<HTMLFormElement>,
                      "DRAFT"
                    );
                  }
                }}
                className="rounded-lg border border-[#1877F2] px-6 py-3 text-sm font-semibold text-[#1877F2] transition hover:bg-[#E7F3FF] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Draft"}
              </button>

              <button
                type="submit"
                disabled={loading}
                onClick={(e) => {
                  e.preventDefault();

                  handleSubmit(
                    e as unknown as FormEvent<HTMLFormElement>,
                    "PUBLISHED"
                  );
                }}
                className="rounded-lg bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#166FE5] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Publishing..." : "Publish Task"}
              </button>

            </div>
          </form>
        </div>
      </div>
    </main>
  );
}