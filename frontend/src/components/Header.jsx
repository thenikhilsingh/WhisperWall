import { LockKeyhole } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <header className="sticky top-0 z-50 bg-[#00030D] text-white border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <LockKeyhole
            size={50}
            className="text-violet-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] sm:w-10 sm:h-10"
          />
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Whisper<span className="text-violet-500">Wall</span>
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-slate-400">
            Share Secrets.{" "}
            <span className="text-violet-400">Stay Anonymous.</span>
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
          {isLoggedIn ? (
            <>
              <button
                className="bg-[#040A17] border border-[#15213A]  rounded-xl px-8 py-3 font-semibold text-white hover:border-[#243557] transition-all"
                onClick={() => navigate("/logout")}
              >
                Log out
              </button>
              <div className="bg-linear-to-r from-violet-600 to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] rounded-lg sm:rounded-xl px-3 sm:px-5 lg:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold max-w-45 sm:max-w-62.5 truncate">
                Hello, {user?.fullName}
              </div>
            </>
          ) : (
            <>
              <button
                className="bg-[#040A17] border border-[#15213A] rounded-lg sm:rounded-xl px-3 sm:px-5 lg:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold hover:border-[#243557] transition-all"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button
                className="bg-linear-to-r from-violet-600 to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] rounded-lg sm:rounded-xl px-3 sm:px-5 lg:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold hover:scale-105 transition-all"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
