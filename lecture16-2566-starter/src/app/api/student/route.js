import { DB } from "@/app/libs/DB"
import { zStudentPostBody, zStudentPutBody } from "@/app/libs/schema";
import { NextResponse } from "next/server"

export const GET = async (req) => {
  const program = req.nextUrl.searchParams.get("program");
  const students = DB.students;

  if (program) {
    return NextResponse.json(students.filter((student) => student.program === program));
  }

  return NextResponse.json(students);
}

export const POST = async (req) => {
  const body = await req.json();

  const parseResult = zStudentPostBody.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(parseResult.error, { status: 400 });
  }

  if (DB.students.find((student) => student.studentId === parseResult.data.studentId)) {
    return NextResponse.json({ message: "Student already exists" }, { status: 409 });
  }
  
  DB.students.push(parseResult.data);

  return NextResponse.json(parseResult.data, { status: 201 });
}

export const PUT = async (req) => {
  const body = await req.json();

  const parseResult = zStudentPutBody.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(parseResult.error, { status: 400 });
  }

  const student = DB.students.find((student) => student.studentId === parseResult.data.studentId);
  if (!student) {
    return NextResponse.json({ message: "Student not found" }, { status: 404 });
  }

  Object.assign(student, parseResult.data);

  return NextResponse.json(parseResult.data);
}