import { DB } from "@/app/libs/DB";
import { zEnrollmentGetParam, zEnrollmentPostBody } from "@/app/libs/schema";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const studentId = request.nextUrl.searchParams.get("studentId");

  //validate input
  const parseResult = zEnrollmentGetParam.safeParse({
    studentId,
  });
  if (!parseResult.success) {
    return NextResponse.json(
      {
        ok: false,
        message: parseResult.error.issues[0].message,
      },
      { status: 400 }
    );
  }

  const courseNumberList = DB.enrollments.filter(enrollments => enrollments.studentId === studentId);
  if (courseNumberList.length === 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "This student has not enrolled any course",
      },
      { status: 200 }
    );
  }
  const courseTitleList = courseNumberList.map(courseNumber => {
    const course = DB.courses.find(course => course.courseNo === courseNumber.courseNo);
    if (course) return course;
    else return NextResponse.json({ ok: false, message: "Course No is not existed" }, { status: 500 })
  });

  return NextResponse.json({
    ok: true,
    courseNumberList,
    courseTitleList,
  });
};

export const POST = async (request) => {
  const body = await request.json();
  const parseResult = zEnrollmentPostBody.safeParse(body);
  if (parseResult.success === false) {
    return NextResponse.json(
      {
        ok: false,
        message: parseResult.error.issues[0].message,
      },
      { status: 400 }
    );
  }

  const { studentId, courseNo } = body;

  const student = DB.students.find((student) => student.studentId === studentId);
  const course = DB.courses.find((course) => course.courseNo === courseNo);
  if (!student || !course) {
    return NextResponse.json(
      {
        ok: false,
        message: "Student Id or Course No is not existed",
      },
      { status: 400 }
    );
  }
  if (DB.enrollments.find((enrollment) => enrollment.studentId === studentId && enrollment.courseNo === courseNo)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Student already enrolled that course",
      },
      { status: 400 }
    );
  }

  //save in db
  DB.enrollments.push({
    studentId,
    courseNo,
  });

  return NextResponse.json({
    ok: true,
    message: "Student has enrolled course",
  });
};
