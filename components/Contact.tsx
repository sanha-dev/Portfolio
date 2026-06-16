const links = [
  {
    label: "Email",
    value: "hobby011064@gmail.com",
    href: "mailto:hobby011064@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sanha-park",
    href: "https://linkedin.com/in/sanha-park",
    external: true,
  },
  {
    label: "MEL 서비스",
    value: "my-english-log.vercel.app",
    href: "https://my-english-log.vercel.app",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-28"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        Contact
      </p>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            함께 문제를
            <br />
            풀어나갈 기회를 찾고 있습니다.
          </h2>
          <p
            className="text-base leading-relaxed max-w-md"
            style={{ color: "var(--text-secondary)" }}
          >
            Business Development · 영업기획 · 사업기획 분야에서
            고객 인사이트와 데이터를 실행으로 연결할 수 있는 자리에
            관심이 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-6 shrink-0">
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
