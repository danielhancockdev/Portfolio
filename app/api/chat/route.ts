import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

import { portfolioContext } from "../../../lib/portfolio-context";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

      const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `${portfolioContext}

Visitor's question:
${message}`,
      });

    return NextResponse.json({
      reply: response.text ?? "No response from Gemini",
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    return NextResponse.json(
      { error: "Something went wrong with the AI assistant." },
      { status: 500 }
    );
  }
}


