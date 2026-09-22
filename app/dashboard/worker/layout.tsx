import { redirect } from "next/navigation";
import { getSession } from "@/app/lib/session";

export default async function WorkerDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();

  if (!session.isLoggedIn) redirect("/auth/login");
  if (session.role === "EMPLOYER") redirect("/dashboard/employer");
  if (session.role !== "WORKER") redirect("/auth/login");

  return children;
}
