"use client";

import { useAppContext } from "../../context/AppContext";

export default function HistoryPage() {
  const { assignments } = useAppContext();
  const completed = assignments.filter(a => a.completed);

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-6">Completed Assignments</h1>
      <ul>
        {completed.length === 0 && (
          <li className="text-gray-400">No assignments completed yet.</li>
        )}
        {completed.map((a) => (
          <li key={a.id} className="mb-2 border-b border-gray-700 pb-2">
            {a.name} ({a.course}) - {a.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
}