import Link from "next/link";
import { items, getGrandesAliados } from "@/data/items";
import ItemCard from "@/components/ItemCard";

const topAliados = getGrandesAliados().slice(0, 3);

export default function Home() {
  const totalItems = items.length;
  const conEvidenciaSolida = items.filter((i) => i.evidencia >= 7).length;
  const merecenLaPena = items.filter((i) => i.veredicto === "Merece la pena").length;
  const probableHumo = items.filter((i) => i.veredicto === "Probablemente humo").length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
      {/* Hero */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span className="text-xs font-medium text-emerald-700">
            Sin marketing. Sin milagros. Solo evidencia.
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight max-w-2xl">
          Qué comer, qué beber y qué tomar para vivir{" "}
          <span className="text-emerald-600">más y mejor</span>
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
          Evaluamos alimentos, bebidas y suplementos por evidencia real, coste y
          seguridad. Para hombres de 40+ que quieren resultados sin caer en el hype
          ni en los 80€ de NMN al mes.
        </p>
        <p className="text-sm text-zinc-400 max-w-lg">
          Spoiler: la mayoría de los grandes aliados son alimentos reales, no suplementos.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            Ver el catálogo completo
          </Link>
          <Link
            href="/grandes-aliados"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-500 transition-colors"
          >
            Grandes aliados
          </Link>
          <Link
            href="/ranking"
            className="inline-flex items-center gap-2 bg-white text-zinc-700 border border-zinc-200 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
          >
            Ranking por retorno
          </Link>
          <Link
            href="/detector"
            className="inline-flex items-center gap-2 bg-white text-zinc-700 border border-zinc-200 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
          >
            Detector de humo
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Elementos evaluados", value: `${totalItems}` },
          { label: "Con evidencia sólida", value: `${conEvidenciaSolida}` },
          { label: "Que merecen la pena", value: `${merecenLaPena}` },
          { label: "Probablemente humo", value: `${probableHumo}` },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white border border-zinc-200 rounded-xl p-4 text-center"
          >
            <div className="text-3xl font-bold text-zinc-900">{value}</div>
            <div className="text-xs text-zinc-400 mt-1 leading-tight">{label}</div>
          </div>
        ))}
      </section>

      {/* Top aliados */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900">
            Los grandes aliados
          </h2>
          <Link
            href="/grandes-aliados"
            className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {topAliados.map((i) => (
            <ItemCard key={i.id} item={i} />
          ))}
        </div>
      </section>

      {/* Cómo evaluamos */}
      <section className="bg-white border border-zinc-200 rounded-2xl p-8 space-y-6">
        <h2 className="text-xl font-bold text-zinc-900">Cómo evaluamos</h2>
        <div className="grid sm:grid-cols-4 gap-6">
          {[
            {
              icon: "🔬",
              title: "Evidencia",
              desc: "Del 1 al 10 según la solidez: RCTs, meta-análisis, tamaño muestral y reproducibilidad.",
            },
            {
              icon: "💶",
              title: "Coste",
              desc: "Bajo, medio o alto según el precio real mensual en España.",
            },
            {
              icon: "🛡️",
              title: "Seguridad",
              desc: "Efectos adversos conocidos, interacciones y tiempo de uso documentado.",
            },
            {
              icon: "📈",
              title: "Retorno",
              desc: "Juicio compuesto: ¿vale la pena el tiempo, dinero y esfuerzo invertido?",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="space-y-2">
              <span className="text-2xl">{icon}</span>
              <h3 className="font-semibold text-zinc-800">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA detector */}
      <section className="bg-zinc-900 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white">
            ¿Te han vendido la moto?
          </h2>
          <p className="text-zinc-400 text-sm max-w-md">
            Pega cualquier afirmación sobre alimentos o suplementos y te decimos
            cuánto humo contiene. &ldquo;El NMN rejuvenece 10 años&rdquo;.
            &ldquo;El resveratrol activa los genes de la longevidad&rdquo;.
          </p>
        </div>
        <Link
          href="/detector"
          className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          Probar el detector
        </Link>
      </section>
    </div>
  );
}
