import Link from "next/link";
import { Suplemento } from "@/types";

const veredictoStyles = {
  "Merece la pena": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Depende: "bg-amber-50 text-amber-700 border-amber-200",
  "Probablemente humo": "bg-red-50 text-red-700 border-red-200",
};

const costeLabel = {
  bajo: "Coste bajo",
  medio: "Coste medio",
  alto: "Coste alto",
};

const seguridadLabel = {
  alta: "Seguridad alta",
  media: "Seguridad media",
  baja: "Seguridad baja",
};

const seguridadStyles = {
  alta: "text-emerald-600",
  media: "text-amber-600",
  baja: "text-red-600",
};

export default function SuplementoCard({ s }: { s: Suplemento }) {
  return (
    <Link
      href={`/suplementos/${s.slug}`}
      className="block bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-400 hover:shadow-sm transition-all group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">
            {s.nombre}
          </h3>
          <span className="text-xs text-zinc-400 mt-0.5 block">{s.categoria}</span>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap ${
            veredictoStyles[s.veredicto]
          }`}
        >
          {s.veredicto}
        </span>
      </div>

      <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">
        {s.descripcionCorta}
      </p>

      <div className="flex items-center gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-zinc-700">Evidencia</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-sm ${
                  i < s.evidencia ? "bg-emerald-500" : "bg-zinc-200"
                }`}
              />
            ))}
          </div>
          <span className="text-zinc-400">{s.evidencia}/10</span>
        </div>
        <span>·</span>
        <span>{costeLabel[s.coste]}</span>
        <span>·</span>
        <span className={seguridadStyles[s.seguridad]}>
          {seguridadLabel[s.seguridad]}
        </span>
      </div>
    </Link>
  );
}
