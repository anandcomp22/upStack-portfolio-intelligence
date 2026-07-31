import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { authApi } from "../api/authApi";
import { authStorage } from "../services/authStorage";
import { useAuthStore } from "../store/authStore";

export function useLogin() {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: authApi.login,

    onSuccess: ({ data }) => {
      authStorage.setTokens(
        data.accessToken,
        data.refreshToken
      );

      login(data.user, data.accessToken);

      navigate("/");
    },
  });
}