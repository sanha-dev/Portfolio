const careers = [
  {
    period: "2025.10 — 현재",
    company: "MEL",
    role: "공동 창업 · 기획 · 운영",
    description:
      "영어 학습 서비스 창업. PostHog·Supabase로 사용자 데이터를 직접 측정하며 제품 의사결정.",
    highlights: ["가입자 102명", "전환율 70.5%", "모두의 창업 선정"],
  },
  {
    period: "2025.07 — 2025.10",
    company: "토스쇼핑",
    role: "Sales Specialist",
    description:
      "SMB 셀러 발굴·영업·관리. 데이터 기반 셀 대시보드를 직접 제작해 팀 퍼포먼스 관리.",
    highlights: ["셀러 205명 입점", "KPI 147% 달성", "기간 1위 셀"],
  },
  {
    period: "2023.09 — 2024.01",
    company: "미스터멘션",
    role: "BD 인턴",
    description:
      "예약 0건 숙소 555곳 컨설팅. 내부 데이터·경쟁사 분석 후 117명 호스트와 직접 통화.",
    highlights: ["예약 60건", "결제 2,830만원", "KPI 120%"],
  },
];

export default function CareerSnapshot() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-8 py-24"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-12"
        style={{ color: "var(--text-muted)" }}
      >
        Career Snapshot
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {careers.map(({ period, company, role, description, highlights }) => (
          <div
            key={company}
            className="card p-7 flex flex-col gap-5"
          >
            {/* 기간 */}
            <p className="text-xs metric" style={{ color: "var(--text-muted)" }}>
              {period}
            </p>

            {/* 회사 + 역할 */}
            <div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {company}
              </h3>
              <p className="text-sm" style={{ color: "var(--accent)" }}>
                {role}
              </p>
            </div>

            {/* 설명 */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {description}
            </p>

            {/* 하이라이트 태그 */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {highlights.map((h) => (
                <span key={h} className="badge">
                  {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}