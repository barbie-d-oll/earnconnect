import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      description,
      category,
      location,
      payment,
      deadline,
      employerId,
      publish,
    } = body;

    if (
      !title ||
      !description ||
      !category ||
      !payment ||
      !deadline ||
      !employerId
    ) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const employer = await prisma.user.findUnique({
      where: {
        id: employerId,
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
        employerId,
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