"use client";

import React from "react";
import { Assignment } from "../types";

interface AssignmentItemProps {
  assignment: Assignment;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function AssignmentItem({ assignment, onComplete, onDelete }: AssignmentItemProps) {
  return (
    <li className="mb-2 flex justify-between border-b pb-1">
      <span>
        {assignment.name} ({assignment.course}) - {assignment.dueDate}
      </span>
      {!assignment.completed && (
        <div className="flex gap-2">
          <button
            onClick={() => onComplete(assignment.id)}
            className="bg-green-600 text-white px-2"
          >
            Complete
          </button>
          <button
            onClick={() => onDelete(assignment.id)}
            className="bg-red-600 text-white px-2"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}