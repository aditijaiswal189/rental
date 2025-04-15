"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
// import { db } from "../utility/supabase-client"
import React from "react"
import { Eye, EyeOff, ArrowLeft, Apple, Chrome } from "lucide-react"
import { useTheme } from "../contexts/theme-context"

export default function SignUpPage() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })
  const { theme, toggleTheme } = useTheme()
  console.log(theme, "theme")

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const { email, password, firstName } = formData

    // const { data, error } = await db.auth.signUp({
    //   email,
    //   password,
    // })

    if (error) {
      setError(error.message)
    } else {
      // Optional: insert into `profiles` table
      // await db.from("profiles").insert({
      //   id: data.user?.id,
      //   username: firstName,
      // })

      router.push("/rent") // redirect after signup
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-purple-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Mountain"
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
            <h2 className="text-4xl font-bold">Capturing Moments,</h2>
            <p className="text-4xl font-bold">Creating Memories</p>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Create an account
            </h2>
            <p className="mt-2 text-gray-600">
              Already have an account?
              <a
                href="/login"
                className="text-purple-500 hover:text-purple-600"
              >
                Log in
              </a>
              <button onClick={toggleTheme}>toggleTheme</button>
              <div>
                <p className="text-secondary">Hi Himanshu</p>
              </div>
            </p>
          </div>

          <form onSubmit={handleSignup} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-800 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-800 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>

              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-gray-300 bg-gray-300 text-purple-600 focus:ring-purple-500"
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeToTerms: e.target.checked,
                    })
                  }
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                  I agree to the{" "}
                  <a
                    href="/"
                    aria-disabled
                    className="text-purple-600 hover:text-purple-500"
                  >
                    Terms & Conditions
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              {loading ? "Creating Account..." : "Create account"}
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
                  Or register with
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
