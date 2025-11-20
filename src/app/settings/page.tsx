"use client";

import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const { user, updateUser } = useAppContext();
  const router = useRouter();

  const [name, setName] = useState(user.name);
  const [program, setProgram] = useState(user.program);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateUser({ name, program });
    setSaved(true);
    setTimeout(() => {
      router.push("/home"); // redirection
    }, 1000);
  };

  return (
    <div className="p-6 max-w-lg mx-auto min-h-screen bg-black text-white flex flex-col justify-center">
      <h1 className="text-2xl font-semibold mb-6 text-center">Settings</h1>

      <div className="flex flex-col gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            className="w-full border border-gray-600 bg-black text-white rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        {/* Program */}
        <div>
          <label className="block text-sm font-medium mb-1">Program</label>
          <input
            className="w-full border border-gray-600 bg-black text-white rounded px-3 py-2"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            placeholder="Enter program"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="mt-4 bg-white text-black py-2 rounded hover:opacity-90 transition"
        >
          Save
        </button>

        {/* Saved message */}
        {saved && (
          <p className="mt-2 text-green-400 font-medium text-center">
            Saved!
          </p>
        )}
      </div>
    </div>
  );
}
