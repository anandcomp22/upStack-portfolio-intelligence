import { api } from "@/config/axios";

import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "../types/auth.types";

export const authApi = {
  login(data: LoginRequest) {
    return api.post<AuthResponse>(
      "/auth/login",
      data
    );
  },

  register(data: RegisterRequest) {
    return api.post<AuthResponse>(
      "/auth/register",
      data
    );
  },
};