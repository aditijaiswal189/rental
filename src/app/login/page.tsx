"use client"

import React, { useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowLeft, Apple, Chrome } from "lucide-react"
import { db } from "../utility/supabase-client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useTheme } from "../contexts/theme-context"
import { useSession } from "../utility/use-session"

export default function LoginPage() {
  const {session, user, loading:sessionLoading} = useSession()
if (session ) {
return redirect("/rent")
}
  const router = useRouter()
  const { toggleTheme } = useTheme()

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
      router.push("/rent")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-secondary">
        <div className="absolute inset-0">
          <img
          src="/images/rent1.png"
            alt="Mountain landscape at sunset"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-secondary/40"></div>
        </div>
        <div className="relative w-full flex flex-col justify-between p-12 text-secondary-foreground">
          <div className="flex items-center justify-between">
          <div className="backdrop-blur-sm bg-black/30 px-4 py-2 rounded-lg inline-block">
            <button className="flex items-center space-x-2 text-sm hover:text-primary text-black dark:text-white transition-colors">
              <ArrowLeft size={20} />
              <span>Back to website</span>
            </button>
              </div>
              <div className="backdrop-blur-sm bg-black/30 px-4 py-2 rounded-lg inline-block">
            <button onClick={toggleTheme} className="text-sm text-black dark:text-white">Toggle Theme</button>
            </div>
          </div>
          <div className="space-y-6">
          <div className=" backdrop-blur-sm bg-black/30 px-4 py-2 rounded-lg inline-block space-y-3 text-black dark:text-white">
            <h2 className="text-4xl font-bold ">Welcome Back</h2>
            <p className="text-3xl font-bold">Login to continue</p>
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Welcome back</h2>
            <p className="mt-2 text-muted-foreground">
              Don't have an account?
              <a href="/signup" className="text-primary hover:underline ml-1">
                Sign up
              </a>
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, rememberMe: Boolean(checked) })
                    }
                  />
                  <label htmlFor="remember-me" className="text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <a href="/" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Logging In..." : "Sign in"}
            </Button>

            {error && <p className="text-sm text-destructive text-center">{error}</p>}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="w-full flex justify-center">
                <Chrome className="w-5 h-5 mr-2" /> Google
              </Button>
              <Button variant="outline" type="button" className="w-full flex justify-center">
                <Apple className="w-5 h-5 mr-2" /> Apple
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
