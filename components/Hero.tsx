"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero({ userCount = 102 }: { userCount?: number }) {
  const stats = [
    { value: "KPI 147%", label: "토스쇼핑 월별 최고 달성" },
    { value: "2,830만원", label: "미스터멘션 결제 창출" },
    { value: "1위 선정", label: "현대오일뱅크 전략 프로젝트" },
    { value: `${userCount}명`, label: "MEL 베타 직접 운영" },
  ];
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-8 pt-36 pb-24">

      {/* 상단: 텍스트 + 사진 */}
      <div className="flex items-start gap-12">

        {/* 텍스트 영역 */}
        <div className="flex-1 min-w-0">

          {/* 포지셔닝 태그 */}
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-10">
            Business Development · Sales Strategy · Business Planning
          </p>

          {/* 메인 헤드라인 */}
          <h1 className="text-5xl md:text-[64px] font-bold leading-[1.08] tracking-tight max-w-3xl">
            데이터 뒤의 맥락을 읽고,
            <br className="hidden md:block" />
            <span className="text-accent">
              시스템으로 비즈니스를
              <br className="hidden md:block" />
              효율화합니다.
            </span>
          </h1>

          {/* 서브 카피 */}
          <p
            className="text-lg md:text-xl mt-8 max-w-xl leading-relaxed"
            style={{ color: "var(--text-secondary)", wordBreak: "keep-all" }}
          >
            정량적 데이터 진단과 정성적 현장 인터뷰를 결합해 비즈니스의 진짜 병목을 해결합니다.
            플랫폼 B2B 파트너 관리부터 린(Lean)한 프로덕트 빌딩까지 — 역할과 도메인은 달랐지만
            문제를 정의하고 풀어내는 프레임워크는 동일했습니다.
          </p>

          {/* 역량 태그 */}
          <div className="flex flex-wrap gap-3 mt-5">
            {[
              { label: "Data & System", desc: "셀 대시보드 · 전사 온보딩 표준" },
              { label: "Tech Leverage", desc: "LLM 레버리지 · 전환율 70.5%" },
            ].map(({ label, desc }) => (
              <span
                key={label}
                className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(79,142,247,0.08)",
                  border: "1px solid rgba(79,142,247,0.2)",
                }}
              >
                <span className="font-semibold" style={{ color: "var(--accent)" }}>{label}</span>
                <span style={{ color: "var(--text-muted)" }}>— {desc}</span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-lg font-medium text-sm"
              style={{
                background: "var(--accent)",
                color: "var(--navy-950)",
              }}
            >
              프로젝트 보기
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-lg font-medium text-sm border"
              style={{
                borderColor: "var(--border-hover)",
                color: "var(--text-secondary)",
              }}
            >
              연락하기
            </Link>
          </div>
        </div>

        {/* 사진 — 태블릿 이상에서 표시 */}
        {!photoMissing && (
          <div className="hidden md:flex md:flex-col md:items-center shrink-0 mt-2">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: 200,
                height: 268,
                border: "1px solid var(--border-hover)",
                boxShadow: "0 0 48px rgba(79, 142, 247, 0.08)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="박산하"
                fill
                sizes="200px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
                onError={() => setPhotoMissing(true)}
              />
            </div>
            <div className="mt-4 text-center">
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                박산하
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                MEL 기획 · 운영
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 핵심 성과 — 4개 항목 */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--border)", background: "var(--border)" }}
      >
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="px-6 py-5 flex flex-col gap-1"
            style={{ background: "var(--navy-800)" }}
          >
            <span
              className="text-xl font-bold metric"
              style={{ color: "var(--text-primary)", whiteSpace: "nowrap" }}
            >
              {value}
            </span>
            <span className="text-xs leading-snug" style={{ color: "var(--text-muted)" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
