import { LockKeyhole, Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/WallBG.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#020817]/40"></div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="w-28 h-28 mx-auto rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-8">
          <LockKeyhole
            size={50}
            className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
          />
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">
          4<span className="text-purple-500">0</span>4
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          This door doesn't exist.
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Looks like you've wandered into a hidden corridor of WhisperWall. The
          page you're looking for is either locked away or was never here.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-purple-600 to-fuchsia-500 text-white font-semibold shadow-lg shadow-purple-500/25 hover:scale-105 transition"
          >
            <Home size={18} />
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-white hover:bg-slate-900 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-sm text-slate-500">
          WhisperWall • Anonymous Outside • Trusted Inside
        </p>
      </div>
    </div>
  );
}
