import Link from "next/link";
import { getGrandesAliados } from "@/data/items";
import ItemCard from "@/components/ItemCard";

const tipoLabel: Record<string, string> = {
  alimento: "Alimentos",
  bebida: "Bebidas",
  suplemento: "Suplementos",
  habito_nutricional: "Hábitos",
};

const tipoOrden = ["alimento", "bebida", "suplemento"];

export default function GrandesAliadosPage() {
  const aliados = getGrandesAliados();

  const porTipo = tipoOrden.reduce<Record<string, typeof aliados>>(
    (acc, tipo) => {
      const grupo = aliados.filter((i) => i.tipo === tipo);
      if (grupo.length) acc[tipo] = grupo;
      return acc;
    },
    {}
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span className="text-xs font-medium text-emerald-700">
            Evidencia alta · Coste bajo o medio · Seguridad buena
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Grandes aliados
        </h1>
        <p className="text-zinc-500 max-w-xl leading-relaxed">
          Lo que merece un hueco fijo en tu vida. Estos {aliados.length} elementos
          combinan evidencia sólida, precio razonable y buen perfil de seguridad.
          Ninguno es un suplemento exótico ni cuesta una fortuna.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
          <p className="text-sm text-blue-800">
            <strong>Nota:</strong> La mayoría son alimentos reales. No es
            casualidad: la dieta siempre supera al suplemento cuando hay
            una alternativa alimentaria de calidad equivalente.
          </p>
        </div>
      </div>

      {/* Grupos por tipo */}
      {Object.entries(porTipo).map(([tipo, grupo]) => (
        <section key={tipo} className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-zinc-900">
              {tipoLabel[tipo]}
            </h2>
            <span className="text-sm text-zinc-400">
              {grupo.length} elemento{grupo.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {grupo.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white">
            ¿Buscas el retorno máximo?
          </h2>
          <p className="text-zinc-400 text-sm max-w-md">
            Consulta el ranking completo ordenado por impacto real.
            Los hábitos van primero, los suplementos exóticos, al final.
          </p>
        </div>
        <Link
          href="/ranking"
          className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          Ver ranking
        </Link>
      </div>
    </div>
  );
}
