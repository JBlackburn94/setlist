"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SetList from "../components/SetList";
import Link from "next/link";
import "./setlist.css";

export default function Setlist() {
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    } else router.push("/");
  }, []);

  return (
    <main>
      <section className="h-screen flex flex-col justify-center items-center bg-slate-900 bg-opacity-70">
        <h1 className="font-bold uppercase text-4xl text-white">
          Setlist by {name}
        </h1>
        <SetList />
        <Link className="text-white" href={"/home"}>
          Submit
        </Link>
      </section>
    </main>
  );
}
