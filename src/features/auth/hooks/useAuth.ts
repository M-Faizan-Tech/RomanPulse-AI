import { useEffect, useState } from "react";
import type { User, Session } from "@supabase/supabase-js";

import {
  getCurrentUser,
  logout,
} from "../services/authService";

import { supabase } from "@/lib/supabase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] =
    useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);

      const currentUser = await getCurrentUser();

      setUser(currentUser);

      setLoading(false);
    };

    getSession();

    const {
      data: { subscription },
    } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
        }
      );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await logout();

    setUser(null);
    setSession(null);
  };

  return {
    user,
    session,
    loading,
    signOut,
  };
}