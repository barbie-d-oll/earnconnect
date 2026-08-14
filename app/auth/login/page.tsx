"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type UserRole = "WORKER" | "EMPLOYER" | "ADMIN";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      const role: UserRole = data.user.role;

      if (role === "WORKER") {
        window.location.href = "/dashboard/worker";
      } else if (role === "EMPLOYER") {
        window.location.href = "/dashboard/employer";
      } else if (role === "ADMIN") {
        window.location.href = "/dashboard/admin";
      }
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
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-[#65676B]">
              Log in to continue to your EarnConnect account.
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {error}
                </div>
              )}

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
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#8A8D91] focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-[#050505]"
                  >
                    Password
                  </label>

                  <Link
                    href="/auth/forgot-password"
                    className="text-sm font-medium text-[#1877F2] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-[#8A8D91] focus:border-[#1877F2] focus:ring-2 focus:ring-[#1877F2]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
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

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#1877F2] px-4 py-3.5 font-semibold text-white transition hover:bg-[#166FE5] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* Register */}
            <p className="mt-6 text-center text-sm text-[#65676B]">
              Don&t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-[#1877F2] hover:underline"
              >
                Create an account
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