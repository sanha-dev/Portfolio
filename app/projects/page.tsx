import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { getMelStats } from "@/lib/mel-stats";

export const revalidate = 3600;

export default async function ProjectsPage() {
  const { userCount } = await getMelStats();

  const dynamicProjects = projects.map((p) => {
    if (p.slug === "mel") {
      return {
        ...p,
        metrics: p.metrics.map((m) =>
          m.label === "베타 가입자" ? { ...m, value: `${userCount}명` } : m
        ),
      };
    }
    return p;
  });

  return (
    <main style={{ background: "var(--navy-950)", minHeight: "100vh" }}>

      <div className="max-w-6xl mx-auto px-8 pt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--text-muted)" }}
        >
          ← 메인으로
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-8 pt-12 pb-28">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Portfolio
        </p>

        <h1
          className="text-5xl font-bold mb-6 leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Business Development
          <br />
          Case Studies
        </h1>

        <p
          className="text-lg leading-relaxed max-w-2xl mb-20"
          style={{ color: "var(--text-secondary)" }}
        >
          문제를 정의하고, 현장과 데이터로 원인을 분석하며, 실행으로 성과를 만든 경험들입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {dynamicProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              href={`${project.href}?ref=projects`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
