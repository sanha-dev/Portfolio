export default function Footer() {
  return (
    <footer
      className="max-w-6xl mx-auto px-8 py-10"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          박산하
          <span style={{ color: "var(--accent)" }}>.</span>
          <span
            className="font-normal ml-3"
            style={{ color: "var(--text-muted)" }}
          >
            © 2026
          </span>
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:hobby011064@gmail.com"
            className="text-xs transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/sanha-park"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            LinkedIn
          </a>
          <a
            href="https://my-english-log.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            MEL ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
