export type Project = {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  metrics: { value: string; label: string }[];
  href: string;
  featured?: boolean;
  company?: string;
};

export const projects: Project[] = [
  {
    slug: "toss",
    tag: "운영 구조화 / 성과 시각화",
    company: "(주)비바리퍼블리카 · Sales Specialist",
    title: "토스쇼핑 — 셀 성과 대시보드 설계와 영업 루틴의 전사 확산",
    subtitle: "대시보드·피드백 루틴 설계로 셀 경쟁 2연속 1위를 기록하고, 영업 방식을 전사 온보딩 표준으로 확산시킨 Sales Specialist",
    problem:
      "셀 구성원 간 영업 성과 편차가 컸고, 누가 왜 잘하는지 / 못하는지를 파악할 수단이 없었습니다.",
    approach:
      "연결률·성공률·요일별 영업 수 지표 대시보드를 직접 설계해 셀 내 피드백 루틴을 만들었습니다. 화이트 스페이스 카테고리 전략과 메일 선발송 방식은 전사 온보딩 표준으로 채택됐습니다.",
    metrics: [
      { value: "205명", label: "셀러 입점" },
      { value: "147%", label: "입점 목표 달성 (8월)" },
      { value: "136%", label: "입점 목표 달성 (9월)" },
    ],
    href: "/projects/toss",
    featured: true,
  },
  {
    slug: "ota",
    tag: "가설 검증 / 잠재 리스크 방어",
    company: "(주)미스터멘션 · 신사업팀 BD 인턴",
    title: "미스터멘션 — 현장 인터뷰와 데이터 분석을 통한 매출 부스팅",
    subtitle: "예약 0건 숙소 555곳, 데이터로 진단하고 현장 인터뷰로 솔루션을 재설계한 BD 프로젝트",
    problem:
      "플랫폼 등록 후 6개월간 예약이 한 건도 없는 숙소가 555곳이었고, 데이터 기반 솔루션이 현장에서 먹히지 않는 것이 가장 큰 과제였습니다.",
    approach:
      "내부 판매 데이터·경쟁사 분석으로 솔루션을 수립했으나 현장 반응은 냉담했습니다. 117명의 호스트와 직접 통화하며 데이터가 설명하지 못한 맥락(도시가스 난방비 문제)을 발견하고 솔루션을 재설계했습니다.",
    metrics: [
      { value: "60건", label: "예약 발생" },
      { value: "2,830만원", label: "결제 금액" },
      { value: "117명", label: "직접 컨설팅" },
    ],
    href: "/projects/ota",
    featured: true,
  },
  {
    slug: "mel",
    tag: "린 실행력 / 프로덕트 론칭",
    company: "직접 기획 · 운영",
    title: "MEL — AI 레버리지를 통한 영어 학습 프로덕트 론칭",
    subtitle: "핵심 가치를 '즉시 학습'에서 '리콜'로 재정의하고, 데이터로 검증하며 운영 프로세스를 파이프라인화한 기획·운영 케이스",
    problem:
      "기존 번역 앱은 '찾고 끝'이었고, 기존 영어 학습 앱은 '지금 쓰고 싶은 표현'을 가르쳐주지 않았습니다.",
    approach:
      "핵심 가치를 '즉시 학습'에서 '리콜'로 재정의하고, PostHog·Supabase로 D3 재방문율 등 사용자 행동을 직접 측정해 웹 구조적 한계를 진단 후 앱 전환을 결정했습니다.",
    metrics: [
      { value: "113명", label: "베타 가입자" },
      { value: "70.5%", label: "번역→저장 전환율" },
      { value: "200만원", label: "모두의 창업 지원금" },
    ],
    href: "/english-log",
    featured: true,
  },
  {
    slug: "hyundai",
    tag: "전략 수립 / 타겟 재정의",
    company: "경영전략학회 · 기업 프로젝트",
    title: "현대오일뱅크 — 타겟 재정의와 선탑 중개 비즈니스 모델 제안",
    subtitle: "화물차주 인터뷰 20명 + 설문 n=115로 '신규 고객'을 재정의하고, 선발진입 효과 기반 신사업을 제안한 전략 프로젝트",
    problem:
      "신규 화물차 고객 유입 전략을 제안해야 했지만, '신규 고객'이 누구인지 정의 자체가 없었고 현장 데이터도 존재하지 않았습니다.",
    approach:
      "운수사 직접 방문, 화물차주 20명 인터뷰, 커뮤니티 설문 2회(n=115)로 정성·정량 검증을 거쳐 관성적 소비 패턴과 선탑 문화를 발견하고, 신규 고객을 '아직 관성을 형성하지 않은 진입 단계 운전자'로 재정의했습니다.",
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
    company: "경영전략학회 · TF 팀장",
    title: "경영전략학회 개편 TF",
    subtitle: "폐지 위기의 학회를 커리큘럼·채널 전략 개편으로 부활",
    problem:
      "지원자 수가 급감해 학회 폐지 위기였고, 기존 리크루팅 방식과 커리큘럼 모두 재설계가 필요했습니다.",
    approach:
      "3개년 이탈 학회원 인터뷰로 문제를 정의하고, 단과대별 맞춤 문구와 전 단과대 모집 전략으로 리크루팅 채널을 재설계했습니다.",
    metrics: [
      { value: "31명", label: "역대 최다 지원자" },
      { value: "5개", label: "단과대 신규 확장" },
    ],
    href: "/projects/tf",
    featured: false,
  },
];
