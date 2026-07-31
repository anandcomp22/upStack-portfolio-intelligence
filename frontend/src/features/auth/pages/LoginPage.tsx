import LoginForm from "../components/LoginForm";
import LoginHeader from "../components/LoginHeader";
import LoginFooter from "../components/LoginFooter";
import SocialLogin from "../components/SocialLogin";

import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">

      {/* Left Section */}

      <div className="flex items-center justify-center p-8">

        <div className="w-full max-w-md space-y-8">

          <LoginHeader />

          <LoginForm />

          <div className="flex items-center gap-4">
            <Separator className="flex-1" />

            <span className="text-sm text-muted-foreground">
              OR
            </span>

            <Separator className="flex-1" />
          </div>

          <SocialLogin />

          <LoginFooter />

        </div>

      </div>

      {/* Right Section */}

      <div className="hidden bg-muted lg:flex lg:items-center lg:justify-center">

        <div className="space-y-5 text-center">

          <h2 className="text-5xl font-bold">
            upStack
          </h2>

          <p className="max-w-md text-muted-foreground">
            AI-Powered Multi-Agent Portfolio Intelligence Platform
          </p>

        </div>

      </div>

    </div>
  );
}