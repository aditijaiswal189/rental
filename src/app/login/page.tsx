"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowLeft, Apple, Chrome } from "lucide-react"
import { db } from "../utility/supabase-client"

export default function LoginPage() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const { email, password } = formData

    const { error } = await db.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      router.push("/favourites")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-purple-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Mountain landscape at sunset"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-purple-900/40"></div>
        </div>
        <div className="relative w-full flex flex-col justify-between p-12 text-white">
          <div>
            <button className="flex items-center space-x-2 text-sm hover:text-purple-200 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to website</span>
            </button>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Welcome Back</h2>
            <p className="text-4xl font-bold">Continue Your Journey</p>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-900">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Welcome back</h2>
            <p className="mt-2 text-gray-400">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-purple-500 hover:text-purple-400"
              >
                Sign up
              </a>
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-purple-500 focus:ring-purple-500"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rememberMe: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-400"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/"
                  aria-disabled
                  className="text-sm text-purple-500 hover:text-purple-400"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {loading ? "Logging In..." : "Sign in"}
            </button>

            {error && (
              <p className="text-sm text-red-400 text-center">{error}</p>
            )}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg text-gray-400 hover:border-gray-500 hover:text-gray-300"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg text-gray-400 hover:border-gray-500 hover:text-gray-300"
              >
                <Apple className="w-5 h-5 mr-2" />
                Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
