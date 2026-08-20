import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export type SessionData = {
  userId: string;
  role: "WORKER" | "EMPLOYER" | "ADMIN";
  isLoggedIn: boolean;
};

export const sessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "earnconnect_session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  },
};

export async function getSession() {
  const cookieStore = await cookies();

  return getIronSession<SessionData>(
    cookieStore,
    sessionOptions
  );
}