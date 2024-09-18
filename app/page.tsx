"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("name");
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("name", name);
    setName(name);
    router.push("/setlist");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const form = event.currentTarget.form;
      if (form) {
        form.dispatchEvent(new Event("submit", { cancelable: true }));
      }
    }
  };
  return (
    <div>
      <main className="flex justify-center items-center flex-col h-screen gap-7 bg-slate-900 bg-opacity-70 text-white">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-black uppercase text-5xl md:text-6xl lg:text-7xl">
            Beauty School
          </h1>
          <p className="text-md md:text-xl">
            Choose our setlist for our tour in October w/JetSki
          </p>
        </div>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            className="border-2 border-black text-black rounded p-2"
            placeholder="Enter your name"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="bg-slate-900 text-white py-2 rounded hover:bg-slate-600 text-center">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
