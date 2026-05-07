export function MetricGrid({ metrics }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="border-l border-[#4a0a0a]/20 pl-6">
          <strong className="block text-4xl font-bold leading-none text-[#4a0a0a] md:text-6xl">
            {metric.value}
          </strong>
          <span className="mt-3 block text-xs font-extrabold uppercase tracking-[0.18em] text-[#6b5d57]">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
}
