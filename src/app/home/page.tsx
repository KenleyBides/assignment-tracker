"use client";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function HomePage() {
  const context = useContext(AppContext);

  if (!context) return <div>Loading...</div>;

  const { user, assignments } = context;
  const pendingCount = assignments.filter(a => !a.completed).length;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name || "Student"}!</h1>
      <p className="mb-2">Program: {user.program || "Not set"}</p>
      <p>You have {pendingCount} assignments left</p>
    </div>
  );
}