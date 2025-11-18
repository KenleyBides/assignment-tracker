"use client";

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function HomePage() {
  const context = useContext(AppContext);

  if (!context) return <div>Loading...</div>;

  const { user, assignments } = context;
  const pending = assignments.filter(a => !a.completed).length;

  return (
    <div>
      <h1>Welcome, {user.name || "Student"}!</h1>
      <p>Program: {user.program || "Not set"}</p>
      <p>You have {pending} assignments left</p>
    </div>
  );
}