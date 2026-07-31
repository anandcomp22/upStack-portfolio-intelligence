import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../store/authStore";
import type { LoginFormValues } from "../schemas/login.schema";

export function useLogin() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [isPending, setIsPending] = useState(false);

  const mutate = async (values: LoginFormValues) => {
    setIsPending(true);
    // Simulate network latency for natural UX
    await new Promise((res) => setTimeout(res, 600));

    const mockUser = {
      id: `usr_${Math.random().toString(36).substring(2, 9)}`,
      fullName: values.email.split("@")[0].replace(".", " "),
      email: values.email,
      role: "Portfolio Manager",
      riskProfile: "Growth Strategy",
    };

    login(mockUser, "jwt_mock_token_upstack");
    setIsPending(false);
    toast.success("Welcome back!", {
      description: `Signed in as ${values.email}`,
    });
    navigate("/");
  };

  return {
    mutate,
    isPending,
  };
}