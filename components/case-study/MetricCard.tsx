type Props = {
  title: string;
  value: string;
};

export default function MetricCard({
  title,
  value,
}: Props) {
  return (
    <div className="border border-zinc-800 rounded-2xl p-6">

      <p className="text-zinc-500 text-sm mb-3">
        {title}
      </p>

      <p className="text-3xl font-bold">
        {value}
      </p>

    </div>
  );
}