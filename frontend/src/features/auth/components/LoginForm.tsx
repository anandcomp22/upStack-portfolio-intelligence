import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles, ArrowRight, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PasswordInput from "./PasswordInput";
import { useAuthStore } from "../store/authStore";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const loginMutation = useLogin();
  const demoLogin = useAuthStore((state) => state.demoLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "anand.more@upstack.ai",
      rememberMe: true,
    },
  });

  function onSubmit(values: LoginFormValues) {
    loginMutation.mutate(values);
  }

  return (
    <div className="space-y-6">
      {/* Quick Demo Sign-In Banner */}
      <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-3.5 text-xs text-indigo-300 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
          <span>Want to explore instantly without typing credentials?</span>
        </div>
        <button
          type="button"
          onClick={() => demoLogin()}
          className="shrink-0 rounded-lg bg-indigo-600 px-3 py-1.5 font-semibold text-white transition hover:bg-indigo-500 flex items-center gap-1 shadow-sm shadow-indigo-600/50"
        >
          Quick Demo <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
            Email Address
          </label>
          <div className="relative">
            <Input
              type="email"
              placeholder="name@company.com"
              className="bg-slate-900/80 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 pl-10 h-11 rounded-xl"
              {...register("email")}
            />
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          </div>
          {errors.email && (
            <p className="text-xs text-rose-400 mt-1 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
              Password
            </label>
            <a
              href="#forgot"
              onClick={(e) => {
                e.preventDefault();
                alert("Demo password reset instructions sent to your email!");
              }}
              className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <PasswordInput
              placeholder="••••••••"
              className="bg-slate-900/80 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 pl-10 h-11 rounded-xl"
              {...register("password")}
            />
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          </div>
          {errors.password && (
            <p className="text-xs text-rose-400 mt-1 font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500/30"
              {...register("rememberMe")}
            />
            <span>Remember this device for 30 days</span>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-11 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 mt-2"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Signing in to upStack...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Sign In to Portfolio Intelligence <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}