"use client";

import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";

interface Quote {
  content: string;
  author: string;
}

export default function HomePage() {
  const { user, assignments } = useAppContext();
  const [quote, setQuote] = useState<Quote>({ content: "", author: "" });

  const pendingCount = assignments.filter((a) => !a.completed).length;

  useEffect(() => {
    fetch("/api/quote")
      .then((res) => res.json())
      .then((data) => {
        setQuote({ content: data.content, author: data.author });
      })
      .catch((err) => {
        console.error("Error fetching quote:", err);
        setQuote({
          content: "Keep going — you're doing great.",
          author: "Motivator",
        });
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 text-center gap-6">
      <h1 className="text-4xl font-bold">
        Welcome, {user.name || "Student"}!
      </h1>
      <p className="text-2xl">Program: {user.program || "Not set"}</p>
      <p className="text-2xl">
        You have {pendingCount} assignment{pendingCount === 1 ? "" : "s"} left
      </p>

      {quote.content && (
        <div className="mt-10 max-w-xl">
          <p className="text-xl italic mb-2">"{quote.content}"</p>
          <p className="text-lg font-semibold">- {quote.author}</p>
        </div>
      )}
    </div>
  );
}