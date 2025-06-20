import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { name, phone, email, service, date, timeSlot } = body;

    const request = await prisma.serviceRequest.create({
      data: {
        name,
        phone,
        email,
        service,
        date: new Date(date),
        timeSlot,
        user: {
          connect: { id: session.user.id },
        },
      },
    });

    return NextResponse.json({ message: "Request submitted", request });
  } catch (err) {
    console.error("Request error:", err);
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
  }
}