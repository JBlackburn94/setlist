"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <main className="flex justify-center items-center flex-col h-screen gap-7 bg-slate-900 bg-opacity-70 text-white relative">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: "-100" }}
          transition={{ delay: 1.4, duration: 0.2 }}
          className="h-screen w-full flex justify-center items-center bg-black gap-2 relative"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 0 }}
            transition={{ delay: 0.8, duration: 0.2 }}
            className="w-auto overflow-hidden absolute"
          >
            <motion.p
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.2, type: "spring" }}
              className="text-xl font-black text-teal-400"
            >
              Beauty
            </motion.p>
            <motion.p
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, duration: 0.2 }}
              className="text-xl font-black"
            >
              School
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.2 }}
            className="h-auto flex flex-row gap-2 overflow-hidden absolute"
          >
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9, duration: 0.2 }}
              className="text-xl font-black text-teal-400"
            >
              Beauty
            </motion.p>
            <motion.p
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.1, duration: 0.2 }}
              className="text-xl font-black"
            >
              School
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.2 }}
          className="flex flex-col justify-center items-center gap-5 absolute"
        >
          <div className="flex flex-col h-auto overflow-hidden items-center gap-2">
            <motion.h1
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.8, duration: 0.2 }}
              className="font-black uppercase text-5xl md:text-6xl lg:text-7xl"
            >
              Beauty School
            </motion.h1>
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.8, duration: 0.2 }}
              className="text-md md:text-xl"
            >
              We are going on tour in October with JetSki.
              <br />
              Help us choose the setlist for our shows!
            </motion.p>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.2 }}
          >
            <Link
              className="bg-teal-400 hover:bg-teal-200 hover:scale-110 duration-100 transition-all ease-in-out px-5 py-2 text-xl rounded font-bold"
              href={"/setlist"}
            >
              Enter
            </Link>
          </motion.span>
        </motion.div>
      </main>
    </div>
  );
}
