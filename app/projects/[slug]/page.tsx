import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

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

  const steps = [
    {
      step: "01",
      title: "문제 정의",
      body: project.problem,
    },
    {
      step: "02",
      title: "접근 방식",
      body: project.approach,
    },
  ];

  return (
    <main style={{ background: "var(--navy-950)", minHeight: "100vh" }}>
      {/* 뒤로가기 */}
      <div className="max-w-5xl mx-auto px-8 pt-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          ← 프로젝트 목록으로
        </Link>
      </div>

      {/* 헤더 */}
      <header className="max-w-5xl mx-auto px-8 pt-12 pb-16">
        <span className="badge mb-6 inline-block">{project.tag}</span>
        <h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title.includes("—") ? (
            <>
              {project.title.split("—")[0].trim()}
              <br />
              <span style={{ color: "var(--accent)" }}>
                — {project.title.split("—")[1].trim()}
              </span>
            </>
          ) : (
            <span style={{ color: "var(--accent)" }}>{project.title}</span>
          )}
        </h1>
        <p
          className="text-xl leading-relaxed max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.subtitle}
        </p>
      </header>

      {/* 핵심 수치 */}
      <div className="max-w-5xl mx-auto px-8 mb-20">
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
                style={{ color: "var(--text-primary)" }}
              >
                {value}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 문제 → 접근 방식 */}
      <section className="max-w-5xl mx-auto px-8 mb-24">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          Problem · Approach · Result
        </p>

        <div className="flex flex-col gap-0">
          {steps.map(({ step, title, body }) => (
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
                  border: "1px solid var(--border-hover)",
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
                <p
                  className="text-base leading-relaxed max-w-2xl"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}

          {/* 성과 스텝 */}
          <div
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
                border: "2px solid var(--accent)",
                color: "var(--accent)",
                boxShadow: "0 0 8px rgba(79,142,247,0.3)",
              }}
            >
              03
            </div>

            <div className="flex flex-col gap-4 pt-1">
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                수치 성과
              </h3>

              <div
                className="grid gap-px rounded-xl overflow-hidden self-start"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(project.metrics.length, 3)}, auto)`,
                  border: "1px solid var(--border)",
                  background: "var(--border)",
                }}
              >
                {project.metrics.map(({ value, label }) => (
                  <div
                    key={label}
                    className="px-6 py-4 flex flex-col gap-1"
                    style={{ background: "var(--navy-800)" }}
                  >
                    <span
                      className="text-xl font-bold metric"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section
        className="max-w-5xl mx-auto px-8 pb-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}
      >
        <div>
          <p
            className="text-sm mb-1"
            style={{ color: "var(--text-muted)" }}
          >
            Business Development · 영업기획 · 사업기획
          </p>
          <Link
            href="/#contact"
            className="text-lg font-semibold transition-colors"
            style={{ color: "var(--accent)" }}
          >
            함께 문제를 풀어나갈 기회를 찾고 있습니다 →
          </Link>
        </div>
        <Link
          href="/#projects"
          className="text-sm transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          ← 다른 프로젝트 보기
        </Link>
      </section>
    </main>
  );
}
