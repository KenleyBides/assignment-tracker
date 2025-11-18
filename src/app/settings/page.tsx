"use client";

import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

export default function SettingsPage() {
  const context = useContext(AppContext);

  if (!context) return <div>Loading...</div>;

  const { user, setUser } = context;
  const [name, setName] = useState(user.name);
  const [program, setProgram] = useState(user.program);

  useEffect(() => {
    setName(user.name);
    setProgram(user.program);
  }, [user]);

  const handleSave = () => {
    setUser({ name, program });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="flex flex-col gap-4 max-w-sm">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2"
        />
        <input
          type="text"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          placeholder="Program"
          className="border p-2"
        />
        <button onClick={handleSave} className="bg-navy text-white px-4 py-2">
          Save
        </button>
      </div>
    </div>
  );
}
