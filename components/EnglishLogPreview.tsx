import Link from "next/link";

export default function EnglishLogPreview() {
  return (
    <section
      id="english-log"
      className="max-w-6xl mx-auto px-8 py-32"
    >
      <p className="text-zinc-500 uppercase text-sm mb-12">
        Personal Project
      </p>

      <h2 className="text-5xl font-bold mb-8">
        My English Log
      </h2>

      <p className="text-zinc-400 max-w-3xl mb-12 leading-relaxed">
        영어 표현을 기록하고 복습하며,
        실제 사용할 수 있는 언어로 만드는 개인 프로젝트입니다.
      </p>

      <Link
        href="/english-log"
        className="inline-flex border border-zinc-700 rounded-xl px-5 py-3 hover:border-zinc-500 transition-all"
      >
        View Project
      </Link>
    </section>
  );
}