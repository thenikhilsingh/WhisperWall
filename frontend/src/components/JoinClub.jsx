import { LockKeyhole, Eye } from "lucide-react";

export default function JoinClub() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/WallBG.png')",
      }}
    >
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-[#071124]/95 backdrop-blur-md p-8 shadow-2xl">
        {/* Lock Icon */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/20 border border-violet-500/30">
            <LockKeyhole className="h-10 w-10 text-violet-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center text-4xl font-bold text-white">
          Join the Club
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Enter the secret passcode to gain
          <br />
          membership and see who wrote what.
        </p>

        {/* Input */}
        <div className="mt-8">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Secret Passcode
          </label>

          <div className="relative">
            <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />

            <input
              type="password"
              placeholder="Enter passcode"
              className="w-full rounded-xl border border-slate-700 bg-[#0A1328] py-3 pl-12 pr-12 text-white outline-none focus:border-violet-500"
            />

            <Eye className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 cursor-pointer" />
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded-xl bg-linear-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white transition hover:opacity-90">
          Join the Club
        </button>

        {/* Footer Text */}
        <div className="mt-8 text-center text-slate-400">
          <p>Don't have the passcode?</p>
          <p>Ask an existing member for access.</p>
        </div>
      </div>
    </div>
  );
}
