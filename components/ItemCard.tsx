import Link from "next/link";
import { Item } from "@/types";

const veredictoStyles = {
  "Merece la pena": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Depende: "bg-amber-50 text-amber-700 border-amber-200",
  "Probablemente humo": "bg-red-50 text-red-700 border-red-200",
};

const costeLabel: Record<string, string> = {
  ninguno: "Gratuito",
  bajo: "Coste bajo",
  medio: "Coste medio",
  alto: "Coste alto",
};

const seguridadStyles = {
  alta: "text-emerald-600",
  media: "text-amber-600",
  baja: "text-red-600",
};

const tipoLabel: Record<string, string> = {
  alimento: "Alimento",
  bebida: "Bebida",
  suplemento: "Suplemento",
  habito_nutricional: "Hábito",
};

const tipoBadge: Record<string, string> = {
  alimento: "bg-blue-50 text-blue-600",
  bebida: "bg-cyan-50 text-cyan-600",
  suplemento: "bg-violet-50 text-violet-600",
  habito_nutricional: "bg-orange-50 text-orange-600",
};

export default function ItemCard({ item }: { item: Item }) {
  return (
    <Link
      href={`/catalogo/${item.id}`}
      className="block bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-400 hover:shadow-sm transition-all group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">
              {item.nombre}
            </h3>
            <span
              className={`text-xs px-1.5 py-0.5 rounded font-medium ${tipoBadge[item.tipo]}`}
            >
              {tipoLabel[item.tipo]}
            </span>
          </div>
          <span className="text-xs text-zinc-400">{item.categoria}</span>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap flex-shrink-0 ${
            veredictoStyles[item.veredicto]
          }`}
        >
          {item.veredicto}
        </span>
      </div>

      <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">
        {item.descripcion}
      </p>

      <div className="flex items-center gap-4 text-xs text-zinc-500 flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-zinc-700">Evidencia</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-sm ${
                  i < item.evidencia ? "bg-emerald-500" : "bg-zinc-200"
                }`}
              />
            ))}
          </div>
          <span className="text-zinc-400">{item.evidencia}/10</span>
        </div>
        <span>·</span>
        <span>{costeLabel[item.coste]}</span>
        <span>·</span>
        <span className={seguridadStyles[item.seguridad]}>
          Seguridad {item.seguridad}
        </span>
      </div>
    </Link>
  );
}
