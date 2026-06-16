import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 py-28">

      {/* 섹션 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Selected Case Studies
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            문제를 정의하고
            <br />
            데이터로 검증한 프로젝트
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-sm font-medium shrink-0 transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          전체 프로젝트 보기 →
        </Link>
      </div>

      {/* 카드 그리드 */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}