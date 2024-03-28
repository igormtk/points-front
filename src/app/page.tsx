"use client";
import { CardWithForm } from "@/components/CardWithForm";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row space-x-8">
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5 }}
        >
          <CardWithForm title="Bingo" description="Can you complete the Bingo card?" placeholderSelect="Region" linkTo="/bingo"/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1 }}
        >
          <CardWithForm title="Guess the skin" description="Can you guess the hidden skin?" placeholderSelect="Level" linkTo="/guess-skin"/>
        </motion.div>
      </div>
    </main>
  );
}
