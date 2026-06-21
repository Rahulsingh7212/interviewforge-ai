import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">
        InterviewForge AI
      </h1>

      <p className="text-gray-400 mb-8">
        Ace Your Coding Interviews
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="bg-green-600 px-6 py-3 rounded-lg"
        >
          Register
        </Link>
      </div>
    </main>
  );
}