import { DB } from "@/app/libs/DB";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

//POST /api/user/login
export const POST = async (request) => {
  const body = await request.json();
  const { username, password } = body;

  const user = DB.users.find((user) => user.username === username && user.password === password);
  if (!user) {
    return NextResponse.json(
      {
        ok: false,
        message: "Username or password is incorrect",
      },
      { status: 400 }
    );
  }

  const payload = {
    username: user.username,
    role: user.role,
    studentId: user.studentId,
  };

  const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "8h" });

  return NextResponse.json({ ok: true, token });
};
