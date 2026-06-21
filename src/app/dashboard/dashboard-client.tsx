"use client";

import Link from "next/link";
import {
  Code2,
  Mic,
  Map,
  History,
  TrendingUp,
  Target,
  Trophy,
  ChevronRight,
  Clock,
} from "lucide-react";

type Interview = {
  id: string;
  type: string;
  status: string;
  score: number | null;
  startedAt: Date;
  completedAt: Date | null;
};

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export default function DashboardClient({
  user,
  interviews,
  stats,
}: {
  user: User;
  interviews: Interview[];
  stats: { total: number; completed: number; avgScore: number };
}) {
  const greeting = getGreeting();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">
          {greeting}, {user.name || "Developer"}
        </h1>
        <p className="text-zinc-400 mt-1">Ready to sharpen your interview skills?</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-sm text-zinc-400">Total Interviews</span>
          </div>
          <p className="text-3xl font-bold text-white">{stats.total}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-sm text-zinc-400">Completed</span>
          </div>
          <p className="text-3xl font-bold text-white">{stats.completed}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-sm text-zinc-400">Avg. Score</span>
          </div>
          <p className="text-3xl font-bold text-white">
            {stats.avgScore > 0 ? Math.round(stats.avgScore) : "—"}
          </p>
        </div>
      </div>

      {/* Start Interview Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Start a New Interview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/interview/coding"
            className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-white font-semibold mb-1">Coding Interview</h3>
            <p className="text-zinc-400 text-sm">
              Solve algorithm problems with real-time AI evaluation
            </p>
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
          </Link>

          <Link
            href="/dashboard/interview/voice"
            className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Mic className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-1">Voice Interview</h3>
            <p className="text-zinc-400 text-sm">
              Practice speaking through solutions with an AI interviewer
            </p>
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-hover:text-blue-400 transition-colors" />
          </Link>

          <Link
            href="/dashboard/roadmap"
            className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all"
          >
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-white font-semibold mb-1">Learning Roadmap</h3>
            <p className="text-zinc-400 text-sm">
              Get a personalized study plan based on your performance
            </p>
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 group-hover:text-amber-400 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Recent Interviews */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Interviews</h2>
          <Link
            href="/dashboard/history"
            className="text-sm text-emerald-400 hover:underline flex items-center gap-1"
          >
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {interviews.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
            <History className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-400 font-medium">No interviews yet</p>
            <p className="text-zinc-500 text-sm mt-1">
              Start your first interview to see your history here
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {interviews.map((interview) => (
              <div
                key={interview.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      interview.type === "coding"
                        ? "bg-emerald-500/10"
                        : interview.type === "voice"
                        ? "bg-blue-500/10"
                        : "bg-purple-500/10"
                    }`}
                  >
                    {interview.type === "coding" ? (
                      <Code2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Mic className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium capitalize">
                      {interview.type.replace("_", " ")} Interview
                    </p>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock className="w-3.5 h-3.5" />
                      {formatDate(interview.startedAt)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {interview.score !== null && (
                    <span className="text-sm font-medium text-zinc-300">
                      Score: {interview.score}/100
                    </span>
                  )}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      interview.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : interview.status === "in_progress"
                        ? "bg-amber-500/10 text-amber-400"
                        : "bg-zinc-700 text-zinc-400"
                    }`}
                  >
                    {interview.status.replace("_", " ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}