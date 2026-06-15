import { ShieldCheck, Eye, EyeOff } from "lucide-react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BecomeAnAdmin() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { user, token } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/admin/become-an-admin/${user._id}`,
        {
          userEnteredPassword: adminCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status == 200) {
        setAdminCode("");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/WallBG.png')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-slate-800 bg-[#071124]/95 backdrop-blur-md p-8 shadow-2xl"
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/20 border border-violet-500/30">
            <ShieldCheck className="h-10 w-10 text-violet-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center text-4xl font-bold text-white">
          Become Admin
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Enter the secret administrator passcode
          <br />
          to unlock admin privileges.
        </p>

        {/* Input */}
        <div className="mt-8">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Admin Passcode
          </label>

          <div className="relative">
            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter admin passcode"
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-[#0A1328] py-3 pl-12 pr-12 text-white outline-none focus:border-violet-500"
            />

            {showPassword ? (
              <EyeOff
                onClick={() => setShowPassword(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 cursor-pointer"
              />
            ) : (
              <Eye
                onClick={() => setShowPassword(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 cursor-pointer"
              />
            )}
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-linear-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Unlock Admin Access
        </button>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400">
          <p>Restricted Area</p>
          <p>Only authorized members can become administrators.</p>
        </div>
      </form>
    </div>
  );
}
