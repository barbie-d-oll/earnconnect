"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Clock3,
  Eye,
  Search,
  UserRound,
  X,
} from "lucide-react";

type ApplicationStatus = "PENDING" | "ACCEPTED" | "REJECTED";

type Application = {
  id: string;
  applicant: string;
  email: string;
  task: string;
  category: string;
  appliedDate: string;
  message: string;
  status: ApplicationStatus;
};

const initialApplications: Application[] = [
  {
    id: "1",
    applicant: "John Mensah",
    email: "john.mensah@example.com",
    task: "Logo Design for Small Business",
    category: "Graphic Design",
    appliedDate: "Sep 20, 2026",
    message:
      "I have experience creating business logos and brand identities. I would be happy to work on this project.",
    status: "PENDING",
  },
  {
    id: "2",
    applicant: "Ama Boateng",
    email: "ama.boateng@example.com",
    task: "Social Media Content Creation",
    category: "Marketing",
    appliedDate: "Sep 19, 2026",
    message:
      "I have worked on social media content for small businesses and can create engaging posts.",
    status: "ACCEPTED",
  },
  {
    id: "3",
    applicant: "Kofi Asare",
    email: "kofi.asare@example.com",
    task: "Website Data Entry",
    category: "Data Entry",
    appliedDate: "Sep 18, 2026",
    message:
      "I am comfortable working with spreadsheets and entering large amounts of information accurately.",
    status: "REJECTED",
  },
  {
    id: "4",
    applicant: "Abena Owusu",
    email: "abena.owusu@example.com",
    task: "Logo Design for Small Business",
    category: "Graphic Design",
    appliedDate: "Sep 17, 2026",
    message:
      "I would love to help with the logo project. I have experience with modern and simple brand designs.",
    status: "PENDING",
  },
];

const statusStyles: Record<ApplicationStatus, string> = {
  PENDING: "bg-[#F0F2F5] text-[#65676B]",
  ACCEPTED: "bg-[#EAF7EE] text-[#247A3D]",
  REJECTED: "bg-[#FDECEE] text-[#C91F3A]",
};

const statusLabels: Record<ApplicationStatus, string> = {
  PENDING: "Pending",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
};

export default function ApplicationsPage() {
  const [applications, setApplications] =
    useState<Application[]>(initialApplications);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | ApplicationStatus>(
    "ALL"
  );
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  const filteredApplications = useMemo(() => {
    const query = search.toLowerCase().trim();

    return applications.filter((application) => {
      const matchesSearch =
        !query ||
        application.applicant.toLowerCase().includes(query) ||
        application.task.toLowerCase().includes(query) ||
        application.category.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "ALL" || application.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, statusFilter]);

  const updateApplicationStatus = (
    id: string,
    status: ApplicationStatus
  ) => {
    setApplications((current) =>
      current.map((application) =>
        application.id === id ? { ...application, status } : application
      )
    );

    setSelectedApplication((current) =>
      current?.id === id ? { ...current, status } : current
    );
  };

  const pendingCount = applications.filter(
    (application) => application.status === "PENDING"
  ).length;

  const acceptedCount = applications.filter(
    (application) => application.status === "ACCEPTED"
  ).length;

  const rejectedCount = applications.filter(
    (application) => application.status === "REJECTED"
  ).length;

  return (
    <main className="min-h-screen bg-[#F0F2F5] text-[#050505]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/dashboard/employer"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#65676B] transition-colors hover:text-[#1877F2]"
          >
            <ArrowLeft size={17} />
            Back to Employer Dashboard
          </Link>

          <div>
            <p className="mb-1 text-sm font-medium text-[#1877F2]">
              Applications
            </p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Review applicants
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-[#65676B]">
              Review applications submitted for your tasks and manage
              applicant status.
            </p>
          </div>
        </div>

        <section className="mb-6 grid gap-4 sm:grid-cols-3">
          <SummaryCard
            label="Pending"
            value={pendingCount}
            icon={<Clock3 size={19} />}
          />

          <SummaryCard
            label="Accepted"
            value={acceptedCount}
            icon={<Check size={19} />}
          />

          <SummaryCard
            label="Rejected"
            value={rejectedCount}
            icon={<X size={19} />}
          />
        </section>

        <section className="border border-[#DADDE1] bg-white shadow-sm">
          <div className="border-b border-[#E4E6EB] p-4 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-semibold">All applications</h2>
                <p className="mt-1 text-sm text-[#65676B]">
                  {filteredApplications.length} application
                  {filteredApplications.length === 1 ? "" : "s"} found
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#65676B]"
                  />
                  <input
                    type="text"
                    placeholder="Search applications"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="h-10 w-full border border-[#CCD0D5] bg-white pl-10 pr-3 text-sm outline-none transition focus:border-[#1877F2] focus:ring-1 focus:ring-[#1877F2] sm:w-64"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(
                      event.target.value as "ALL" | ApplicationStatus
                    )
                  }
                  className="h-10 border border-[#CCD0D5] bg-white px-3 text-sm outline-none focus:border-[#1877F2] focus:ring-1 focus:ring-[#1877F2]"
                >
                  <option value="ALL">All statuses</option>
                  <option value="PENDING">Pending</option>
                  <option value="ACCEPTED">Accepted</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </div>
            </div>
          </div>

          <div className="divide-y divide-[#E4E6EB]">
            {filteredApplications.length === 0 ? (
              <div className="px-6 py-16 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F2F5] text-[#65676B]">
                  <UserRound size={22} />
                </div>
                <h3 className="font-semibold">No applications found</h3>
                <p className="mt-1 text-sm text-[#65676B]">
                  Try changing your search or status filter.
                </p>
              </div>
            ) : (
              filteredApplications.map((application) => (
                <ApplicationRow
                  key={application.id}
                  application={application}
                  onView={() => setSelectedApplication(application)}
                  onAccept={() =>
                    updateApplicationStatus(application.id, "ACCEPTED")
                  }
                  onReject={() =>
                    updateApplicationStatus(application.id, "REJECTED")
                  }
                />
              ))
            )}
          </div>
        </section>
      </div>

      {selectedApplication && (
        <ApplicationModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onAccept={() =>
            updateApplicationStatus(selectedApplication.id, "ACCEPTED")
          }
          onReject={() =>
            updateApplicationStatus(selectedApplication.id, "REJECTED")
          }
        />
      )}
    </main>
  );
}

function SummaryCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="border border-[#DADDE1] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#65676B]">{label}</p>
          <p className="mt-1 text-2xl font-bold">{value}</p>
        </div>

        <div className="text-[#1877F2]">{icon}</div>
      </div>
    </div>
  );
}

function ApplicationRow({
  application,
  onView,
  onAccept,
  onReject,
}: {
  application: Application;
  onView: () => void;
  onAccept: () => void;
  onReject: () => void;
}) {
  return (
    <div className="p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7F3FF] text-[#1877F2]">
            <UserRound size={20} />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold">{application.applicant}</h3>

              <span
                className={`px-2.5 py-1 text-xs font-medium ${statusStyles[application.status]}`}
              >
                {statusLabels[application.status]}
              </span>
            </div>

            <p className="mt-1 text-sm text-[#65676B]">
              {application.task}
            </p>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#65676B]">
              <span>{application.category}</span>
              <span>Applied {application.appliedDate}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          <button
            type="button"
            onClick={onView}
            className="inline-flex h-9 items-center gap-2 border border-[#CCD0D5] bg-white px-3 text-sm font-medium text-[#050505] transition hover:bg-[#F0F2F5]"
          >
            <Eye size={16} />
            Review
          </button>

          {application.status !== "ACCEPTED" && (
            <button
              type="button"
              onClick={onAccept}
              className="inline-flex h-9 items-center gap-2 bg-[#1877F2] px-3 text-sm font-semibold text-white transition hover:bg-[#166FE5]"
            >
              <Check size={16} />
              Accept
            </button>
          )}

          {application.status !== "REJECTED" && (
            <button
              type="button"
              onClick={onReject}
              className="inline-flex h-9 items-center gap-2 border border-[#CCD0D5] bg-white px-3 text-sm font-medium text-[#C91F3A] transition hover:bg-[#FDECEE]"
            >
              <X size={16} />
              Reject
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ApplicationModal({
  application,
  onClose,
  onAccept,
  onReject,
}: {
  application: Application;
  onClose: () => void;
  onAccept: () => void;
  onReject: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg border border-[#DADDE1] bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[#E4E6EB] p-5">
          <div>
            <p className="text-sm text-[#65676B]">Applicant</p>
            <h2 className="mt-1 text-xl font-bold">
              {application.applicant}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center text-[#65676B] hover:bg-[#F0F2F5]"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5 p-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[#65676B]">
              Task
            </p>
            <p className="mt-1 font-medium">{application.task}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[#65676B]">
                Email
              </p>
              <p className="mt-1 text-sm">{application.email}</p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-[#65676B]">
                Applied
              </p>
              <p className="mt-1 text-sm">{application.appliedDate}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[#65676B]">
              Application message
            </p>
            <p className="mt-2 text-sm leading-6 text-[#050505]">
              {application.message}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[#65676B]">
              Current status
            </p>

            <span
              className={`mt-2 inline-flex px-2.5 py-1 text-xs font-medium ${statusStyles[application.status]}`}
            >
              {statusLabels[application.status]}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-2 border-t border-[#E4E6EB] p-5">
          {application.status !== "REJECTED" && (
            <button
              type="button"
              onClick={onReject}
              className="h-10 border border-[#CCD0D5] px-4 text-sm font-medium text-[#C91F3A] hover:bg-[#FDECEE]"
            >
              Reject
            </button>
          )}

          {application.status !== "ACCEPTED" && (
            <button
              type="button"
              onClick={onAccept}
              className="h-10 bg-[#1877F2] px-4 text-sm font-semibold text-white hover:bg-[#166FE5]"
            >
              Accept applicant
            </button>
          )}
        </div>
      </div>
    </div>
  );
}