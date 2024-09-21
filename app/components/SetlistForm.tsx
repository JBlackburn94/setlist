import Image from "next/image";
import paper from "../../public/paper.png";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface SetlistFormProps {
  songs: string[];
  onSubmit: (data: { name: string; selectedSongs: string[] }) => void;
}

const SetlistForm: React.FC<SetlistFormProps> = ({ songs, onSubmit }) => {
  const [name, setName] = useState("");
  const [selectedSongs, setSelectedSongs] = useState<string[]>(
    Array(8).fill("")
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const uniqueSongs = new Set(selectedSongs);
    if (uniqueSongs.size !== selectedSongs.length) {
      alert("Please select different songs for each slot.");
      return;
    }
    onSubmit({ name, selectedSongs });
  };

  const handleSongSelect = (index: number, selectedSong: string) => {
    const newSelections = [...selectedSongs];
    newSelections[index] = selectedSong;
    setSelectedSongs(newSelections);
  };

  return (
    <form
      className="flex flex-col justify-center items-center text-white w-[80%] p-5 bg-slate-900 bg-opacity-40 backdrop-blur-sm rounded"
      onSubmit={handleSubmit}
    >
      <div>
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 * selectedSongs.length }}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border-2 border-teal-400  mb-10 text-black"
          required
        />
      </div>
      {selectedSongs.map((_, index) => (
        <div key={index} className="flex gap-2 my-3 h-auto overflow-hidden">
          <label>{index + 1}. </label>
          <motion.select
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 * index }}
            value={selectedSongs[index]}
            onChange={(e) => handleSongSelect(index, e.target.value)}
            className="border-b-2 border-b-white appearance-none bg-transparent"
            required
          >
            <option value="">-- Select a Song --</option>
            {songs.map((song) => (
              <option key={song} value={song}>
                {song}
              </option>
            ))}
          </motion.select>
        </div>
      ))}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 * selectedSongs.length }}
        type="submit"
        className="mt-10 bg-teal-400 text-white px-5 py-2 rounded"
      >
        Submit
      </motion.button>
    </form>
  );
};

export default SetlistForm;
