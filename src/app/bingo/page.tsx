"use client";
import BingoCard from "@/components/BingoCard";
import BingoHeader from "@/components/BingoHeader";
import { teams } from "@/data/teamsMock";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5 }}
        >
      <BingoHeader />
      <BingoCard items={teams} />
      </motion.div>
    </main>
  );
}
