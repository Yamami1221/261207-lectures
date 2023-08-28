"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center mx-auto my-2">
      <p>This is just index an page</p>
      <Link className="btn btn-primary mx-auto" href="/todolist">Go to todolist page</Link>
      <br />
      <Link className="btn btn-primary mx-auto" href="/randomUser">Go to randomUser page</Link>
    </div>
  );
}
