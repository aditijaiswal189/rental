'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { db } from "../utility/supabase-client"
import { Eye, EyeOff, ArrowLeft, Apple, Chrome } from "lucide-react"
import { useTheme } from "../contexts/theme-context"
import { Button } from "@/components/ui/button"

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

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const { email, password, firstName } = formData

    const { data, error } = await db.auth.signUp({ email, password })

    if (error) {
      setError(error.message)
    } else {
      await db.from("profiles").insert({
        id: data.user?.id,
        username: firstName,
      })
      router.push("/rent")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-secondary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Mountain"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-secondary/40"></div>
        </div>
        <div className="relative w-full flex flex-col justify-between p-12 text-secondary-foreground">
          <div>
            <Button className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
              <ArrowLeft size={20} />
              <span>Back to website</span>
            </Button>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Capturing Moments,</h2>
            <span className="text-4xl font-bold">Creating Memories</span>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Full Width Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Create an account</h2>
            <p className="mt-2 text-muted-foreground">
              Already have an account?
              <a href="/login" className="text-secondary hover:underline ml-1">
                Log in
              </a>
            </p>
          </div>

          <form onSubmit={handleSignup} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </Button>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-border bg-input text-primary focus:ring-ring"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-muted-foreground">
                  I agree to the{" "}
                  <a href="/" className="text-secondary hover:underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {loading ? "Creating Account..." : "Create account"}
            </Button>

            {error && <p className="text-sm text-destructive text-center">{error}</p>}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">
                  Or register with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-border rounded-lg text-muted-foreground hover:border-muted hover:text-foreground"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button
                type="button"
                className="flex items-center justify-center px-4 py-3 border border-border rounded-lg text-muted-foreground hover:border-muted hover:text-foreground"
              >
                <Apple className="w-5 h-5 mr-2" />
                Apple
              </Button>
            </div>

            <div className="relative flex justify-center text-sm">
              <Button onClick={toggleTheme} type="button" className="text-sm mt-2 underline">
                Toggle Theme
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
