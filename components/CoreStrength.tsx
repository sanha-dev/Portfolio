const strengths = [
  {
    eyebrow: "01",
    label: "Context Finding",
    title: "가설 검증을 위한 현장 분석",
    body: "숫자가 담지 못하는 비즈니스 맥락을 파악하기 위해 인터뷰와 설문을 먼저 씁니다. 호스트 117명과 직접 통화하고, 화물차주 20명을 인터뷰하며 설문 n=115를 진행했습니다 — 현장의 목소리에서 진짜 가설을 추출합니다.",
    tag: "현장 인터뷰 · 설문 · 행동 관찰",
  },
  {
    eyebrow: "02",
    label: "Systemizing",
    title: "데이터 기반 오퍼레이션 설계",
    body: "문제를 일회성 해결에 그치지 않고, 재현 가능한 구조로 만듭니다. 셀 성과 대시보드를 기획해 팀원 간 노하우가 흐르는 피드백 루틴을 설계했고 — 메일 선발송 방식은 전사 온보딩 표준이 됐고, 대시보드 구조는 다른 셀들이 벤치마킹했습니다.",
    tag: "대시보드 설계 · 피드백 루틴 · KPI 관리",
  },
  {
    eyebrow: "03",
    label: "Efficiency Tech",
    title: "AI 기반 프로세스 최적화",
    body: "Claude·ChatGPT를 운영 파트너로 활용해 MEL 기획부터 배포 자동화까지 직접 운영합니다. AI는 실행 속도를, 데이터는 방향을 책임집니다 — D3 재방문율 16.1%를 근거로 웹의 구조적 한계를 진단하고 앱 전환을 결정했습니다.",
    tag: "AI 레버리지 · 직접 운영 · 데이터 기반 의사결정",
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

      <div className="grid md:grid-cols-3 gap-6">
        {strengths.map(({ eyebrow, label, title, body, tag }) => (
          <div key={title} className="card p-8 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--accent)" }}
              >
                {eyebrow}
              </span>
              <span
                className="text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </span>
            </div>

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
