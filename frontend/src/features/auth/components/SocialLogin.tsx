import { FaGithub } from "react-icons/fa"; 
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export default function SocialLogin() {
  return (
    <div className="space-y-3">

      <Button
        variant="outline"
        className="w-full"
      >
        <FcGoogle className="mr-2 text-lg" />

        Continue with Google
      </Button>

      <Button
        variant="outline"
        className="w-full"
      >
        <FaGithub className="mr-2 h-4 w-4" />

        Continue with GitHub
      </Button>

    </div>
  );
}