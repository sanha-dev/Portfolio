export type TimelineItem = {
  period: string;
  title: string;
  role: string;
  description: string;
  highlight: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2023.09 — 2024.01",
    title: "미스터멘션",
    role: "신사업팀 BD 인턴",
    description:
      "신사업팀 소속으로 부산워케이션·남해생활관광 등 국가사업 운영, 투어 상품 기획·운영, 숙소 매출 부스팅 프로젝트까지 다양한 BD 업무를 담당했습니다.",
    highlight: "결제 2,830만원 · 부산워케이션 매출 목표 120%",
  },
  {
    period: "2025.07 — 2025.10",
    title: "토스쇼핑 (비바리퍼블리카)",
    role: "Sales Specialist",
    description:
      "SMB 셀러를 발굴·영업·관리했습니다. 연결률·성공률·요일별 영업 수를 지표로 설계한 셀 대시보드를 직접 제작해 데이터 기반 피드백 루틴을 만들었습니다.",
    highlight: "셀러 205명 · KPI 147% · 셀 경쟁 2연속 1위",
  },
  {
    period: "2026.05 — 현재",
    title: "MEL",
    role: "공동 기획 · 운영",
    description:
      "영어 번역+학습 루프 서비스를 공동으로 기획하고 직접 운영 중입니다. PostHog·Supabase로 사용자 행동을 직접 측정하며 제품 의사결정을 내리고 있습니다.",
    highlight: "베타 102명 · 번역→저장 70.5% · 지원금 200만원",
  },
];
