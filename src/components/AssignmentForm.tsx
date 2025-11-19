"use client";

import React, { useState } from "react";
import { Assignment } from "../types";

interface AssignmentFormProps {
  onAdd: (assignment: Assignment) => void;
}

export default function AssignmentForm({ onAdd }: AssignmentFormProps) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    if (!name || !course || !dueDate) return;
    onAdd({
      id: Date.now(),
      name,
      course,
      dueDate,
      completed: false,
    });
    setName("");
    setCourse("");
    setDueDate("");
  };

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Assignment Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="border p-2"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleAdd} className="bg-blue-900 text-white px-4 py-2">
        Add
      </button>
    </div>
  );
}