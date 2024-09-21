"use client";

import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import SetlistForm from "../components/SetlistForm";

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
    <section className="h-screen bg-slate-900 bg-opacity-70 flex justify-center items-center">
      <SetlistForm songs={songs} onSubmit={handleSubmit} />
    </section>
  );
};

export default HomePage;
