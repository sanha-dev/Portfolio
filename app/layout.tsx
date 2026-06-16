import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "박산하 — Business Development Portfolio",
  description:
    "고객을 이해하고 데이터를 통해 문제를 정의하며 실행으로 성과를 만드는 박산하의 포트폴리오입니다.",
  openGraph: {
    title: "박산하 — Business Development Portfolio",
    description:
      "고객 인사이트 · 데이터 기반 의사결정 · 실행력. 토스쇼핑 · 미스터멘션 · MEL 창업.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}