import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://zenquotes.io/api/random", { cache: "no-store" });
    const data = await res.json();
    
    const quoteObj = Array.isArray(data) ? data[0] : data;
    return NextResponse.json({
      content: quoteObj.q,
      author: quoteObj.a,
    });
  } catch (err) {
    return NextResponse.json({
      content: "Keep working — you're doing great.",
      author: "Motivator",
    });
  }
}