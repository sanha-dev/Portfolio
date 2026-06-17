import { getMelStats } from "@/lib/mel-stats";

export default async function CareerSnapshot() {
  const { userCount } = await getMelStats();

  const careers = [
    {
      period: "2026.05 — 현재",
      company: "MEL",
      role: "공동 기획 · 운영",
      description:
        "영어 학습 서비스를 직접 기획하고 운영 중. PostHog·Supabase로 사용자 데이터를 직접 측정하며 제품 의사결정.",
      highlights: [`가입자 ${userCount}명`, "번역→저장 70.5%", "지원금 200만원"],
    },
    {
      period: "2025.07 — 2025.10",
      company: "토스쇼핑",
      role: "Sales Specialist",
      description:
        "SMB 셀러 발굴·영업부터 입점 후 기획전 설계까지 전 주기 관리. 데이터 기반 셀 대시보드를 직접 제작해 팀 퍼포먼스 관리.",
      highlights: ["셀러 205명 입점", "KPI 147%", "셀 경쟁 2연속 1위"],
    },
    {
      period: "2023.09 — 2024.01",
      company: "미스터멘션",
      role: "BD 인턴",
      description:
        "예약 0건 숙소 555곳 컨설팅. 내부 데이터·경쟁사 분석 후 117명 호스트와 직접 통화.",
      highlights: ["예약 60건", "결제 2,830만원", "워케이션 KPI 120%"],
    },
  ];

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
        About
      </p>

      {/* 소개 + 학력 */}
      <div className="grid md:grid-cols-5 gap-12 mb-16">
        <div className="md:col-span-3">
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            미스터멘션에서 가장 기억에 남는 순간은 제주 호스트와의 통화였습니다.
            데이터에서는 '가격 문제'로 분류되던 숙소였는데, 직접 물어보니
            도시가스 미공급으로 인한 구조적 난방비 문제였습니다.
            해결책을 다시 설계했고, 예약이 생기기 시작했습니다.
          </p>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            문제를 끝까지 파고들어 낸 해결책이 누군가에게 실제로 닿는 그 감각 —
            그것이 미스터멘션과 토스쇼핑을 거치며 이 일이 저와 맞는다고
            확신하게 된 이유입니다.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            지금은 영어 학습 서비스 MEL을 직접 기획·운영하며,
            사업 기획부터 데이터 분석, 사용자 문제 해결까지
            서비스 전체 흐름을 책임지고 있습니다.
          </p>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <div
            className="rounded-xl p-6"
            style={{ background: "var(--navy-800)", border: "1px solid var(--border)" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Education
            </p>
            <p
              className="text-base font-bold mb-0.5"
              style={{ color: "var(--text-primary)" }}
            >
              부산대학교
            </p>
            <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
              경제학과
            </p>
            <p className="text-xs metric" style={{ color: "var(--text-muted)" }}>
              2018.03 — 2025.08
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["현장 인터뷰 · 설문", "데이터 기반 영업", "파트너 BD", "AI 서비스 기획"].map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 경력 카드 */}
      <div className="grid md:grid-cols-3 gap-6">
        {careers.map(({ period, company, role, description, highlights }) => (
          <div key={company} className="card p-7 flex flex-col gap-5">
            <p className="text-xs metric" style={{ color: "var(--text-muted)" }}>
              {period}
            </p>
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
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {description}
            </p>
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
