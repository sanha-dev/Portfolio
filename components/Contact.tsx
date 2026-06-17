const targetRoles = ["Business Development", "영업기획", "사업기획"];

const links = [
  {
    label: "Email",
    value: "psh4996@naver.com",
    href: "mailto:psh4996@naver.com",
    external: false,
  },
  {
    label: "MEL 서비스",
    value: "my-english-log-team.vercel.app",
    href: "https://my-english-log-team.vercel.app",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        Contact
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            함께 문제를
            <br />
            풀어나갈 기회를
            <br />
            찾고 있습니다.
          </h2>

          {/* 지망 직무 */}
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            지망 직무
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {targetRoles.map((role) => (
              <span
                key={role}
                className="px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(79, 142, 247, 0.12)",
                  border: "1px solid rgba(79, 142, 247, 0.25)",
                  color: "var(--accent)",
                }}
              >
                {role}
              </span>
            ))}
          </div>

          <p
            className="text-base leading-relaxed max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            직접 부딪히고 데이터로 증명하는 방식을 선호합니다.
            포트폴리오를 보고 궁금한 점이 생겼다면 편하게 연락 주세요.
          </p>
        </div>

        <div className="flex flex-col gap-4 shrink-0">
          {links.map(({ label, value, href, external }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </span>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium transition-opacity hover:opacity-70"
                  style={{ color: "var(--accent)" }}
                >
                  {value} ↗
                </a>
              ) : (
                <a
                  href={href}
                  className="text-base font-medium transition-opacity hover:opacity-70"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
