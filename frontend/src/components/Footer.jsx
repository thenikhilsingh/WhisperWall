import { LockKeyhole } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Footer() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="bg-[#020817] text-white">
      {/* CTA Section */}
      {!isLoggedIn && (
        <div className="bg-[#020817] px-24 py-5 text-white">
          <div className="rounded-3xl bg-linear-to-r from-[#17105A] to-[#0B1A4D] p-10 flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold">
                Ready to join the community?
              </h3>
              <p className="mt-3 text-gray-300">
                Create an account and become a member to see authors,
                <br />
                post your thoughts and connect with others.
              </p>
            </div>
            <button
              className="bg-violet-600 hover:bg-violet-500 px-8 py-4 rounded-xl font-semibold transition"
              onClick={() => navigate("/signup")}
            >
              Sign up now
            </button>
          </div>
        </div>
      )}

      <div className="border-t border-slate-800 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <LockKeyhole className="text-violet-400 h-5 w-5" />
            <span className="text-xl font-bold text-white">WhisperWall</span>
          </div>

          <div className="w-20 h-px bg-linear-to-r from-transparent via-violet-500 to-transparent" />

          <p className="text-slate-500 text-sm tracking-wide">
            © 2026 WhisperWall • Every thought deserves a place.
          </p>
        </div>
      </div>
    </div>
  );
}
