import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "../store/authStore";
import type { RegisterFormValues } from "../schemas/register.schema";

export function useRegister() {
  const navigate = useNavigate();
  const registerUser = useAuthStore((state) => state.registerUser);
  const [isPending, setIsPending] = useState(false);

  const mutate = async (values: RegisterFormValues) => {
    setIsPending(true);
    await new Promise((res) => setTimeout(res, 750));

    const newUser = {
      id: `usr_${Math.random().toString(36).substring(2, 9)}`,
      fullName: values.fullName,
      email: values.email,
      role: "Investor",
      riskProfile: values.riskProfile,
    };

    registerUser(newUser, "jwt_mock_token_registered");
    setIsPending(false);
    toast.success("Account created successfully!", {
      description: "Welcome to upStack Portfolio Intelligence.",
    });
    navigate("/");
  };

  return {
    mutate,
    isPending,
  };
}
