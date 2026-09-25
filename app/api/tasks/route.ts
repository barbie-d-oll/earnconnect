import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getSession } from "@/app/lib/session";

// GET employer's tasks
export async function GET() {
  try {
    const session = await getSession();

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json(
        { message: "You must be logged in." },
        { status: 401 }
      );
    }

    if (session.role !== "EMPLOYER") {
      return NextResponse.json(
        { message: "Only employers can view employer tasks." },
        { status: 403 }
      );
    }

    const tasks = await prisma.task.findMany({
      where: {
        employerId: session.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      tasks,
    });
  } catch (error) {
    console.error("Get employer tasks error:", error);

    return NextResponse.json(
      { message: "Failed to load tasks." },
      { status: 500 }
    );
  }
}

// CREATE task
export async function POST(request: NextRequest) {
  try {
    const session = await getSession();

    if (!session.isLoggedIn || !session.userId) {
      return NextResponse.json(
        { message: "You must be logged in." },
        { status: 401 }
      );
    }

    if (session.role !== "EMPLOYER") {
      return NextResponse.json(
        { message: "Only employers can create tasks." },
        { status: 403 }
      );
    }

    const body = await request.json();

    const {
      title,
      description,
      category,
      location,
      payment,
      deadline,
      imageUrl,
      publish,
    } = body;

    if (
      !title ||
      !description ||
      !category ||
      !payment ||
      !deadline
    ) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (publish && !imageUrl) {
      return NextResponse.json(
        {
          message:
            "Please upload an image for the task before publishing.",
        },
        { status: 400 }
      );
    }

    const employer = await prisma.user.findUnique({
      where: {
        id: session.userId,
      },
    });

    if (!employer) {
      return NextResponse.json(
        { message: "Employer account not found." },
        { status: 404 }
      );
    }

    if (employer.role !== "EMPLOYER") {
      return NextResponse.json(
        { message: "Only employers can create tasks." },
        { status: 403 }
      );
    }

    const task = await prisma.task.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        category: category.trim(),
        location: location?.trim() || null,
        payment: Number(payment),
        deadline: new Date(deadline),
        imageUrl: imageUrl || null,
        employerId: session.userId,
        status: publish ? "PUBLISHED" : "DRAFT",
      },
    });

    return NextResponse.json(
      {
        message: publish
          ? "Task published successfully."
          : "Task saved as draft.",
        task,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create task error:", error);

    return NextResponse.json(
      { message: "Failed to create task." },
      { status: 500 }
    );
  }
}