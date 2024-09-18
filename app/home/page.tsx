"use client";
import { useState } from "react";

export default function Home() {
  const [submittedData, setSubmittedData] = useState<any[]>([]);

  return (
    <section className="bg-slate-900 bg-opacity-70 h-screen text-white flex flex-col justify-center items-center">
      Home
    </section>
  );
}
