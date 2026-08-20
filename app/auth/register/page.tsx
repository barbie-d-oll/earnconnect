"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BriefcaseBusiness,
  Eye,
  EyeOff,
  UserRound,
} from "lucide-react";

type Role = "WORKER" | "EMPLOYER";

export default function RegisterPage() {
  const [role, setRole] = useState<Role>("WORKER");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to create your account.");
        return;
      }

      setSuccess("Account created successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 1200);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F2F5] px-6 py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center justify-center">
        <div className="w-full">

          {/* Logo */}
          <div className="mb-8 text-center">
            <Link href="/" className="text-3xl font-black">
              <span className="text-[#1877F2]">Earn</span>
              <span className="text-[#050505]">Connect</span>
            </Link>

            <h1 className="mt-8 text-3xl font-bold text-[#050505]">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-[#65676B]">
              Join EarnConnect and start connecting with opportunities.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Success */}
              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
                  {success}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#050505]"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#8A8D91] focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#050505]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#8A8D91] focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#050505]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-[#8A8D91] focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-[#65676B] transition hover:bg-[#F0F2F5] hover:text-[#1877F2]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-[#050505]"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-[#8A8D91] focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-[#65676B] transition hover:bg-[#F0F2F5] hover:text-[#1877F2]"
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Role */}
              <div>
                <p className="mb-3 text-sm font-semibold text-[#050505]">
                  I want to:
                </p>

                <div className="grid grid-cols-2 gap-3">

                  {/* Worker */}
                  <button
                    type="button"
                    onClick={() => setRole("WORKER")}
                    className={`rounded-xl border p-4 text-left transition ${
                      role === "WORKER"
                        ? "border-[#1877F2] bg-[#E7F3FF]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <UserRound
                      size={20}
                      className={
                        role === "WORKER"
                          ? "text-[#1877F2]"
                          : "text-[#65676B]"
                      }
                    />

                    <p className="mt-3 font-semibold text-[#050505]">
                      Worker
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#65676B]">
                      Find tasks and earn money.
                    </p>
                  </button>

                  {/* Employer */}
                  <button
                    type="button"
                    onClick={() => setRole("EMPLOYER")}
                    className={`rounded-xl border p-4 text-left transition ${
                      role === "EMPLOYER"
                        ? "border-[#1877F2] bg-[#E7F3FF]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <BriefcaseBusiness
                      size={20}
                      className={
                        role === "EMPLOYER"
                          ? "text-[#1877F2]"
                          : "text-[#65676B]"
                      }
                    />

                    <p className="mt-3 font-semibold text-[#050505]">
                      Employer
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#65676B]">
                      Post tasks and find workers.
                    </p>
                  </button>

                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#1877F2] px-4 py-3.5 font-semibold text-white transition hover:bg-[#166FE5] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-[#65676B]">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-[#1877F2] hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>

          {/* Back */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-[#65676B] hover:text-[#1877F2]"
            >
              ← Back to EarnConnect
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}