import { Suspense } from "react";
import Link from "next/link";
import ProjectsBackLink from "@/components/ProjectsBackLink";

import { getMelStats } from "@/lib/mel-stats";

export const revalidate = 3600;

const processSteps = [
  {
    step: "01",
    title: "문제 정의",
    body: "기존 번역 앱은 '찾고 끝나는 경험'을 제공합니다. 사용자는 표현을 찾는 순간 필요하지만, 앱을 닫는 순간 잊어버립니다. 동시에 기존 영어 학습 앱은 '지금 내가 쓰고 싶은 표현'을 가르쳐주지 않습니다. 두 서비스 사이의 공백이 MEL의 시작점이었습니다.",
  },
  {
    step: "02",
    title: "사용자 행동 데이터 측정",
    body: "PostHog와 Supabase를 직접 연동해 번역 → 저장 → 학습 각 단계의 전환율을 측정했습니다. 저장 후 학습으로 이어지는 비율이 낮다는 데이터를 확인하고, 온보딩 플로우와 학습 결과 화면을 집중적으로 개선했습니다.",
  },
  {
    step: "03",
    title: "기능 의사결정",
    body: "초기 온보딩에서 '상황별 표현 선택' 방식을 운영했으나, 선택지가 많을수록 이탈률이 높아지는 패턴을 데이터로 확인했습니다. 하드코딩 표현 + 파생 표현 구조로 전면 개편하고, study_time 질문은 제거해 온보딩 길이를 단축했습니다.",
  },
  {
    step: "04",
    title: "AI 활용과 속도 개선",
    body: "번역 API 응답 속도가 사용자 경험의 핵심 병목이었습니다. 프롬프트 구조와 API 호출 방식을 직접 실험하며 번역 속도를 최대 53% 개선했습니다. 개발자 없이 VSCode 없이, 메모장 기반 코드 수정과 GitHub → Vercel 배포 방식으로 운영합니다.",
  },
  {
    step: "05",
    title: "성과와 다음 단계",
    body: "베타 가입자 102명, 번역→저장 전환율 70.5%를 달성했고, 모두의 창업 1차 합격으로 200만원 지원이 확정되었습니다. 현재 오픈 베타 런칭을 준비 중이며, React Native 앱 전환과 푸시 알림 기반 복습 시스템을 로드맵에 올려두고 있습니다.",
  },
];

const decisionLoops = [
  {
    title: "핵심 컨셉 피벗 — '즉시 학습'에서 '리콜'로",
    steps: [
      { label: "초기 설계", content: "표현 선택 직후 즉시 퀴즈로 학습시키는 방식으로 기획 시작" },
      { label: "문제 발견", content: "표현을 고르자마자 퀴즈가 뜨면 '지금 쓸 표현 찾으러 왔는데?'라는 흐름 방해 인지" },
      { label: "재정의", content: "MEL의 핵심은 즉시 학습이 아니라, 고른 표현을 잊히지 않게 '리콜'하는 것으로 전면 재정의" },
      { label: "구조 전환", content: "저장→리콜 중심 구조로 재설계, 즉시 학습은 선택형 보조 버튼으로 전환" },
    ],
  },
  {
    title: "앱 전환 결정 — 웹의 구조적 한계를 데이터로 진단",
    steps: [
      { label: "데이터 발견", content: "베타 운영 중 D3 재방문율 16.1% 측정 — 기대 대비 낮은 재방문" },
      { label: "원인 분석", content: "리콜 핵심 채널인 푸시 알림이 웹 환경에서 구조적으로 불가능함을 인지" },
      { label: "의사결정", content: "낮은 D3 = 기능 문제가 아닌 웹의 구조적 한계로 진단, React Native 앱 전환 결정" },
      { label: "로드맵 확정", content: "앱 전환 후 푸시 알림 기반 리콜 시스템 설계, 현재 로드맵에 반영" },
    ],
  },
  {
    title: "번역→저장 전환 개선 사례",
    steps: [
      { label: "데이터 확인", content: "번역 완료 후 저장까지 이어지지 않는 이탈 패턴 발견" },
      { label: "가설 설정", content: "저장 행동을 유도하는 장치 부재 — 번역 완료 화면에서 다음 행동이 불명확" },
      { label: "실험", content: "번역 완료 직후 저장 유도 UI 장치 설계 및 배치" },
      { label: "결과", content: "번역→저장 전환율 70.5% 달성" },
    ],
  },
  {
    title: "온보딩 개편 사례",
    steps: [
      { label: "데이터 확인", content: "저장 후 학습 전환율이 낮음을 PostHog에서 발견" },
      { label: "가설 설정", content: "온보딩이 길고 복잡해서 초기 이탈 발생" },
      { label: "실험", content: "상황별 선택 → 하드코딩 표현 구조로 전환" },
      { label: "결과", content: "온보딩 완료율 상승, study_time 질문 제거로 단축" },
    ],
  },
];

export default async function EnglishLogPage() {
  const { userCount, phrasesCount } = await getMelStats();

  const metrics = [
    { value: `${userCount}명`, label: "베타 가입자" },
    { value: "70.5%", label: "번역 → 저장 전환율" },
    { value: `${phrasesCount}개`, label: "저장된 표현" },
    { value: "53%", label: "번역 속도 개선" },
    { value: "200만원", label: "모두의 창업 지원금" },
  ];

  return (
    <main
      style={{ background: "var(--navy-950)", minHeight: "100vh" }}
    >
      {/* 뒤로가기 */}
      <div className="max-w-5xl mx-auto px-8 pt-12">
        <Suspense
          fallback={
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              ← 메인으로
            </Link>
          }
        >
          <ProjectsBackLink
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          />
        </Suspense>
      </div>

      {/* 헤더 */}
      <header className="max-w-5xl mx-auto px-8 pt-12 pb-16">
        <span className="badge mb-6 inline-block">기획 · 운영 · 2026.05~현재</span>
        <h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          MEL
          <br />
          <span style={{ color: "var(--accent)" }}>My English Log</span>
        </h1>
        <p
          className="text-xl leading-relaxed max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          번역과 학습을 하나의 루프로 연결하는 영어 학습 서비스.
          기획부터 개발, 데이터 분석, 운영까지 직접 수행하고 있습니다.
        </p>
      </header>

      {/* 핵심 수치 */}
      <div
        className="max-w-5xl mx-auto px-8 mb-20"
      >
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-px rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--border)", background: "var(--border)" }}
        >
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="px-5 py-5 flex flex-col gap-1"
              style={{ background: "var(--navy-800)" }}
            >
              <span
                className="text-2xl font-bold metric"
                style={{ color: "var(--text-primary)" }}
              >
                {value}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 프로세스 — 단계별 */}
      <section className="max-w-5xl mx-auto px-8 mb-24">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          Problem · Data · Execution · Result
        </p>

        <div className="flex flex-col gap-0">
          {processSteps.map(({ step, title, body }, i) => (
            <div
              key={step}
              className="flex gap-8 pb-12"
              style={{
                borderLeft: "1px solid var(--border)",
                paddingLeft: "2rem",
                marginLeft: "1.5rem",
                position: "relative",
              }}
            >
              {/* 스텝 번호 원 */}
              <div
                className="absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{
                  background: "var(--navy-950)",
                  border: "1px solid var(--border-hover)",
                  color: "var(--accent)",
                }}
              >
                {step}
              </div>

              <div className="flex flex-col gap-3 pt-1">
                <h3
                  className="text-lg font-semibold"
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
            </div>
          ))}
        </div>
      </section>

      {/* 의사결정 루프 — 인라인 플로우 */}
      <section className="max-w-5xl mx-auto px-8 mb-24">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          데이터 기반 의사결정 루프
        </p>
        <div className="flex flex-col gap-4">
          {decisionLoops.map(({ title, steps }) => (
            <div
              key={title}
              className="rounded-xl p-8"
              style={{ background: "var(--navy-800)", border: "1px solid var(--border)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                {title}
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                {steps.map(({ label, content }, i) => (
                  <div key={label} className="flex items-center gap-3 flex-1">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <span
                        className="text-[10px] font-semibold uppercase tracking-widest"
                        style={{ color: "var(--accent)" }}
                      >
                        {label}
                      </span>
                      <p
                        className="text-sm leading-snug"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {content}
                      </p>
                    </div>
                    {i < steps.length - 1 && (
                      <span
                        className="text-lg shrink-0 hidden md:block"
                        style={{ color: "var(--text-muted)" }}
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI 활용 맥락 */}
      <section
        className="max-w-5xl mx-auto px-8 mb-24"
      >
        <div
          className="rounded-xl p-8 flex flex-col gap-4"
          style={{
            background: "var(--navy-700)",
            border: "1px solid var(--border-hover)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            AI 활용
          </p>
          <h3
            className="text-xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            비개발자가 서비스를 직접 만들고 운영하는 방식
          </h3>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            MEL은 전담 개발자 없이 운영됩니다. Claude · ChatGPT를 파트너로
            삼아 기획부터 코드 작성, GitHub → Vercel 배포 자동화까지
            운영 프로세스 전체를 파이프라인화했습니다. 팀용·사용자용
            배포를 분리해 안전하게 실험하는 구조도 직접 설계했습니다.
            AI를 단순 코드 생성 도구가 아닌 의사결정 파트너로 써서,
            개발 리소스 한계 안에서 비즈니스 속도를 어디까지 높일 수
            있는지 실험하고 증명해 나가고 있습니다.
          </p>
        </div>
      </section>

      {/* 하단 CTA */}
      <section
        className="max-w-5xl mx-auto px-8 pb-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}
      >
        <div>
          <p
            className="text-sm mb-1"
            style={{ color: "var(--text-muted)" }}
          >
            서비스 바로가기
          </p>
          <a
            href="https://my-english-log-team.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold transition-colors"
            style={{ color: "var(--accent)" }}
          >
            my-english-log-team.vercel.app ↗
          </a>
        </div>
        <Suspense
          fallback={
            <Link
              href="/#projects"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
            >
              ← 다른 프로젝트 보기
            </Link>
          }
        >
          <ProjectsBackLink
            label="← 다른 프로젝트 보기"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          />
        </Suspense>
      </section>
    </main>
  );
}