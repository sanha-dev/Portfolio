import Link from "next/link";

type Props = {
  previous?: {
    title: string;
    link: string;
  };

  next?: {
    title: string;
    link: string;
  };
};

export default function CaseStudyNavigation({
  previous,
  next,
}: Props) {
  return (
    <div className="border-t border-zinc-800 mt-24 pt-12">

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          {previous && (
            <Link href={previous.link}>
              <div className="border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition">

                <p className="text-zinc-500 text-sm mb-2">
                  Previous
                </p>

                <h3 className="font-semibold">
                  {previous.title}
                </h3>

              </div>
            </Link>
          )}
        </div>

        <div>
          {next && (
            <Link href={next.link}>
              <div className="border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition">

                <p className="text-zinc-500 text-sm mb-2">
                  Next
                </p>

                <h3 className="font-semibold">
                  {next.title}
                </h3>

              </div>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}