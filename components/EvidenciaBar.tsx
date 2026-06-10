export default function EvidenciaBar({ valor }: { valor: number }) {
  const color =
    valor >= 8
      ? "bg-emerald-500"
      : valor >= 5
      ? "bg-amber-400"
      : "bg-red-400";

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-sm ${i < valor ? color : "bg-zinc-200"}`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-zinc-700">{valor}/10</span>
    </div>
  );
}
