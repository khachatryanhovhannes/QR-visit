import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Sorry, the page you&apos;re looking for does not exist.
      </p>
      <Link href="/" className="inline-block">
        <span className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/80 transition">Go Home</span>
      </Link>
    </div>
  );
}
