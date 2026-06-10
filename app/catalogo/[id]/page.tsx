import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemById, items } from "@/data/items";
import EvidenciaBar from "@/components/EvidenciaBar";

const veredictoStyles = {
  "Merece la pena": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Depende: "bg-amber-50 text-amber-700 border-amber-200",
  "Probablemente humo": "bg-red-50 text-red-700 border-red-200",
};

const costeLabel: Record<string, string> = {
  ninguno: "Gratuito",
  bajo: "€ Bajo",
  medio: "€€ Medio",
  alto: "€€€ Alto",
};

const seguridadStyles = {
  alta: "text-emerald-600 bg-emerald-50",
  media: "text-amber-600 bg-amber-50",
  baja: "text-red-600 bg-red-50",
};

const retornoStyles = {
  alto: "text-emerald-600 bg-emerald-50",
  medio: "text-amber-600 bg-amber-50",
  bajo: "text-red-600 bg-red-50",
};

const tipoLabel: Record<string, string> = {
  alimento: "Alimento",
  bebida: "Bebida",
  suplemento: "Suplemento",
  habito_nutricional: "Hábito nutricional",
};

export async function generateStaticParams() {
  return items.map((i) => ({ id: i.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getItemById(id);
  if (!item) return {};
  return {
    title: `${item.nombre} — longevidapp`,
    description: item.descripcion,
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getItemById(id);
  if (!item) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      {/* Back */}
      <Link
        href="/catalogo"
        className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600 transition-colors"
      >
        ← Volver al catálogo
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                {item.nombre}
              </h1>
              <span className="text-xs bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded font-medium">
                {tipoLabel[item.tipo]}
              </span>
            </div>
            <span className="text-sm text-zinc-400">{item.categoria}</span>
          </div>
          <span
            className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${
              veredictoStyles[item.veredicto]
            }`}
          >
            {item.veredicto}
          </span>
        </div>

        <p className="text-zinc-600 leading-relaxed text-lg">{item.descripcion}</p>

        {/* Métricas */}
        <div className="flex flex-wrap gap-6 pt-2">
          <div className="space-y-1">
            <div className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
              Evidencia
            </div>
            <EvidenciaBar valor={item.evidencia} />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
              Coste
            </div>
            <div className="text-sm font-semibold text-zinc-700">
              {costeLabel[item.coste]}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
              Seguridad
            </div>
            <span
              className={`text-sm font-semibold capitalize px-2 py-0.5 rounded ${
                seguridadStyles[item.seguridad]
              }`}
            >
              {item.seguridad}
            </span>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
              Retorno
            </div>
            <span
              className={`text-sm font-semibold capitalize px-2 py-0.5 rounded ${
                retornoStyles[item.retorno]
              }`}
            >
              {item.retorno}
            </span>
          </div>
        </div>
      </div>

      <hr className="border-zinc-200" />

      <div className="space-y-8">
        {/* Evidencia detallada (suplementos) */}
        {item.evidenciaDetalle && (
          <Section title="Qué dice la evidencia">
            <p className="text-zinc-600 leading-relaxed">{item.evidenciaDetalle}</p>
          </Section>
        )}

        {/* Beneficios */}
        <Section title="Por qué tiene valor">
          <ul className="space-y-2">
            {item.beneficios.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-zinc-600">
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </Section>

        {/* Para quién / Para quién no (suplementos) */}
        {(item.paraQuien?.length || item.paraQuienNo?.length) ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {item.paraQuien && item.paraQuien.length > 0 && (
              <Section title="Para quién tiene sentido">
                <ul className="space-y-1.5">
                  {item.paraQuien.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            {item.paraQuienNo && item.paraQuienNo.length > 0 && (
              <Section title="Para quién no">
                <ul className="space-y-1.5">
                  {item.paraQuienNo.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </div>
        ) : null}

        {/* Contexto de uso (suplementos) */}
        {item.contextoUso && (
          <Section title="Contexto de uso / Dosis orientativa">
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3">
              <p className="text-sm text-zinc-700 leading-relaxed">{item.contextoUso}</p>
            </div>
          </Section>
        )}

        {/* Limitaciones */}
        <Section title="Limitaciones y precauciones">
          <ul className="space-y-1.5">
            {item.limitaciones.map((l) => (
              <li key={l} className="flex items-start gap-2 text-sm text-zinc-600">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">⚠</span>
                {l}
              </li>
            ))}
          </ul>
        </Section>

        {/* Alternativas */}
        {item.alternativas.length > 0 && (
          <Section title="Alternativas con mejor retorno">
            <ul className="space-y-1.5">
              {item.alternativas.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-zinc-600">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                  {a}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Referencias */}
        <Section title="Referencias científicas">
          <ul className="space-y-2">
            {item.referencias.map((ref) => (
              <li key={ref.url}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-600 hover:text-emerald-800 hover:underline leading-relaxed"
                >
                  {ref.titulo} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
        <p className="text-sm text-amber-800">
          Información educativa. No sustituye el consejo médico profesional. Consulta
          siempre con tu médico o dietista antes de hacer cambios significativos en tu
          alimentación o suplementación.
        </p>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-base font-semibold text-zinc-900 border-b border-zinc-100 pb-1">
        {title}
      </h2>
      {children}
    </div>
  );
}
