"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function ProjectsBackLink({ label, className, style }: Props) {
  const searchParams = useSearchParams();
  const fromProjects = searchParams.get("ref") === "projects";
  const href = fromProjects ? "/projects" : "/#projects";

  const defaultLabel = fromProjects ? "← 프로젝트 목록으로" : "← 메인으로";

  return (
    <Link href={href} className={className} style={style}>
      {label ?? defaultLabel}
    </Link>
  );
}
