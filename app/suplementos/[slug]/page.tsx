import { notFound } from "next/navigation";
import Link from "next/link";
import { getSuplementoBySlug, suplementos } from "@/data/suplementos";
import EvidenciaBar from "@/components/EvidenciaBar";

const veredictoStyles = {
  "Merece la pena": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Depende: "bg-amber-50 text-amber-700 border-amber-200",
  "Probablemente humo": "bg-red-50 text-red-700 border-red-200",
};

const costeIcons = { bajo: "€", medio: "€€", alto: "€€€" };

const seguridadStyles = {
  alta: "text-emerald-600 bg-emerald-50",
  media: "text-amber-600 bg-amber-50",
  baja: "text-red-600 bg-red-50",
};

export async function generateStaticParams() {
  return suplementos.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSuplementoBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.nombre} — longevidapp`,
    description: s.descripcionCorta,
  };
}

export default async function SuplementoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSuplementoBySlug(slug);
  if (!s) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      {/* Back */}
      <Link
        href="/suplementos"
        className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600 transition-colors"
      >
        ← Volver a suplementos
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
              {s.nombre}
            </h1>
            <span className="text-sm text-zinc-400 mt-1 block">{s.categoria}</span>
          </div>
          <span
            className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${
              veredictoStyles[s.veredicto]
            }`}
          >
            {s.veredicto}
          </span>
        </div>
        <p className="text-zinc-600 leading-relaxed text-lg">{s.descripcionCorta}</p>

        {/* Métricas */}
        <div className="flex flex-wrap gap-6 pt-2">
          <div className="space-y-1">
            <div className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
              Evidencia
            </div>
            <EvidenciaBar valor={s.evidencia} />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
              Coste
            </div>
            <div className="text-sm font-semibold text-zinc-700 capitalize">
              {costeIcons[s.coste]} {s.coste}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
              Seguridad
            </div>
            <span
              className={`text-sm font-semibold capitalize px-2 py-0.5 rounded ${
                seguridadStyles[s.seguridad]
              }`}
            >
              {s.seguridad}
            </span>
          </div>
        </div>
      </div>

      <hr className="border-zinc-200" />

      {/* Body */}
      <div className="space-y-8">
        <Section title="Para qué sirve">
          <p className="text-zinc-600 leading-relaxed">{s.paraQueSirve}</p>
        </Section>

        <Section title="Qué dice la evidencia">
          <p className="text-zinc-600 leading-relaxed">{s.queDiceLaEvidencia}</p>
        </Section>

        <div className="grid sm:grid-cols-2 gap-6">
          <Section title="Para quién tiene sentido">
            <ul className="space-y-1.5">
              {s.paraQuienTieneSentido.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Para quién no">
            <ul className="space-y-1.5">
              {s.paraQuienNo.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section title="Dosis orientativa">
          <div className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3">
            <p className="text-sm text-zinc-700 leading-relaxed">{s.dosisOrientativa}</p>
          </div>
        </Section>

        <Section title="Riesgos e interacciones">
          <ul className="space-y-1.5">
            {s.riesgosInteracciones.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">⚠</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Alternativas con mejor retorno">
          <ul className="space-y-1.5">
            {s.alternativas.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Referencias científicas">
          <ul className="space-y-2">
            {s.referencias.map((ref) => (
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
          siempre con tu médico antes de iniciar cualquier suplementación.
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
