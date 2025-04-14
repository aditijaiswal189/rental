"use client"
// /hooks/useSupabaseSession.ts
import { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { db } from './supabase-client'

export const useSession = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await db.auth.getSession()

      setSession(session)
      setLoading(false)
    }

    getSession()

    const {
        // user in another tab or someone they are logging in from another device 
      data: { subscription },
    } = db.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { session, user: session?.user, loading }
}
