import { LockKeyhole, Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../App";

export default function Login() {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        formData,
      );
      if (response.status === 200) {
        storeTokenInLS(response.data.token);
        setFormData({
          email: "",
          password: "",
        });
        navigate("/");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      if (error.response?.data?.errors) {
        const backendErrors = {};

        error.response.data.errors.forEach((err) => {
          backendErrors[err.path] = err.msg;
        });

        setErrors(backendErrors);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/WallBG.png')",
      }}
    >
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-[#071124]/95 backdrop-blur-md p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/20 border border-violet-500/30">
            <LockKeyhole className="h-10 w-10 text-violet-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-4 text-center text-4xl font-bold text-white">
          Log in
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Welcome back! Please log in to your account.
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-700 bg-[#0A1328] py-3 px-4 text-white outline-none focus:border-violet-500"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="w-full rounded-xl border border-slate-700 bg-[#0A1328] py-3 px-4 pr-12 text-white outline-none focus:border-violet-500"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 cursor-pointer hover:text-violet-400"
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(true)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 cursor-pointer hover:text-violet-400"
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white hover:opacity-90 transition"
          >
            Log in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-slate-400">
          Don't have an account?{" "}
          <span
            className="cursor-pointer text-violet-400 hover:text-violet-300"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
