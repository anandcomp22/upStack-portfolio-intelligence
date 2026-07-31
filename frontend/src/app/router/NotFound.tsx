import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">

      <h1 className="text-8xl font-bold">
        404
      </h1>

      <h2 className="text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-primary px-6 py-3 text-primary-foreground"
      >
        Back to Dashboard
      </Link>

    </div>
  );
}