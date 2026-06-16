"use client";

import Link from "next/link";

const stats = [
  { value: "102명", label: "MEL 베타 사용자" },
  { value: "70.5%", label: "번역→저장 전환율" },
  { value: "205명", label: "토스쇼핑 셀러 입점" },
  { value: "KPI 147%", label: "토스쇼핑 8월 달성" },
];

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-8 pt-40 pb-28">

      {/* 포지셔닝 태그 */}
      <p className="text-accent text-sm font-medium uppercase tracking-widest mb-10">
        Business Development · Sales Strategy · Business Planning
      </p>

      {/* 메인 헤드라인 */}
      <h1 className="text-5xl md:text-[68px] font-bold leading-[1.1] tracking-tight max-w-5xl">
        고객을 이해하고,{" "}
        <br className="hidden md:block" />
        데이터로 문제를 정의하며,{" "}
        <br className="hidden md:block" />
        <span className="text-accent">실행으로 성과를 만듭니다.</span>
      </h1>

      {/* 서브 카피 */}
      <p className="text-lg md:text-xl text-secondary mt-8 max-w-2xl leading-relaxed">
        토스쇼핑에서 셀러 영업 KPI를 147% 달성했고,
        현재는 영어 학습 서비스 MEL을 공동 창업해
        운영하고 있습니다.
      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 mt-12">
        <Link
          href="#projects"
          className="px-7 py-3.5 rounded-lg font-medium text-sm"
          style={{
            background: "var(--accent)",
            color: "var(--navy-950)",
          }}
        >
          케이스 스터디 보기
        </Link>
        <Link
          href="#contact"
          className="px-7 py-3.5 rounded-lg font-medium text-sm border"
          style={{
            borderColor: "var(--border-hover)",
            color: "var(--text-secondary)",
          }}
        >
          연락하기
        </Link>
      </div>

      {/* 핵심 수치 */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--border)", background: "var(--border)" }}
      >
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="px-6 py-5 flex flex-col gap-1"
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
    </section>
  );
}