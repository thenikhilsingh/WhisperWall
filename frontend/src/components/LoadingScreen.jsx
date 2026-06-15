export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-slate-800 bg-[#071124]/95 backdrop-blur-md p-10 shadow-2xl text-center">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-white">
            Whisper<span className="text-violet-500">Wall</span>
          </h1>

          <p className="mt-2 text-slate-400">Exclusive Members Club</p>

          {/* Spinner */}
          <div className="flex justify-center mt-10">
            <div className="relative">
              <div className="h-20 w-20 rounded-full border-4 border-violet-500/20"></div>

              <div className="absolute inset-0 h-20 w-20 rounded-full border-4 border-violet-500 border-t-transparent animate-spin"></div>
            </div>
          </div>

          {/* Text */}
          <h2 className="mt-8 text-2xl font-bold text-white">
            Waking up the server...
          </h2>

          <p className="mt-3 text-slate-400 leading-relaxed">
            Our backend is hosted on Render and may take a moment to start after
            inactivity.
          </p>

          <p className="mt-2 text-violet-400 text-sm">
            Usually takes 30–60 seconds.
          </p>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-violet-500 animate-bounce"></div>
            <div
              className="w-2 h-2 rounded-full bg-violet-500 animate-bounce"
              style={{ animationDelay: "0.15s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-violet-500 animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
