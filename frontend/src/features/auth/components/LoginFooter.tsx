import { Link } from "react-router-dom";

export default function LoginFooter() {
  return (
    <div className="text-center text-sm">

      Don't have an account?

      <Link
        to="/register"
        className="ml-2 font-semibold text-primary hover:underline"
      >
        Create Account
      </Link>

    </div>
  );
}