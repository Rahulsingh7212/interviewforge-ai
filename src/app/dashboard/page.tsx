import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth-config";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  const session = await getServerSession(authConfig);

  if (!session?.user?.id) {
    redirect("/login");
  }

  // Fetch user's interviews
  const interviews = await prisma.interview.findMany({
    where: { userId: session.user.id },
    orderBy: { startedAt: "desc" },
    take: 10,
  });

  // Stats
  const totalInterviews = await prisma.interview.count({
    where: { userId: session.user.id },
  });

  const completedInterviews = await prisma.interview.count({
    where: { userId: session.user.id, status: "completed" },
  });

  const avgScore = await prisma.interview.aggregate({
    where: {
      userId: session.user.id,
      score: { not: null },
    },
    _avg: { score: true },
  });

  return (
    <DashboardClient
      user={session.user}
      interviews={interviews}
      stats={{
        total: totalInterviews,
        completed: completedInterviews,
        avgScore: avgScore._avg.score ?? 0,
      }}
    />
  );
}