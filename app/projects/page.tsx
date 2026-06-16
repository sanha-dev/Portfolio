import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-24">

      <p className="text-zinc-500 uppercase text-sm mb-8">
        Portfolio
      </p>

      <h1 className="text-6xl font-bold mb-6">
        Business Development
        Case Studies
      </h1>

      <p className="text-zinc-400 max-w-3xl mb-20">
        문제를 정의하고,
        데이터를 통해 원인을 분석하며,
        실행을 통해 성과를 만든 경험들입니다.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>

    </main>
  );
}