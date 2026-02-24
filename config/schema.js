import { boolean, integer, json, pgTable, varchar,text, uuid, jsonb, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  subscriptionId:varchar()
});


export const coursesTable=pgTable("courser",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid:varchar().notNull().unique(),
  name:varchar(),
  description:varchar(),
  noOfChapters:integer().notNull(),
  includeVideo:boolean().default(false),
  level:varchar().notNull(),
  category:varchar(),
  courseJson:json(),
  bannerImageUrl:varchar().default(''),
  courseContent:json().default({}),
  userEmail:varchar('userEmail').references(()=>usersTable.email).notNull()
})

export const enrollCourseTable=pgTable('enrollCourse',{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid:varchar('cid').references(()=>coursesTable.cid),
  userEmail: varchar('userEmail').references(()=>usersTable.email).notNull(),
  completedChapters: json()
})

// config/schema.js

// Quiz questions table
export const quizzesTable = pgTable("quizzes", {
  id: uuid("id").defaultRandom().primaryKey(),
  courseId: text("course_id").notNull(),
  contentText: text("content_text"),
  questions: jsonb("questions"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Quiz results table
export const quizResultsTable = pgTable("quiz_results", {
  id: uuid("id").defaultRandom().primaryKey(),
  quizId: uuid("quiz_id").notNull().references(() => quizzesTable.id),
  userId: text("user_id").notNull(),
  answers: jsonb("answers"),
  score: integer("score"),
  total: integer("total"),
  createdAt: timestamp("created_at").defaultNow(),
});

