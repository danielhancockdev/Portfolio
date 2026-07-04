import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("🔥 FULL ERROR:", err);

    return NextResponse.json(
      {
        error: "Gemini failed",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}