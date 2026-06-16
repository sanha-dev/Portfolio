import CaseStudyNavigation from "./CaseStudyNavigation";

type Metric = {
  title: string;
  value: string;
};

type Props = {
  company: string;
  title: string;
  period: string;

  skills: string[];

  metrics?: Metric[];

  problem: string;

  analysis: string[];
  actions: string[];
  result: string[];
  learnings: string[];
previous?: {
  title: string;
  link: string;
};

next?: {
  title: string;
  link: string;
};
};

export default function CaseStudyPage({
  company,
  title,
  period,
  skills,
  metrics,
  problem,
  analysis,
  actions,
  result,
  learnings,
  previous,
  next,
}: Props) {
  return (
    <main className="max-w-5xl mx-auto px-8 py-24">

      <div className="mb-20">

        <p className="text-zinc-500 mb-4">
          {company}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-zinc-400">
          {period}
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm px-3 py-1 border border-zinc-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {metrics && (
          <div className="grid md:grid-cols-3 gap-4 mt-12">

            {metrics.map((metric) => (
              <div
                key={metric.title}
                className="border border-zinc-800 rounded-2xl p-6"
              >
                <p className="text-zinc-500 text-sm mb-2">
                  {metric.title}
                </p>

                <p className="text-3xl font-bold">
                  {metric.value}
                </p>
              </div>
            ))}

          </div>
        )}

      </div>

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Problem
        </h2>

        <p className="text-zinc-300 leading-relaxed">
          {problem}
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Analysis
        </h2>

        <ul className="space-y-4">
          {analysis.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Actions
        </h2>

        <ul className="space-y-4">
          {actions.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Result
        </h2>

        <ul className="space-y-4">
          {result.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Learnings
        </h2>

        <ul className="space-y-4">
          {learnings.map((item) => (
            <li key={item}>
              • {item}
            </li>
          ))}
        </ul>
      </section>

<CaseStudyNavigation
  previous={previous}
  next={next}
/>

    </main>
  );
}