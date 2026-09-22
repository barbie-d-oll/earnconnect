import { redirect } from "next/navigation";
import { getSession } from "@/app/lib/session";

export default async function EmployerDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();

  if (!session.isLoggedIn) redirect("/auth/login");
  if (session.role === "WORKER") redirect("/dashboard/worker");
  if (session.role !== "EMPLOYER") redirect("/auth/login");

  return children;
}
