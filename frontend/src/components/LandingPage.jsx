import { LockKeyhole, UserRound, Users, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/MainBG.png')] bg-contain bg-[position:120%_40%] bg-no-repeat" />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#00030D] from-0% via-[#00030D] to-[#00030D]/10 to-60%" />

      {/* Content */}
      <div className="relative z-10 flex h-full text-white">
        <div className="pl-26 pt-15">
          <div className="flex items-center w-fit gap-2 bg-[#031B3A] border border-[#093064]  py-1 px-3 rounded-lg">
            <LockKeyhole size={20} color="white" />
            <div className="text-lg font-semibold text-cyan-200 uppercase">
              Exclusive Club
            </div>
          </div>
          <h1 className="text-6xl font-bold leading-tight text-white">
            A place for real
            <br />
            voices. <span className="text-violet-500">Yours.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-400 leading-relaxed">
            Share your thoughts anonymously. Inside the
            <br />
            club, members know who wrote what.
            <br />
            Outside, it's just words.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="px-8 py-4 rounded-xl bg-linear-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:scale-105 transition">
              Join the Club
            </button>

            <button className="px-8 py-4 rounded-xl border border-slate-800 bg-[#050B1A] text-white font-semibold hover:border-slate-700 transition">
              Log in
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-15">
            <div className="flex items-start gap-5 rounded-2xl p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/20">
                <UserRound className="h-6 w-6 text-violet-400" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Anonymous Outside
                </h3>
                <p className="mt-1 text-gray-400">
                  Your identity stays hidden
                  <br />
                  from non-members.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/20">
                <Users className="h-6 w-6 text-violet-400" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Trusted Community
                </h3>
                <p className="mt-1 text-gray-400">
                  Only members see the
                  <br />
                  authors and dates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/20">
                <ShieldCheck className="h-6 w-6 text-violet-400" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Safe & Secure
                </h3>
                <p className="mt-1 text-gray-400">
                  Built with privacy and
                  <br />
                  respect in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
