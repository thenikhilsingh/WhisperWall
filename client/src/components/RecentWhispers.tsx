import { Feather, MessageCircle } from "lucide-react";

export default function RecentWhispers() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#050814]">

    
      <div
        className="
          pointer-events-none
          absolute top-0 left-1/2 -translate-x-1/2
          h-105 w-175
          bg-cyan-500/20
          blur-[140px]
        "
      />

     
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-linear-to-b
          from-transparent
          via-[#050814]/60
          to-[#050814]
        "
      />

    
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

       
        <div className="flex items-center justify-center gap-3 mb-4 text-cyan-300">
          <span className="h-px w-10 bg-cyan-400/40" />
          <Feather size={16} />
          <span className="h-px w-10 bg-cyan-400/40" />
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-200">
          Recent Whispers
        </h2>

        <p className="mt-3 text-sm text-slate-400">
          Join to reveal the voices behind the whispers
        </p>

      
        <div className="mt-20 flex flex-col items-center gap-4 text-slate-400">
          
          <div
            className="
              flex items-center justify-center
              h-16 w-16 rounded-full
              bg-white/5 backdrop-blur-md
              border border-cyan-400/20
              shadow-[0_0_30px_rgba(34,211,238,0.25)]
            "
          >
            <MessageCircle size={28} className="text-cyan-300" />
          </div>

          <p className="text-sm">
            No whispers yet. Be the first to share.
          </p>
        </div>

      </div>
    </section>
  );
}
