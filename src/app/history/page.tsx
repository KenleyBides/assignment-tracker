"use client";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function HistoryPage() {
  const context = useContext(AppContext);

  if (!context) return <div>Loading...</div>;

  const { assignments } = context;
  const completed = assignments.filter(a => a.completed);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Completed Assignments</h1>
      <ul>
        {completed.length === 0 && <li>No assignments completed yet</li>}
        {completed.map((a) => (
          <li key={a.id} className="mb-2 border-b pb-1">
            {a.name} ({a.course}) - {a.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
}
