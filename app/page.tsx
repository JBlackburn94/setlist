"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center items-center flex-col h-screen gap-7 bg-slate-900 bg-opacity-70 text-white">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-black uppercase text-5xl md:text-6xl lg:text-7xl">
            Beauty School
          </h1>
          <p className="text-md md:text-xl">
            We are going on tour in October with JetSki.
            <br />
            Help us choose the setlist for our shows!
          </p>
        </div>
        <Link
          className="bg-slate-900 hover:bg-slate-600 hover:scale-110 duration-100 transition-all ease-in-out px-5 py-2 text-xl rounded font-bold"
          href={"/setlist"}
        >
          Enter
        </Link>
      </main>
    </div>
  );
}
