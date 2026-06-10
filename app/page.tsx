import Link from "next/link";
import { suplementos } from "@/data/suplementos";
import SuplementoCard from "@/components/SuplementoCard";

const topSuplementos = suplementos
  .filter((s) => s.veredicto === "Merece la pena")
  .slice(0, 3);

export default function Home() {
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
          Descubre qué suplementos y hábitos merecen la pena{" "}
          <span className="text-emerald-600">de verdad</span>
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
          Según evidencia, coste y seguridad. Para hombres de 40+ que quieren mejorar
          su salud sin caer en el hype de Bryan Johnson ni en los 80€ de NMN al mes.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/suplementos"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            Ver todos los suplementos
          </Link>
          <Link
            href="/ranking"
            className="inline-flex items-center gap-2 bg-white text-zinc-700 border border-zinc-200 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
          >
            Ver el ranking por objetivos
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
          { label: "Suplementos analizados", value: `${suplementos.length}` },
          {
            label: "Con evidencia sólida",
            value: `${suplementos.filter((s) => s.evidencia >= 7).length}`,
          },
          {
            label: "Que merecen la pena",
            value: `${suplementos.filter((s) => s.veredicto === "Merece la pena").length}`,
          },
          {
            label: "Probablemente humo",
            value: `${suplementos.filter((s) => s.veredicto === "Probablemente humo").length}`,
          },
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

      {/* Top picks */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-zinc-900">
            Los que de verdad merecen la pena
          </h2>
          <Link
            href="/ranking"
            className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            Ver ranking completo →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {topSuplementos.map((s) => (
            <SuplementoCard key={s.slug} s={s} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border border-zinc-200 rounded-2xl p-8 space-y-6">
        <h2 className="text-xl font-bold text-zinc-900">Cómo evaluamos</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: "🔬",
              title: "Evidencia",
              desc: "Puntuamos del 1 al 10 según la solidez de los estudios: RCTs, meta-análisis, tamaño muestral y reproducibilidad.",
            },
            {
              icon: "💶",
              title: "Coste real",
              desc: "Bajo, medio o alto según el precio mensual real en España, comparando con alternativas alimenticias.",
            },
            {
              icon: "🛡️",
              title: "Seguridad",
              desc: "Perfil de efectos adversos, interacciones medicamentosas conocidas y tiempo de uso seguro documentado.",
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
            Pega cualquier afirmación de suplemento y te decimos el nivel de humo.
            "El NMN rejuvenece 10 años". "La ashwagandha triplica tu testosterona".
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
