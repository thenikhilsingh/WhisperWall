"use client";
import { ArrowRight, MessageCircle, Mail, Lock, User } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AuthType() {
  const params = useParams();
  const authType =
    typeof params.authType === "string" ? params.authType.toLowerCase() : "";

  const action =
    authType === "login" ? "login" : authType === "signup" ? "signup" : "error";

  return (
    <section className="relative w-full py-15 overflow-hidden bg-[#050814]">
      <div
        className="
          pointer-events-none
          absolute top-0 left-1/2 -translate-x-1/2
          h-105 w-175
          bg-cyan-500/20
          blur-[140px]
        "
      />
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-linear-to-b
          from-transparent
          via-[#050814]/60
          to-[#050814]
        "
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4 text-cyan-300">
          <div
            className="
              flex items-center justify-center
              h-16 w-16 rounded-full
              bg-white/5 backdrop-blur-md
              border border-cyan-400/20
              shadow-[0_0_30px_rgba(34,211,238,0.25)]
            "
          >
            <MessageCircle size={28} className="text-cyan-300" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-200">
          WhisperWall
        </h2>

        <p className="mt-3 text-sm text-slate-400">Same you. New whispers.</p>
        {/* login and signup form  */}
        <div className="flex justify-center mt-12">
          <div
            className="w-100
    group relative rounded-2xl px-8 py-9
    bg-[#6e6c6c21]
    border-2 border-cyan-400/15
    backdrop-blur-xl

    shadow-[0_18px_45px_-28px_rgba(34,211,238,0.4)]
    transition-all duration-300 ease-out
    transform-gpu

    hover:-translate-y-1
    hover:shadow-[0_28px_70px_-22px_rgba(34,211,238,0.65)]
    hover:border-cyan-400/35
    active:translate-y-px
    active:shadow-[0_14px_35px_-28px_rgba(34,211,238,0.4)]
  "
          >
            {/* extra glow on hover */}
            <div
              className="
        absolute inset-0 rounded-2xl
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-300
        bg-linear-to-b from-cyan-400/10 to-transparent
        pointer-events-none
      "
            />

            {/* Name  */}
            {action === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                {/* First Name  */}
                <div className="mb-5 relative z-10">
                  <label className="block mb-2 text-xs text-slate-300 text-left">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="John"
                      className="
              w-full h-11 pl-11 pr-4 rounded-xl
              bg-[#050814]/80
              text-slate-200 placeholder-slate-500
              border border-white/5
              shadow-inner
              focus:outline-none
              focus:border-cyan-400/50
              focus:ring-2 focus:ring-cyan-400/20
              transition
                        "
                    />
                  </div>
                </div>
                {/* Last Name  */}
                <div className="mb-5 relative z-10">
                  <label className="block mb-2 text-xs text-slate-300 text-left">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="
            w-full h-11 pl-4 pr-4 rounded-xl
            bg-[#050814]/80
            text-slate-200 placeholder-slate-500
            border border-white/5
            shadow-inner
            focus:outline-none
            focus:border-cyan-400/50
            focus:ring-2 focus:ring-cyan-400/20
            transition
          "
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="mb-5 relative z-10">
              <label className="block mb-2 text-xs text-slate-300 text-left">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
            w-full h-11 pl-11 pr-4 rounded-xl
            bg-[#050814]/80
            text-slate-200 placeholder-slate-500
            border border-white/5
            shadow-inner
            focus:outline-none
            focus:border-cyan-400/50
            focus:ring-2 focus:ring-cyan-400/20
            transition
          "
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-7 relative z-10">
              <label className="block mb-2 text-xs text-slate-300 text-left">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="
            w-full h-11 pl-11 pr-4 rounded-xl
            bg-[#050814]/80
            text-slate-200 placeholder-slate-500
            border border-white/5
            shadow-inner
            focus:outline-none
            focus:border-cyan-400/50
            focus:ring-2 focus:ring-cyan-400/20
            transition
          "
                />
              </div>
            </div>

            {/* Button */}
            <button
              className="
        relative z-10 w-full h-11 rounded-xl
        font-medium text-white
        bg-linear-to-r from-cyan-400 to-teal-400
        shadow-[0_10px_30px_-10px_rgba(34,211,238,0.7)]
        hover:brightness-110
        active:scale-[0.98]
        transition
      "
            >
              {action === "signup" ? "Create Account" : "Sign in"} →
            </button>

            {/* Footer */}
            <p className="mt-5 text-center text-xs text-slate-400 relative z-10">
              {action === "signup" ? "Already" : "Don’t"} have an account?{" "}
              <span className="text-cyan-400 hover:underline cursor-pointer">
                Sign {action === "signup" ? "in" : "up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
