import { timeline } from "@/data/timeline";
import { getMelStats } from "@/lib/mel-stats";

export default async function Timeline() {
  const { userCount } = await getMelStats();
  const items = timeline.map((item) =>
    item.title === "MEL"
      ? { ...item, highlight: `베타 ${userCount}명 · 번역→저장 70.5% · 지원금 200만원` }
      : item
  );
  return (
    <section
      id="career"
      className="max-w-6xl mx-auto px-8 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        Career Timeline
      </p>
      <h2
        className="text-4xl md:text-5xl font-bold leading-tight mb-20"
        style={{ color: "var(--text-primary)" }}
      >
        미스터멘션에서 시작해
        <br />
        MEL까지
      </h2>

      <div className="relative">
        {/* 수직 연결선 */}
        <div
          className="absolute top-4 bottom-4 w-px"
          style={{
            left: "1.5rem",
            background:
              "linear-gradient(to bottom, var(--border-hover), var(--border), transparent)",
          }}
        />

        <div className="flex flex-col gap-0">
          {items.map(({ period, title, role, description, highlight }, i) => (
            <div
              key={`${period}-${title}`}
              className="flex gap-8 pb-14 last:pb-0"
              style={{ paddingLeft: "4rem", position: "relative" }}
            >
              {/* 타임라인 원 */}
              <div
                className="absolute top-1 flex items-center justify-center w-6 h-6 rounded-full shrink-0"
                style={{
                  left: "0.75rem",
                  background: "var(--navy-950)",
                  border:
                    i === items.length - 1
                      ? "2px solid var(--accent)"
                      : "1px solid var(--border-hover)",
                  boxShadow:
                    i === items.length - 1
                      ? "0 0 8px rgba(79,142,247,0.35)"
                      : "none",
                }}
              >
                {i === items.length - 1 && (
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </div>

              <div className="flex flex-col gap-3 pt-0.5">
                {/* 기간 + 역할 */}
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-xs metric"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {period}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(79,142,247,0.08)",
                      color: "var(--accent)",
                    }}
                  >
                    {role}
                  </span>
                </div>

                {/* 제목 */}
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h3>

                {/* 설명 */}
                <p
                  className="text-sm leading-relaxed max-w-xl"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {description}
                </p>

                {/* 하이라이트 */}
                <span className="badge self-start">{highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
