"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../components/lamp";
import { AudioLines, Feather, Heart, LogIn, Sparkles, Volume2 } from "lucide-react";
import RecentWhispers from "@/components/RecentWhispers";

export default function Home() {
  return (
    <div className="w-full">
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50 bg-[#00000069] rounded-4xl backdrop-blur-md">
  <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
    <div className="text-white font-bold text-xl">
      WhisperWall
    </div>

    <div className="flex gap-3">
      <button className="px-4 py-2 hover:bg-cyan-500 text-white rounded-4xl flex gap-1 items-center cursor-pointer">
        <LogIn size={18} /> Sign in
      </button>
      <button className="px-4 py-2 bg-cyan-500 text-white rounded-4xl cursor-pointer">
        Get Started
      </button>
    </div>
  </div>
</nav>


      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-linear-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        WhisperWall <br /> Let whispers live.
      </motion.h1>
     
<div className="flex flex-col items-center gap-6 mt-10">
  <div
    className="
      flex items-center gap-3
      px-6 py-3
      w-85 sm:w-105
      rounded-full
      bg-white/10 backdrop-blur-md
      border border-cyan-400/30
      shadow-[0_0_30px_rgba(34,211,238,0.25)]
      hover:shadow-[0_0_45px_rgba(34,211,238,0.4)]
      transition-all duration-300
    "
  >

    <Volume2 size={18} className="text-cyan-400" />


    <input
      type="text"
      placeholder="Where secrets find a voice"
      className="
        flex-1 bg-transparent outline-none
        text-slate-200 placeholder-slate-400
        text-sm
      "
      disabled
    />

  
    <AudioLines size={18} className="text-cyan-400" />

  </div>


  <div className="flex flex-wrap justify-center gap-3">
    <span className="px-4 py-2 rounded-full text-sm
      bg-white/5 backdrop-blur-md
      border border-cyan-400/20
      text-cyan-300
      shadow-[0_0_20px_rgba(34,211,238,0.15)]
      hover:bg-cyan-400/10
      transition-all flex items-center gap-1">
      <Feather size={14} /> Anonymous Posts
    </span>

    <span className="px-4 py-2 rounded-full text-sm
      bg-white/5 backdrop-blur-md
      border border-cyan-400/20
      text-cyan-300
      shadow-[0_0_20px_rgba(34,211,238,0.15)]
      hover:bg-cyan-400/10
      transition-all flex items-center gap-1">
   <Heart size={14} />
   Safe Space
    </span>

    <span className="px-4 py-2 rounded-full text-sm
      bg-white/5 backdrop-blur-md
      border border-cyan-400/20
      text-cyan-300
      shadow-[0_0_20px_rgba(34,211,238,0.15)]
      hover:bg-cyan-400/10
      transition-all flex items-center gap-1">
    <Sparkles size={14} />
  Members Only
    </span>
  </div>
</div>
    </LampContainer>
    <RecentWhispers/>
    </div>
  );
}
