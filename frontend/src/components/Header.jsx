import { LockKeyhole } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <div className="flex justify-around items-center inset-0 bg-[#00030D] text-white sticky z-50 p-4">
      <div className="flex items-center justify-center gap-1">
        <LockKeyhole
          size={50}
          className="text-violet-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
        />
        <div className="text-4xl font-semibold">
          Whisper<span className="text-violet-500">Wall</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 text-sm">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-slate-400">
          Share Secrets.{" "}
          <span className="text-violet-400">Stay Anonymous.</span>
        </span>
      </div>
      <div className="flex gap-2">
        {isLoggedIn ? (
          <>
            <button
              className="bg-[#040A17] border border-[#15213A]
  rounded-xl px-8 py-3 font-semibold text-white
  hover:border-[#243557] transition-all"
              onClick={() => navigate("/logout")}
            >
              Log out
            </button>
            <div
              className="bg-linear-to-r from-violet-600 to-purple-500
  shadow-[0_0_20px_rgba(139,92,246,0.35)]
  rounded-xl px-8 py-3 font-semibold text-white
   transition-all"
            >
              Hello, {user?.fullName}
            </div>
          </>
        ) : (
          <>
            <button
              className="bg-[#040A17] border border-[#15213A]
  rounded-xl px-8 py-3 font-semibold text-white
  hover:border-[#243557] transition-all"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
            <button
              className="bg-linear-to-r from-violet-600 to-purple-500
  shadow-[0_0_20px_rgba(139,92,246,0.35)]
  rounded-xl px-8 py-3 font-semibold text-white
  hover:scale-105 transition-all"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </div>
  );
}
