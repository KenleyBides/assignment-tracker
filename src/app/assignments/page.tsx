"use client";

import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import { Assignment } from "../../types";

export default function AssignmentsPage() {
  const { assignments, addAssignment, completeAssignment, deleteAssignment } = useAppContext();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    if (!name || !course || !dueDate) return;

    const newAssignment: Assignment = {
      id: Date.now(), // unique ID
      name,
      course,
      dueDate,
      completed: false,
    };

    addAssignment(newAssignment);
    setName("");
    setCourse("");
    setDueDate("");
  };

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-6">Assignments</h1>

      {/* Add Assignment Form */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <input
          type="text"
          placeholder="Assignment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-600 bg-black text-white rounded px-3 py-2 sm:w-1/4"
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border border-gray-600 bg-black text-white rounded px-3 py-2 sm:w-1/4"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border border-gray-600 bg-black text-white rounded px-3 py-2 sm:w-1/4"
        />
        <button
          onClick={handleAdd}
          className="bg-white text-black py-2 px-4 rounded hover:opacity-90 transition w-full sm:w-auto"
        >
          Add
        </button>
      </div>

      {/* Assignments List */}
      <ul>
        {assignments.length === 0 && <li className="text-gray-400">No assignments yet.</li>}
        {assignments.map((a) => (
          <li
            key={a.id}
            className={`mb-2 flex justify-between items-center border-b border-gray-700 pb-2 ${
              a.completed ? "opacity-60 line-through" : ""
            }`}
          >
            <span>
              {a.name} ({a.course}) - {a.dueDate}
            </span>
            {!a.completed && (
              <div className="flex gap-2">
                <button
                  onClick={() => completeAssignment(a.id)}
                  className="bg-green-600 text-white px-2 py-1 rounded hover:opacity-90 transition"
                >
                  Complete
                </button>
                <button
                  onClick={() => deleteAssignment(a.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:opacity-90 transition"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
