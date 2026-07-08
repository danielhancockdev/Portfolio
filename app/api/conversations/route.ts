
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const conversations = await prisma.conversation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(conversations);
}

export async function POST() {
  const conversation = await prisma.conversation.create({
    data: {},
  });

  return NextResponse.json(conversation, { status: 201 });
}