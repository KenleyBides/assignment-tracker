"use client";

import { useAppContext } from "../../context/AppContext";

export default function HomePage() {
  const { user, assignments } = useAppContext();

  const pendingCount = assignments.filter(a => !a.completed).length;

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user.name || "Student"}!
      </h1>
      <p className="mb-2">Program: {user.program || "Not set"}</p>
      <p>
        You have {pendingCount} assignment{pendingCount === 1 ? "" : "s"} left
      </p>
    </div>
  );
}
