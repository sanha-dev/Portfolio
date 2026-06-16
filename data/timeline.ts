export type TimelineItem = {
  period: string;
  title: string;
  role: string;
  description: string;
  highlight: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2021 — 2024",
    title: "경영전략학회",
    role: "팀원 · 개편 TF 팀장",
    description:
      "현대오일뱅크·유한킴벌리 기업 프로젝트를 수행했습니다. 2024년 폐지 위기를 맞은 학회를 개편 TF로 이끌어 역대 최다 지원자를 달성했습니다.",
    highlight: "역대 최다 지원자 31명",
  },
  {
    period: "2023.07 — 2023.11",
    title: "SKT TS대리점",
    role: "프로모션 기획 · 운영",
    description:
      "아이폰 15 출시 시즌, 대학가 5개 단과대학 학생회·동아리와 제휴해 사전예약 및 실개통 최대 실적을 달성했습니다.",
    highlight: "사전예약 207% · 실개통 238%",
  },
  {
    period: "2023.09 — 2024.01",
    title: "미스터멘션",
    role: "BD 인턴",
    description:
      "예약 0건 숙소 555곳을 대상으로 컨설팅했습니다. 내부 판매 데이터·경쟁사 분석으로 솔루션을 수립하고 117명 호스트와 직접 통화했습니다.",
    highlight: "결제 2,830만원 · KPI 120%",
  },
  {
    period: "2025.07 — 2025.10",
    title: "토스쇼핑",
    role: "Sales Specialist",
    description:
      "SMB 셀러를 발굴·영업·관리했습니다. 연결률·성공률·요일별 영업 수를 지표로 설계한 셀 대시보드를 직접 제작해 데이터 기반 피드백 루틴을 만들었습니다.",
    highlight: "셀러 205명 · KPI 147% · 기간 1위 셀",
  },
  {
    period: "2025.10 — 현재",
    title: "MEL",
    role: "공동 창업 · 기획 · 운영",
    description:
      "영어 번역+학습 루프 서비스를 공동 창업했습니다. PostHog·Supabase로 사용자 행동을 직접 측정하며 제품 의사결정을 내리고 있습니다.",
    highlight: "베타 102명 · 전환율 70.5% · 지원금 200만원",
  },
];
