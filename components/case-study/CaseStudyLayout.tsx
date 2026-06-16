type Props = {
  company: string;
  title: string;
  period: string;

  summary: string;

  problem: string;
  analysis: string;
  action: string;
  result: string;

  learnings: string[];
};

export default function CaseStudyLayout({
  company,
  title,
  period,
  summary,
  problem,
  analysis,
  action,
  result,
  learnings,
}: Props) {
  return (
    <main className="max-w-5xl mx-auto px-8 py-24">

      <div className="mb-24">
        <p className="text-zinc-500 text-sm mb-4">
          {company}
        </p>

        <h1 className="text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-zinc-500">
          {period}
        </p>

        <p className="text-xl text-zinc-300 mt-10 leading-relaxed">
          {summary}
        </p>
      </div>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Problem
        </h2>

        <div className="border border-zinc-800 rounded-2xl p-8">
          {problem}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Analysis
        </h2>

        <div className="border border-zinc-800 rounded-2xl p-8">
          {analysis}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Action
        </h2>

        <div className="border border-zinc-800 rounded-2xl p-8">
          {action}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Result
        </h2>

        <div className="border border-zinc-800 rounded-2xl p-8">
          {result}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Key Learnings
        </h2>

        <div className="border border-zinc-800 rounded-2xl p-8">
          <ul className="space-y-4">
            {learnings.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}