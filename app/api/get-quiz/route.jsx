import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { quizzesTable } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("courseId");

    if (!courseId) {
      return NextResponse.json({ error: "Missing courseId" }, { status: 400 });
    }

    const quizzes = await db
      .select()
      .from(quizzesTable)
      .where(eq(quizzesTable.courseId, courseId));

    if (quizzes.length === 0) {
      return NextResponse.json({ message: "No quiz found for this course" });
    }

    // ✅ Ensure questions are parsed as JSON array
    let questions = quizzes[0].questions;
    if (typeof questions === "string") {
      try {
        questions = JSON.parse(questions);
      } catch (e) {
        console.error("Error parsing questions JSON:", e);
        questions = [];
      }
    }

    return NextResponse.json({ success: true, questions });
  } catch (error) {
    console.error("Error fetching quiz:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
