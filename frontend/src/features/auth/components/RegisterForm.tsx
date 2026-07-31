import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShieldCheck, User, Mail, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PasswordInput from "./PasswordInput";
import { registerSchema, type RegisterFormValues } from "../schemas/register.schema";
import { useRegister } from "../hooks/useRegister";

const RISK_PROFILES = [
  { id: "Conservative 🛡️", label: "Conservative", desc: "Capital Preservation & Low Volatility" },
  { id: "Balanced ⚖️", label: "Balanced", desc: "Steady Growth & Moderate Risk" },
  { id: "Growth 🚀", label: "Growth & AI", desc: "High Return Potential & Tech Focus" },
  { id: "Aggressive ⚡", label: "Aggressive", desc: "Max Return & High Alpha" },
];

export default function RegisterForm() {
  const registerMutation = useRegister();
  const [selectedRisk, setSelectedRisk] = useState("Growth 🚀");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      riskProfile: "Growth 🚀",
      acceptTerms: true,
    },
  });

  const watchPassword = watch("password", "");

  // Simple strength meter logic
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, label: "Enter Password", color: "bg-slate-700" };
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    if (score <= 1) return { score: 25, label: "Weak", color: "bg-rose-500" };
    if (score === 2) return { score: 50, label: "Fair", color: "bg-amber-500" };
    if (score === 3) return { score: 75, label: "Good", color: "bg-blue-500" };
    return { score: 100, label: "Strong", color: "bg-emerald-500" };
  };

  const pwdStrength = getPasswordStrength(watchPassword);

  function onSubmit(values: RegisterFormValues) {
    registerMutation.mutate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Full Name */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
          Full Name
        </label>
        <div className="relative">
          <Input
            placeholder="Anand More"
            className="bg-slate-900/80 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 pl-10 h-10 rounded-xl text-sm"
            {...register("fullName")}
          />
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
        </div>
        {errors.fullName && (
          <p className="text-xs text-rose-400 font-medium">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
          Email Address
        </label>
        <div className="relative">
          <Input
            type="email"
            placeholder="investor@domain.com"
            className="bg-slate-900/80 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 pl-10 h-10 rounded-xl text-sm"
            {...register("email")}
          />
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
        </div>
        {errors.email && (
          <p className="text-xs text-rose-400 font-medium">{errors.email.message}</p>
        )}
      </div>

      {/* Risk Appetite Selection */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
          Select Investment Appetite
        </label>
        <div className="grid grid-cols-2 gap-2">
          {RISK_PROFILES.map((rp) => {
            const isSelected = selectedRisk === rp.id;
            return (
              <button
                key={rp.id}
                type="button"
                onClick={() => {
                  setSelectedRisk(rp.id);
                  setValue("riskProfile", rp.id);
                }}
                className={`p-2.5 rounded-xl border text-left transition text-xs ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-600/15 text-indigo-200"
                    : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700"
                }`}
              >
                <div className="font-semibold text-slate-200">{rp.label}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{rp.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Password Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
            Password
          </label>
          <div className="relative">
            <PasswordInput
              placeholder="••••••••"
              className="bg-slate-900/80 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 pl-10 h-10 rounded-xl text-sm"
              {...register("password")}
            />
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          </div>
          {/* Strength Bar */}
          {watchPassword && (
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Strength</span>
                <span className="font-semibold text-slate-300">{pwdStrength.label}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${pwdStrength.color}`}
                  style={{ width: `${pwdStrength.score}%` }}
                />
              </div>
            </div>
          )}
          {errors.password && (
            <p className="text-xs text-rose-400 font-medium">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
            Confirm Password
          </label>
          <div className="relative">
            <PasswordInput
              placeholder="••••••••"
              className="bg-slate-900/80 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 pl-10 h-10 rounded-xl text-sm"
              {...register("confirmPassword")}
            />
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-rose-400 font-medium">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 text-xs text-slate-400 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500/30"
            {...register("acceptTerms")}
          />
          <span>
            I agree to upStack's{" "}
            <span className="text-indigo-400 underline cursor-pointer">Terms of Service</span> and{" "}
            <span className="text-indigo-400 underline cursor-pointer">Privacy Policy</span>.
          </span>
        </label>
        {errors.acceptTerms && (
          <p className="text-xs text-rose-400 font-medium mt-1">
            {errors.acceptTerms.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-11 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-200"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            Creating Intelligence Account...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Create Intelligence Account <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
        <span>Enterprise 256-bit AES Encrypted System</span>
      </div>
    </form>
  );
}
