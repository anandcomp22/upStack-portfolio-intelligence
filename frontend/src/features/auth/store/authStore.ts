import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  riskProfile?: string;
  avatarUrl?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  login: (user: User, token: string) => void;
  registerUser: (user: User, token: string) => void;
  demoLogin: () => void;
  logout: () => void;
}

const DEFAULT_DEMO_USER: User = {
  id: "usr_demo_8829",
  fullName: "Anand More",
  email: "anand.more@upstack.ai",
  role: "Senior Investor",
  riskProfile: "Growth & Multi-Agent AI Strategy",
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: DEFAULT_DEMO_USER, // Default logged in to demo account for instant evaluation
      token: "demo-jwt-token-upstack-2026",
      isAuthenticated: true,

      login: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),

      registerUser: (user, token) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),

      demoLogin: () =>
        set({
          user: DEFAULT_DEMO_USER,
          token: "demo-jwt-token-upstack-2026",
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "upstack-auth-v2",
    }
  )
);