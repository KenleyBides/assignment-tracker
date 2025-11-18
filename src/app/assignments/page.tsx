"use client";

import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Assignment } from "../../types";

export default function AssignmentsPage() {
  const context = useContext(AppContext);

  if (!context) return <div>Loading...</div>;

  const { assignments, addAssignment, completeAssignment, deleteAssignment } = context;
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    if (!name || !course || !dueDate) return;
    const newAssignment: Assignment = {
      id: Date.now(),
      name,
      course,
      dueDate,
      completed: false
    };
    addAssignment(newAssignment);
    setName("");
    setCourse("");
    setDueDate("");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Assignments</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Assignment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAdd} className="bg-navy text-white px-4 py-2">
          Add
        </button>
      </div>

      <ul>
        {assignments.map((a) => (
          <li key={a.id} className="mb-2 flex justify-between border-b pb-1">
            <span>
              {a.name} ({a.course}) - {a.dueDate}
            </span>
            {!a.completed && (
              <div className="flex gap-2">
                <button
                  onClick={() => completeAssignment(a.id)}
                  className="bg-green-600 text-white px-2"
                >
                  Complete
                </button>
                <button
                  onClick={() => deleteAssignment(a.id)}
                  className="bg-red-600 text-white px-2"
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