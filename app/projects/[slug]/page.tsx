import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/project-details";
import ProjectsBackLink from "@/components/ProjectsBackLink";

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug !== "mel")
    .map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.slug === "mel") {
    notFound();
  }

  const detail = projectDetails[slug];

  return (
    <main style={{ background: "var(--navy-950)", minHeight: "100vh" }}>

      {/* 뒤로가기 */}
      <div className="max-w-5xl mx-auto px-8 pt-12">
        <Suspense
          fallback={
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              ← 메인으로
            </Link>
          }
        >
          <ProjectsBackLink
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          />
        </Suspense>
      </div>

      {/* 헤더 */}
      <header className="max-w-5xl mx-auto px-8 pt-10 pb-14">
        <span className="badge mb-3 inline-block">{project.tag}</span>
        {project.company && (
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            {project.company}
          </p>
        )}
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h1>
        <p
          className="text-lg leading-relaxed max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.subtitle}
        </p>
      </header>

      {/* 핵심 수치 */}
      <div className="max-w-5xl mx-auto px-8 mb-16">
        <div
          className="grid gap-px rounded-xl overflow-hidden"
          style={{
            gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
            border: "1px solid var(--border)",
            background: "var(--border)",
          }}
        >
          {project.metrics.map(({ value, label }) => (
            <div
              key={label}
              className="px-6 py-5 flex flex-col gap-1"
              style={{ background: "var(--navy-800)" }}
            >
              <span
                className="text-2xl font-bold metric"
                style={{ color: "var(--text-primary)", whiteSpace: "nowrap" }}
              >
                {value}
              </span>
              <span className="text-xs leading-snug" style={{ color: "var(--text-muted)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {detail ? (
        <>
          {/* 배경 + 내 역할 */}
          <section className="max-w-5xl mx-auto px-8 mb-16">
            <div
              className="rounded-xl p-8 flex flex-col gap-6 md:flex-row md:gap-12"
              style={{ background: "var(--navy-800)", border: "1px solid var(--border)" }}
            >
              <div className="flex-1">
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  배경
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {detail.context}
                </p>
              </div>
              <div className="shrink-0 md:w-56">
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  내 역할
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--accent)" }}
                >
                  {detail.myRole}
                </p>
              </div>
            </div>
          </section>

          {/* 팀 벤치마크 비교 */}
          {detail.comparison && (
            <section className="max-w-5xl mx-auto px-8 mb-12">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Team Benchmark
              </p>
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
              >
                <div
                  className="grid grid-cols-4 px-6 py-3"
                  style={{ background: "var(--navy-700)", borderBottom: "1px solid var(--border)" }}
                >
                  {["지표", "박산하", "팀 평균", "차이"].map((h, i) => (
                    <span
                      key={h}
                      className="text-[10px] font-semibold uppercase tracking-widest"
                      style={{ color: i === 1 ? "var(--accent)" : "var(--text-muted)" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
                {detail.comparison.map(({ metric, own, team, delta }) => (
                  <div
                    key={metric}
                    className="grid grid-cols-4 px-6 py-4"
                    style={{
                      borderTop: "1px solid var(--border)",
                      background: "var(--navy-800)",
                    }}
                  >
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{metric}</span>
                    <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{own}</span>
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>{team}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded self-center" style={{ background: "rgba(79,142,247,0.12)", color: "var(--accent)", width: "fit-content" }}>{delta}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 프로세스 */}
          <section className="max-w-5xl mx-auto px-8 mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Problem · Process · Result
            </p>

            {detail.processNote && (
              <p
                className="text-sm mb-10"
                style={{ color: "var(--text-muted)" }}
              >
                {detail.processNote}
              </p>
            )}

            <div className="flex flex-col gap-0">
              {detail.process.map(({ step, title, body }, i) => (
                <div
                  key={step}
                  className="flex gap-8 pb-12"
                  style={{
                    borderLeft: "1px solid var(--border)",
                    paddingLeft: "2rem",
                    marginLeft: "1.5rem",
                    position: "relative",
                  }}
                >
                  <div
                    className="absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: "var(--navy-950)",
                      border:
                        i === detail.process.length - 1
                          ? "2px solid var(--accent)"
                          : "1px solid var(--border-hover)",
                      color: "var(--accent)",
                    }}
                  >
                    {step}
                  </div>

                  <div className="flex flex-col gap-3 pt-1">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {title}
                    </h3>
                    <div
                      className="text-sm leading-relaxed max-w-2xl"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {body.split("\n\n").map((para, j) => (
                        <p key={j} className={j > 0 ? "mt-3" : ""}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 핵심 인사이트 */}
          <section className="max-w-5xl mx-auto px-8 mb-16">
            <div
              className="rounded-xl p-8 flex flex-col gap-4"
              style={{
                background: "var(--navy-700)",
                border: "1px solid var(--border-hover)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                {detail.insight.label}
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {detail.insight.body}
              </p>
            </div>
          </section>

          {/* 배운 것 */}
          <section className="max-w-5xl mx-auto px-8 mb-16">
            <div
              className="rounded-xl p-8"
              style={{ background: "var(--navy-800)", border: "1px solid var(--border)" }}
            >
              <p
                className="text-[10px] font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Learnings
              </p>
              <p
                className="text-lg font-medium leading-relaxed"
                style={{ color: "var(--text-primary)" }}
              >
                "{detail.learnings}"
              </p>
            </div>
          </section>
        </>
      ) : (
        /* detail 없을 때 — 기본 요약 표시 */
        <section className="max-w-5xl mx-auto px-8 mb-24">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-12"
            style={{ color: "var(--text-muted)" }}
          >
            Problem · Approach · Result
          </p>
          <div className="flex flex-col gap-0">
            {[
              { step: "01", title: "문제 정의", body: project.problem },
              { step: "02", title: "접근 방식", body: project.approach },
            ].map(({ step, title, body }, i) => (
              <div
                key={step}
                className="pb-12"
                style={{
                  borderLeft: "1px solid var(--border)",
                  paddingLeft: "2rem",
                  marginLeft: "1.5rem",
                  position: "relative",
                }}
              >
                <div
                  className="absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "var(--navy-950)",
                    border: i === 1 ? "2px solid var(--accent)" : "1px solid var(--border-hover)",
                    color: "var(--accent)",
                  }}
                >
                  {step}
                </div>
                <h3 className="text-lg font-semibold mb-3 pt-1" style={{ color: "var(--text-primary)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 하단 CTA */}
      <section
        className="max-w-5xl mx-auto px-8 pb-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}
      >
        <div>
          <p className="text-sm mb-1" style={{ color: "var(--text-muted)" }}>
            Business Development · 영업기획 · 사업기획
          </p>
          <Link
            href="/#contact"
            className="text-lg font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            함께 문제를 풀어나갈 기회를 찾고 있습니다 →
          </Link>
        </div>
        <Suspense
          fallback={
            <Link
              href="/#projects"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              ← 다른 프로젝트 보기
            </Link>
          }
        >
          <ProjectsBackLink
            label="← 다른 프로젝트 보기"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          />
        </Suspense>
      </section>
    </main>
  );
}
