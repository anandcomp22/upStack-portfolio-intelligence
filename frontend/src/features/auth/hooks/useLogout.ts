import { useNavigate } from "react-router-dom";

import { authStorage } from "../services/authStorage";
import { useAuthStore } from "../store/authStore";

export function useLogout() {
  const logout = useAuthStore((state) => state.logout);

  const navigate = useNavigate();

  return () => {
    authStorage.clear();

    logout();

    navigate("/login");
  };
}