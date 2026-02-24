import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { quizResultsTable } from "@/config/schema";

export async function POST(req) {
  try {
    const { userId, quizId, answers, score, total } = await req.json();

    if (!userId || !quizId || !answers || score === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await db.insert(quizResultsTable).values({
      userId,
      quizId,
      answers,
      score,
      total,
    });

    return NextResponse.json({ message: "Result saved successfully", result });
  } catch (error) {
    console.error("Error saving result:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
