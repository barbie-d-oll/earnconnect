import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/app/lib/prisma";
import { getSession } from "@/app/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    if (user.status !== "ACTIVE") {
      return NextResponse.json(
        { message: "Your account is currently unavailable." },
        { status: 403 }
      );
    }

    const passwordMatches = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!passwordMatches) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    const session = await getSession();

    session.userId = user.id;
    session.role = user.role;
    session.isLoggedIn = true;

    await session.save();

    return NextResponse.json(
      {
        message: "Login successful.",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}