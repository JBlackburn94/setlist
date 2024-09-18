"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";

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
    <div className="max-w-xl mx-auto py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Song Votes</h1>
      <ul className="list-disc pl-6">
        {Object.keys(votes).map((song) => (
          <li key={song}>
            {song}: {votes[song]} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsPage;
