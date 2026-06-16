export type Project = {
  slug: string;
  tag: string;            // 역할/분류 배지
  title: string;
  subtitle: string;
  problem: string;        // 어떤 문제였는가
  approach: string;       // 어떻게 접근했는가
  metrics: { value: string; label: string }[];
  href: string;           // 상세 페이지 경로
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mel",
    tag: "공동 창업 · 기획 · 운영",
    title: "MEL — My English Log",
    subtitle: "번역과 학습을 하나의 루프로 연결하는 영어 학습 서비스",
    problem:
      "기존 번역 앱은 '찾고 끝'이었고, 기존 영어 학습 앱은 '지금 쓰고 싶은 표현'을 가르쳐주지 않았습니다.",
    approach:
      "PostHog·Supabase로 사용자 행동 데이터를 직접 측정하며 온보딩과 학습 플로우를 반복 개선했습니다.",
    metrics: [
      { value: "102명", label: "베타 가입자" },
      { value: "70.5%", label: "번역→저장 전환율" },
      { value: "200만원", label: "모두의 창업 지원금" },
    ],
    href: "/english-log",
    featured: true,
  },
  {
    slug: "toss",
    tag: "Sales Specialist",
    title: "토스쇼핑 — 셀 대시보드 & 영업 분석",
    subtitle: "데이터 기반 영업 전략으로 기간 내 1위 셀 달성",
    problem:
      "셀 구성원 간 영업 성과 편차가 컸고, 누가 왜 잘하는지 / 못하는지를 파악할 수단이 없었습니다.",
    approach:
      "연결률·성공률·요일별 영업 수를 지표로 설계한 대시보드를 직접 제작하고, 데이터 기반 피드백 루틴을 만들었습니다.",
    metrics: [
      { value: "205명", label: "셀러 입점" },
      { value: "KPI 147%", label: "8월 달성" },
      { value: "KPI 136%", label: "9월 달성" },
    ],
    href: "/projects/toss",
    featured: true,
  },
  {
    slug: "ota",
    tag: "인턴 · 컨설팅",
    title: "미스터멘션 — 숙소 매출 부스팅",
    subtitle: "예약 0건 숙소 555곳, 데이터 분석 기반 컨설팅",
    problem:
      "플랫폼 등록 후 6개월간 예약이 한 건도 없는 숙소가 555곳이었고, 호스트 설득이 가장 큰 과제였습니다.",
    approach:
      "내부 판매 데이터·경쟁사 분석으로 솔루션을 수립하고, 117명의 호스트와 직접 통화하며 컨설팅안을 조율했습니다.",
    metrics: [
      { value: "60건", label: "예약 발생" },
      { value: "2,830만원", label: "결제 금액" },
      { value: "117명", label: "직접 컨설팅" },
    ],
    href: "/projects/ota",
    featured: true,
  },
  {
    slug: "hyundai",
    tag: "전략 기획 · 프로젝트",
    title: "현대오일뱅크 — 화물차 고객 신규 사업 제안",
    subtitle: "화물차주 인터뷰 + 설문 n=115 기반 선탑 중개 서비스 전략",
    problem:
      "신규 화물차 고객 유입 전략을 제안해야 했지만, '신규 고객'이 누구인지 정의 자체가 없었습니다.",
    approach:
      "운수사 방문·화물차주 20명 전화 인터뷰, 커뮤니티 설문 2회(n=115)로 선탑 시장의 정보 비대칭 문제를 발굴했습니다.",
    metrics: [
      { value: "1위", label: "현대오일뱅크 선정" },
      { value: "20명", label: "심층 인터뷰" },
      { value: "n=115", label: "정량 설문" },
    ],
    href: "/projects/hyundai",
    featured: false,
  },
  {
    slug: "tf",
    tag: "리더십 · 조직 개편",
    title: "경영전략학회 개편 TF",
    subtitle: "폐지 위기의 학회를 커리큘럼·채널 전략 개편으로 부활",
    problem:
      "지원자 수가 급감해 학회 폐지 위기였고, 기존 리크루팅 방식과 커리큘럼 모두 재설계가 필요했습니다.",
    approach:
      "3개년 학회원 인터뷰로 문제를 정의하고, 단과대별 맞춤 문구와 전 단과대 모집 전략으로 리크루팅 채널을 재설계했습니다.",
    metrics: [
      { value: "31명", label: "역대 최다 지원자" },
      { value: "5개", label: "단과대 신규 확장" },
    ],
    href: "/projects/tf",
    featured: false,
  },
  {
    slug: "yuhan",
    tag: "Research Assistant",
    title: "유한킴벌리 오늘플러스 — 전략적 제휴 리서치",
    subtitle: "웰니스 플랫폼의 Killer Service 파트너 탐색",
    problem:
      "웰니스 플랫폼 '오늘플러스'의 전략적 제휴 파트너 후보를 발굴해야 했지만, 어떤 브랜드와 제휴해야 사용자 유입과 리텐션을 높일 수 있는지 기준이 없는 상태였습니다.",
    approach:
      "Noom·Headspace·위버스 등 해외·국내 Killer Service 사례를 분석하고, 유한킴벌리 타겟 고객의 라이프스타일과 니즈에 맞는 전략적 제휴 브랜드 풀을 체계적으로 도출했습니다.",
    metrics: [
      { value: "3개월", label: "리서치 기간" },
      { value: "국내외 서비스", label: "Killer Service 분석" },
      { value: "브랜드 풀", label: "전략적 제휴 완성" },
    ],
    href: "/projects/yuhan",
    featured: false,
  },
  {
    slug: "skt",
    tag: "프로모션 기획 · 운영",
    title: "SKT TS대리점 — 아이폰 15 프로모션",
    subtitle: "대학가 5개 단과대 제휴로 사전예약·실개통 역대 최다",
    problem:
      "아이폰 15 출시 시즌, 경쟁 대리점 대비 인지도와 유입이 부족한 상황에서 대학생 고객층을 확보해야 했습니다.",
    approach:
      "5개 단과대학 학생회·동아리와 직접 제휴를 맺고, 대학생 특화 혜택을 담은 프로모션을 기획·운영했습니다. 채널별 반응 데이터를 분석해 효과적인 접근 방식을 찾아냈습니다.",
    metrics: [
      { value: "31건", label: "사전예약 (전 기종 대비 207%)" },
      { value: "19건", label: "실개통 (전 기종 대비 238%)" },
      { value: "5개", label: "단과대학 제휴" },
    ],
    href: "/projects/skt",
    featured: false,
  },
];