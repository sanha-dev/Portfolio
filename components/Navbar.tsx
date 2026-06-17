"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Career", href: "/#career" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (isHome && href.includes("#")) {
        const hash = href.split("#").pop();
        const el = hash ? document.getElementById(hash) : null;
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [isHome]
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(6, 9, 18, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          박산하
        </Link>

        {/* 링크 */}
        <div className="flex items-center gap-4 md:gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={(e) => handleHashClick(e, href)}
              className="text-sm transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* MEL CTA */}
        <a
          href="https://my-english-log-team.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium"
          style={{
            background: "rgba(79, 142, 247, 0.1)",
            border: "1px solid rgba(79, 142, 247, 0.2)",
            color: "var(--accent)",
          }}
        >
          MEL 서비스 ↗
        </a>
      </nav>
    </header>
  );
}