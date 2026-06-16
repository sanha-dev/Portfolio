"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const stats = [
  { value: "KPI 147%", label: "토스쇼핑 월별 최고 달성" },
  { value: "2,830만원", label: "미스터멘션 결제 창출" },
  { value: "1위 선정", label: "현대오일뱅크 전략 프로젝트" },
  { value: "102명", label: "MEL 베타, 직접 창업·운영" },
];

export default function Hero() {
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
            고객을 이해하고,{" "}
            <br className="hidden md:block" />
            데이터로 문제를 정의하며,{" "}
            <br className="hidden md:block" />
            <span className="text-accent">실행으로 성과를 만듭니다.</span>
          </h1>

          {/* 서브 카피 */}
          <p
            className="text-lg md:text-xl mt-8 max-w-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            토스쇼핑에서 셀러 영업 KPI 147%를 달성했고,
            <br className="hidden md:block" />
            현재는 영어 학습 서비스 MEL을 공동 창업해 운영 중입니다.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="#projects"
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
                MEL 공동 창업 · 운영
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
