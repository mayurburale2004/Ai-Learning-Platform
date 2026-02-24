import { db } from "@/config/db";
import { quizzesTable } from "@/config/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { GoogleGenAI } from "@google/genai";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const QUIZ_PROMPT = `
You are an AI quiz generator. Based on the given course content, 
create exactly 10 multiple-choice questions in JSON format.
Each question must have:
- "question": text of the question
- "options": an array of 4 answer choices
- "correctAnswer": one correct option from the array

Output strictly in JSON array format only.
`;

export async function POST(req) {
  try {
    const { courseId, contentText } = await req.json();
    const user = await currentUser();

    if (!courseId || !contentText) {
      return NextResponse.json(
        { error: "courseId and contentText are required" },
        { status: 400 }
      );
    }

    const model = "gemini-2.0-flash";
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: QUIZ_PROMPT + "\n\nCourse Content:\n" + contentText,
          },
        ],
      },
    ];

    const config = { responseMimeType: "text/plain" };

    // Generate quiz using Gemini
    const response = await ai.models.generateContent({
      model,
      contents,
      config,
    });

    const rawText = response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const cleanJson = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const questions = JSON.parse(cleanJson);

    // Store quiz in DB
    const result = await db.insert(quizzesTable).values({
      courseId,
      contentText,
      questions,
    });

    return NextResponse.json({
      success: true,
      message: "Quiz generated successfully ✅",
      courseId,
      totalQuestions: questions.length,
      questions,
    });
  } catch (error) {
    console.error("❌ Error generating quiz:", error);
    return NextResponse.json(
      { error: "Failed to generate quiz", details: error.message },
      { status: 500 }
    );
  }
}
