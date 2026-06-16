const strengths = [
  {
    eyebrow: "01",
    title: "고객 인사이트",
    body: "화물차주 20명 전화 인터뷰, 호스트 117명 직접 통화 — 책상이 아닌 현장에서 고객을 이해합니다. 정량 설문 n=115로 가설을 검증합니다.",
    tag: "현장 조사 · 인터뷰 · 설문",
  },
  {
    eyebrow: "02",
    title: "데이터 기반 의사결정",
    body: "PostHog·Supabase로 사용자 행동 데이터를 직접 측정하고, 셀 성과 대시보드를 직접 설계해 의사결정에 활용합니다.",
    tag: "번역→저장 전환율 70.5%",
  },
  {
    eyebrow: "03",
    title: "실행력",
    body: "KPI 초과 달성, 학회 지원자 역대 최다 31명, MEL 베타 102명 — 기획을 수치로 연결합니다. 목표 설정부터 마감까지 직접 책임집니다.",
    tag: "KPI 147% · KPI 120%",
  },
  {
    eyebrow: "04",
    title: "AI 활용",
    body: "비개발자로서 Claude·ChatGPT를 활용해 MEL 서비스를 직접 기획·개발·운영합니다. AI를 코드 생성 도구가 아닌 의사결정 파트너로 사용합니다.",
    tag: "MEL 서비스 직접 개발·운영",
  },
];

export default function CoreStrength() {
  return (
    <section
      id="strength"
      className="max-w-6xl mx-auto px-8 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        Core Strength
      </p>
      <h2
        className="text-4xl md:text-5xl font-bold leading-tight mb-16"
        style={{ color: "var(--text-primary)" }}
      >
        비즈니스 문제에
        <br />
        접근하는 방식
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {strengths.map(({ eyebrow, title, body, tag }) => (
          <div key={title} className="card p-8 flex flex-col gap-5">
            <span
              className="text-xs font-semibold"
              style={{ color: "var(--accent)" }}
            >
              {eyebrow}
            </span>

            <h3
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h3>

            <p
              className="text-sm leading-relaxed flex-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {body}
            </p>

            <span className="badge self-start">{tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
