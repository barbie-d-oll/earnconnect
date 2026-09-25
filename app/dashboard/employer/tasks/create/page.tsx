"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  ImagePlus,
  X,
} from "lucide-react";
import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

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

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");
    setSuccessMessage("");

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Please select a JPG, PNG, or WEBP image.");
      e.target.value = "";
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setError("Image size must be 5MB or less.");
      e.target.value = "";
      return;
    }

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(null);
    setImagePreview("");
  };

  const validateForm = (status: "DRAFT" | "PUBLISHED") => {
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

    if (status === "PUBLISHED" && !imageFile) {
      return "Please upload an image of the task before publishing.";
    }

    return "";
  };

  const uploadImage = async (file: File) => {
    const cloudName =
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    const uploadPreset =
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      throw new Error(
        "Cloudinary configuration is missing."
      );
    }

    const uploadData = new FormData();

    uploadData.append("file", file);
    uploadData.append("upload_preset", uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: uploadData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Cloudinary error:", data);

      throw new Error(
        data?.error?.message || "Image upload failed."
      );
    }

    return data.secure_url as string;
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    status: "DRAFT" | "PUBLISHED"
  ) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    const validationError = validateForm(status);

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      let imageUrl: string | null = null;

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title.trim(),
          description: formData.description.trim(),
          category: formData.category,
          location: formData.location.trim(),
          payment: Number(formData.payment),
          deadline: formData.deadline,
          imageUrl,
          publish: status === "PUBLISHED",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Failed to create task."
        );
      }

      setSuccessMessage(
        status === "DRAFT"
          ? "Task saved as a draft."
          : "Task published successfully."
      );

      setFormData(initialForm);
      removeImage();
    } catch (error) {
      console.error("Create task error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
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
            <CheckCircle2
              className="mt-0.5 shrink-0"
              size={20}
            />

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

        {/* Form */}
        <div className="border border-slate-200 bg-white shadow-sm">
          <form
            className="p-6 sm:p-8"
            onSubmit={(e) => handleSubmit(e, "PUBLISHED")}
          >
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
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Task Image */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="task-image"
                    className="block text-sm font-semibold text-[#050505]"
                  >
                    Task image
                  </label>

                  <span className="text-xs text-[#65676B]">
                    Required to publish
                  </span>
                </div>

                <p className="mb-3 text-sm text-[#65676B]">
                  Upload a clear image showing the work or task.
                </p>

                {!imagePreview ? (
                  <label
                    htmlFor="task-image"
                    className="flex min-h-[190px] cursor-pointer flex-col items-center justify-center border-2 border-solid border-slate-300 bg-[#F7F8FA] px-6 py-8 text-center transition hover:border-[#1877F2] hover:bg-[#E7F3FF]/40"
                  >
                    <ImagePlus
                      size={32}
                      className="mb-3 text-[#1877F2]"
                    />

                    <span className="text-sm font-semibold text-[#050505]">
                      Click to upload an image
                    </span>

                    <span className="mt-1 text-xs text-[#65676B]">
                      JPG, PNG or WEBP · Maximum 5MB
                    </span>

                    <input
                      id="task-image"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="relative overflow-hidden border border-slate-300 bg-[#F7F8FA]">
                    {/* Local object URL preview; next/image is not needed here. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Task preview"
                      className="h-[420px] w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-white text-[#050505] shadow-md transition hover:text-red-600"
                      aria-label="Remove image"
                    >
                      <X size={18} />
                    </button>

                    <div className="border-t border-slate-200 bg-white px-4 py-3">
                      <p className="truncate text-sm font-medium text-[#050505]">
                        {imageFile?.name}
                      </p>

                      <p className="mt-1 text-xs text-[#65676B]">
                        Image ready to upload
                      </p>
                    </div>
                  </div>
                )}
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
                      e as unknown as FormEvent<HTMLFormElement>,
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