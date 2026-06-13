import { LockKeyhole, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Password do not match!");
      return;
    }
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/register`,
        payload,
      );
      if (response.status === 201) {
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/WallBG.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-slate-800 bg-[#071124]/95 backdrop-blur-md p-8 shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/20 border border-violet-500/30">
            <LockKeyhole className="h-10 w-10 text-violet-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-3 text-center text-4xl font-bold text-white">
          Sign Up
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Create your account and become a member
        </p>

        {/* Form */}
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-[#0A1328] py-3 px-4 text-white outline-none focus:border-violet-500"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-[#0A1328] py-3 px-4 text-white outline-none focus:border-violet-500"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-2">
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-[#0A1328] py-3 px-4 pr-12 text-white outline-none focus:border-violet-500"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-700 bg-[#0A1328] py-3 px-4 pr-12 text-white outline-none focus:border-violet-500"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" className="accent-violet-500" />I agree to
            the Terms & Conditions
          </label>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400">
          Already have an account?
          <button
            onClick={() => navigate("/login")}
            className="ml-2 text-violet-400 hover:text-violet-300"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
