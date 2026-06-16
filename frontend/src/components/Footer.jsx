import { LockKeyhole } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Footer() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="bg-[#020817]  py-5 text-white">
      {/* CTA Section */}
      {!isLoggedIn && (
        <div className="bg-[#020817] px-24 py-5 text-white">
          <div className="max-w-7xl mx-auto rounded-3xl bg-linear-to-r from-[#17105A] to-[#0B1A4D] p-6 md:p-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Ready to join the community?
              </h3>
              <p className="mt-3 text-gray-300 text-sm sm:text-base">
                Create an account and become a member to see authors,
                <br />
                post your thoughts and connect with others.
              </p>
            </div>
            <button
              className="bg-violet-600 hover:bg-violet-500 w-full md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition"
              onClick={() => navigate("/signup")}
            >
              Sign up now
            </button>
          </div>
        </div>
      )}

      <div className="border-t border-slate-800 py-6 sm:py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <LockKeyhole className="text-violet-400 h-5 w-5" />
            <span className="text-lg sm:text-xl font-bold text-white">
              WhisperWall
            </span>
          </div>

          <div className="w-20 h-px bg-linear-to-r from-transparent via-violet-500 to-transparent" />

          <p className="text-slate-500 text-xs sm:text-sm tracking-wide text-center px-4">
            © 2026 WhisperWall • Every thought deserves a place.
          </p>
        </div>
      </div>
    </div>
  );
}
