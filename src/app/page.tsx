import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

      {/* ───────── Animated Background Glow Effects ───────── */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]" />

      {/* ───────── Grid Pattern Overlay ───────── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ───────── Floating Particles (decorative dots) ───────── */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" />
      <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-500 opacity-60" />
      <div className="absolute bottom-32 left-40 w-1 h-1 bg-indigo-400 rounded-full animate-bounce delay-700 opacity-60" />
      <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce delay-300 opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-30" />

      {/* ───────── Main Content ───────── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">

        {/* Badge / Tag */}
        <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          AI-Powered Interview Prep
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-tight mb-2">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interview
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Forge AI
          </span>
        </h1>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full my-6" />

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 mb-4 max-w-md leading-relaxed">
          Ace Your Coding Interviews with
          <span className="text-white font-semibold"> AI-driven </span>
          practice and real-time feedback.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "🧠 Smart Questions",
            "⚡ Real-time Feedback",
            "📊 Progress Tracking",
          ].map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-400"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/login"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            {/* Button Shine Effect */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </span>
          </Link>

          <Link
            href="/register"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg shadow-green-600/25 hover:shadow-green-600/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Register Free
            </span>
          </Link>
        </div>

        {/* Trust Text */}
        <p className="mt-8 text-xs text-gray-600">
          ✦ No credit card required &nbsp;•&nbsp; ✦ Start in 30 seconds
        </p>
      </div>

      {/* ───────── Bottom Gradient Fade ───────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </main>
  );
}