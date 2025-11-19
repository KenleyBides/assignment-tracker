"use client";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import AssignmentForm from "../../components/AssignmentForm";
import AssignmentItem from "../../components/AssignmentItem";

export default function AssignmentsPage() {
  const context = useContext(AppContext);
  if (!context) return <div>Loading...</div>;

  const { assignments, addAssignment, completeAssignment, deleteAssignment } = context;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Assignments</h1>

      {/* Form */}
      <AssignmentForm onAdd={addAssignment} />

      {/* List */}
      <ul>
        {assignments.map((a) => (
          <AssignmentItem
            key={a.id}
            assignment={a}
            onComplete={completeAssignment}
            onDelete={deleteAssignment}
          />
        ))}
      </ul>
    </div>
  );
}