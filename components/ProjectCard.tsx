import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  tag,
  title,
  subtitle,
  problem,
  approach,
  metrics,
  href,
}: Project) {
  return (
    <Link href={href} className="block group">
      <article
        className="card h-full flex flex-col p-7 gap-5"
        style={{ background: "var(--navy-800)" }}
      >
        {/* 태그 */}
        <span className="badge self-start">{tag}</span>

        {/* 타이틀 */}
        <div>
          <h3
            className="text-lg font-semibold leading-snug mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            {subtitle}
          </p>
        </div>

        {/* 문제 정의 */}
        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "var(--text-muted)" }}
          >
            문제
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {problem}
          </p>
        </div>

        {/* 접근 방식 */}
        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "var(--text-muted)" }}
          >
            접근
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {approach}
          </p>
        </div>

        {/* 수치 성과 */}
        <div
          className="mt-auto pt-5 flex rounded-lg overflow-hidden"
          style={{
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="flex-1 min-w-0 px-4 py-3 flex flex-col gap-0.5"
              style={{ background: "var(--navy-900)" }}
            >
              <span
                className="text-sm font-bold metric"
                style={{ color: "var(--text-primary)", whiteSpace: "nowrap" }}
              >
                {value}
              </span>
              <span
                className="text-[10px] truncate"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* 자세히 보기 */}
        <p
          className="text-xs font-medium mt-1 group-hover:text-accent transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          자세히 보기 →
        </p>
      </article>
    </Link>
  );
}