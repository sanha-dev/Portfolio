const chapters = [
  {
    label: "시작",
    title: "현장에서 고객을 배웠습니다",
    body: "미스터멘션 BD 인턴으로 처음 실전에 뛰어들었습니다. 예약이 0건인 숙소 555곳을 데이터로 분석하고, 117명의 호스트와 직접 통화하며 컨설팅했습니다. 데이터만으로는 설득이 안 된다는 것, 그리고 현장 대화에서만 얻을 수 있는 인사이트가 있다는 것을 배웠습니다.",
  },
  {
    label: "성장",
    title: "데이터로 팀 퍼포먼스를 설계했습니다",
    body: "토스쇼핑에서 SMB 셀러 영업을 하며 셀 성과 대시보드를 직접 만들었습니다. 연결률, 성공률, 요일별 영업 수라는 지표를 설계하고, 데이터 기반 피드백 루틴을 만들었습니다. 기간 내 1위 셀을 달성하며 개인 영업이 아닌 팀 전체의 성과를 올리는 방법을 경험했습니다.",
  },
  {
    label: "현재",
    title: "직접 서비스를 만들고 있습니다",
    body: "MEL을 공동 창업하며 기획자에서 운영자로 역할이 확장됐습니다. PostHog와 Supabase를 직접 연동해 사용자 행동을 측정하고, AI(Claude·ChatGPT)를 활용해 비개발자로서 서비스를 직접 개발합니다. 데이터를 보고 → 가설을 세우고 → 실험하고 → 다시 측정하는 루프를 매일 반복합니다.",
  },
];

export default function CareerJourney() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-8 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        About
      </p>
      <h2
        className="text-4xl md:text-5xl font-bold leading-tight mb-16"
        style={{ color: "var(--text-primary)" }}
      >
        어떻게 여기까지
        <br />
        왔는가
      </h2>

      <div className="flex flex-col gap-8">
        {chapters.map(({ label, title, body }) => (
          <div
            key={label}
            className="card p-8 flex flex-col gap-4"
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              {label}
            </span>
            <h3
              className="text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
