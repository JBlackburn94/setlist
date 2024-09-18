"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import Link from "next/link";
import { motion } from "framer-motion";

const ResultsPage = () => {
  const [votes, setVotes] = useState<Record<string, number>>({});

  useEffect(() => {
    const q = query(collection(db, "setlists"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newVotes: Record<string, number> = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        // Ensure data.selectedSongs is an array before processing
        if (Array.isArray(data.selectedSongs)) {
          data.selectedSongs.forEach((song: string) => {
            if (newVotes[song]) {
              newVotes[song]++;
            } else {
              newVotes[song] = 1;
            }
          });
        }
      });

      setVotes(newVotes);
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-slate-900 bg-opacity-70">
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: "-200%" }}
        transition={{ duration: 0.4 }}
        className="h-screen w-full absolute bg-slate-900 z-40"
      ></motion.span>
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: "-200%" }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="h-screen w-full absolute bg-slate-600 z-30"
      ></motion.span>
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: "-200%" }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="h-screen w-full absolute bg-slate-900 z-20"
      ></motion.span>
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: "-200%" }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="h-screen w-full absolute bg-slate-600 z-10"
      ></motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col justify-center items-center gap-10 w-full"
      >
        <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-white">
          Thank you for submitting your setlist!
        </h1>
        <div className="flex flex-col w-[90%] md:w-1/2 p-5 bg-slate-900 bg-opacity-20 backdrop-blur-md text-white rounded-xl shadow-lg shadow-black">
          <h2 className="text-3xl font-bold mb-6">Song Votes</h2>
          <ul className="list-disc pl-6">
            {Object.keys(votes).map((song) => (
              <li key={song}>
                {song}: {votes[song]} votes
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="https://www.songkick.com/artists/1084890-beauty-school"
          target="_blank"
          className="bg-teal-400 text-white px-5 py-2 rounded text-xl font-bold"
        >
          Buy Tickets!
        </Link>
      </motion.div>
    </section>
  );
};

export default ResultsPage;
