"use client";

import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import SetlistForm from "../components/SetlistForm";
import { motion } from "framer-motion";

interface SetlistData {
  name: string;
  selectedSongs: string[];
}

const HomePage = () => {
  const router = useRouter();

  const songs = [
    "Cowboy Milk",
    "Reaper",
    "Gloom",
    "Take It Slow",
    "Silver",
    "Oak",
    "Pawn Shop Jewels",
    "Only Nature",
    "Ekimae",
    "Monster",
    "Drysocket",
    "Evergreen",
    "Happiness",
    "Nightwalker",
    "Junior",
  ];

  const handleSubmit = async (formData: SetlistData) => {
    try {
      await addDoc(collection(db, "setlists"), formData);
      router.push("/results");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section className="h-screen bg-slate-900 bg-opacity-70 flex justify-center items-center relative">
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
      <SetlistForm songs={songs} onSubmit={handleSubmit} />
    </section>
  );
};

export default HomePage;
