type Props = {
  company: string;
  period: string;
  role: string;
  outcome: string;
};

export default function OverviewCard({
  company,
  period,
  role,
  outcome,
}: Props) {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-20">
      <div className="border border-zinc-800 rounded-xl p-5">
        <p className="text-xs text-zinc-500 mb-2">Company</p>
        <p>{company}</p>
      </div>

      <div className="border border-zinc-800 rounded-xl p-5">
        <p className="text-xs text-zinc-500 mb-2">Period</p>
        <p>{period}</p>
      </div>

      <div className="border border-zinc-800 rounded-xl p-5">
        <p className="text-xs text-zinc-500 mb-2">Role</p>
        <p>{role}</p>
      </div>

      <div className="border border-zinc-800 rounded-xl p-5">
        <p className="text-xs text-zinc-500 mb-2">Outcome</p>
        <p>{outcome}</p>
      </div>
    </div>
  );
}