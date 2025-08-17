"use client";
import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-primary">500</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Something went wrong. Please try again later.<br />
        <span className="text-xs text-muted-foreground">{error?.message}</span>
      </p>
      <Link href="/" className="inline-block">
        <span className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/80 transition">Go Home</span>
      </Link>
    </div>
  );
}
