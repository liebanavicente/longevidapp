"use client";

import { useState } from "react";

type NivelHumo = "bajo" | "moderado" | "alto" | "astronómico";

interface ResultadoDetector {
  nivelHumo: NivelHumo;
  puntuacion: number;
  titular: string;
  explicacion: string;
  señalesDeAlerta: string[];
  queComprobar: string[];
}

const nivelHumoConfig: Record<
  NivelHumo,
  { label: string; color: string; bg: string; border: string; emoji: string }
> = {
  bajo: {
    label: "Nivel de humo bajo",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    emoji: "🟢",
  },
  moderado: {
    label: "Nivel de humo moderado",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    emoji: "🟡",
  },
  alto: {
    label: "Nivel de humo alto",
    color: "text-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-200",
    emoji: "🟠",
  },
  astronómico: {
    label: "Nivel de humo astronómico",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
    emoji: "🔴",
  },
};

const ejemplos = [
  "El NMN rejuvenece 10 años",
  "La ashwagandha triplica la testosterona",
  "El resveratrol activa los genes de la longevidad",
  "La creatina ayuda a ganar masa muscular",
  "El colágeno elimina las arrugas",
  "El omega 3 protege el corazón",
];

// Suplementos con evidencia sólida en humanos
const EVIDENCIA_SOLIDA = [
  "creatina", "omega 3", "omega-3", "vitamina d", "vitamina d3", "magnesio",
  "cafeína", "cafeina", "proteína", "proteina", "fibra", "zinc",
  "melatonina", "folato", "ácido fólico", "acido folico", "hierro",
  "calcio", "vitamina b12", "yodo",
];

// Palabras que indican afirmaciones exageradas o cuantificaciones extremas
const SEÑALES_HUMO_ALTO = [
  "triplica", "duplica", "cuadruplica", "multiplica",
  "rejuvenece", "revierte", "cura", "elimina", "borra",
  "milagro", "milagroso", "revolucionario", "secreto",
  "médicos no quieren", "big pharma", "censurado",
  "100%", "instantáneo", "inmediato", "garantizado",
  "sin esfuerzo", "sin dieta", "sin ejercicio",
  "pierde", "adelgaza", "quema grasa",
  "años más joven", "años de vida",
];

// Palabras de marketing moderado
const SEÑALES_HUMO_MODERADO = [
  "activa", "potencia", "estimula", "optimiza", "mejora",
  "longevidad", "antiaging", "anti-aging", "antienvejecimiento",
  "detox", "depura", "limpia", "desintoxica",
  "genes", "mitocondria", "telómeros", "sirtuinas",
  "inflamación", "inflamacion", "cortisol", "testosterona",
  "inmunidad", "sistema inmune", "defensas",
  "serotonina", "dopamina", "endorfinas",
  "gut", "microbioma", "probiótico", "prebiótico",
];

// Suplementos conocidos como humo casi total
const HUMO_ASTRONOMICO = [
  "homeopatía", "homeopatia", "flores de bach", "agua cuántica",
  "agua cuantica", "energía cuántica", "energia cuantica",
  "cristales", "biomagnetismo", "biorresonancia",
  "detox de metales pesados", "limpieza hepática",
];

function analizarAfirmacion(texto: string): ResultadoDetector {
  const t = texto.toLowerCase();

  // Detectar humo astronómico
  const esAstronomico = HUMO_ASTRONOMICO.some((p) => t.includes(p));
  if (esAstronomico) {
    return {
      nivelHumo: "astronómico",
      puntuacion: 10,
      titular: "Pseudociencia sin base científica",
      explicacion:
        "Esta afirmación pertenece a categorías que carecen completamente de respaldo en literatura científica revisada por pares. No existe mecanismo biológico plausible ni ensayo clínico controlado que sustente este tipo de afirmaciones.",
      señalesDeAlerta: [
        "Sin mecanismo biológico verificable",
        "Ausencia total de ensayos clínicos en humanos",
        "Terminología pseudocientífica sin definición operativa",
      ],
      queComprobar: [
        "Buscar el término en PubMed — probablemente sin resultados relevantes",
        "Consultar Cochrane Library para revisiones sistemáticas",
        "Verificar si el organismo regulador (EFSA, FDA) ha emitido advertencias",
      ],
    };
  }

  const conteoHumoAlto = SEÑALES_HUMO_ALTO.filter((p) => t.includes(p)).length;
  const conteoModerado = SEÑALES_HUMO_MODERADO.filter((p) => t.includes(p)).length;
  const tieneEvidencia = EVIDENCIA_SOLIDA.some((p) => t.includes(p));

  // Porcentajes o números grandes son señal de alerta
  const tieneNumeroGrande = /\d{2,}[\s]*(%|por ciento|veces|años)/i.test(texto);
  const tienePorcentaje = /%/.test(texto);

  const señalesDetectadas: string[] = [];
  if (tieneNumeroGrande || tienePorcentaje)
    señalesDetectadas.push("Cuantificación específica sin respaldo en el contexto");
  if (conteoHumoAlto > 0)
    señalesDetectadas.push("Lenguaje de efecto absoluto o transformador");
  if (conteoModerado > 1)
    señalesDetectadas.push("Terminología de mecanismo sin ensayo clínico en humanos");
  if (!tieneEvidencia && conteoModerado > 0)
    señalesDetectadas.push("Suplemento con evidencia limitada o emergente");

  while (señalesDetectadas.length < 2)
    señalesDetectadas.push("Afirmación no especifica dosis, duración ni población diana");

  const queComprobar = [
    "Buscar meta-análisis en PubMed con el nombre del suplemento",
    "Comprobar si la EFSA o FDA han aprobado la afirmación de salud",
    "Verificar si los estudios son en humanos, no en ratas o in vitro",
  ];

  // Lógica de puntuación
  if (tieneEvidencia && conteoHumoAlto === 0 && conteoModerado <= 1) {
    return {
      nivelHumo: "bajo",
      puntuacion: 2,
      titular: "Evidencia sólida con matices importantes",
      explicacion:
        "Este ingrediente tiene respaldo en ensayos clínicos en humanos para el beneficio mencionado. Aunque la evidencia es más robusta que la mayoría, los efectos concretos dependen de dosis, forma, contexto de uso y población. Consulta los RCTs originales para entender el tamaño del efecto real.",
      señalesDeAlerta: [
        "El efecto puede ser modesto en personas sin déficit previo",
        "La calidad del suplemento varía según fabricante",
        "Los estudios no siempre reflejan tu contexto específico",
      ],
      queComprobar,
    };
  }

  if (tieneEvidencia && (conteoHumoAlto >= 1 || conteoModerado >= 2)) {
    return {
      nivelHumo: "moderado",
      puntuacion: 5,
      titular: "Ingrediente real, afirmación exagerada",
      explicacion:
        "El ingrediente tiene evidencia en humanos, pero la afirmación tal como está formulada exagera o simplifica los resultados. Los estudios suelen mostrar efectos más modestos, en poblaciones específicas y con dosis controladas. El lenguaje marketing amplifica el efecto real.",
      señalesDeAlerta: señalesDetectadas,
      queComprobar,
    };
  }

  if (conteoHumoAlto >= 2 || (conteoHumoAlto >= 1 && tieneNumeroGrande)) {
    return {
      nivelHumo: "astronómico",
      puntuacion: 9,
      titular: "Promesa imposible de verificar",
      explicacion:
        "La afirmación combina lenguaje de efecto absoluto con cuantificaciones que no tienen respaldo en la literatura científica. Este tipo de claims son característicos del marketing de suplementos con escasa o nula evidencia en humanos.",
      señalesDeAlerta: [
        "Promesa de resultado medible sin ensayo clínico que la respalde",
        "Lenguaje absoluto incompatible con la complejidad biológica",
        ...señalesDetectadas.slice(0, 1),
      ],
      queComprobar,
    };
  }

  if (conteoHumoAlto >= 1 || conteoModerado >= 2) {
    return {
      nivelHumo: "alto",
      puntuacion: 7,
      titular: "Afirmación exagerada sin respaldo adecuado",
      explicacion:
        "La afirmación usa mecanismos o promesas que superan lo que la evidencia actual puede sostener. Puede haber estudios preliminares o en animales, pero los ensayos en humanos son escasos, pequeños o con resultados mixtos. El lenguaje terapéutico no está justificado.",
      señalesDeAlerta: señalesDetectadas,
      queComprobar,
    };
  }

  return {
    nivelHumo: "moderado",
    puntuacion: 5,
    titular: "Evidencia insuficiente para la afirmación",
    explicacion:
      "La afirmación no es claramente falsa pero tampoco está bien respaldada. Puede haber señales prometedoras en investigación preliminar, pero la evidencia en humanos es limitada, inconsistente o no directamente aplicable a la afirmación concreta.",
    señalesDeAlerta: [
      "Evidencia mayoritariamente in vitro o en animales",
      "Falta de ensayos clínicos de calidad en humanos",
      "La afirmación generaliza más de lo que los datos permiten",
    ],
    queComprobar,
  };
}

export default function DetectorPage() {
  const [afirmacion, setAfirmacion] = useState("");
  const [resultado, setResultado] = useState<ResultadoDetector | null>(null);
  const [analizando, setAnalizando] = useState(false);

  const analizar = () => {
    if (!afirmacion.trim()) return;
    setAnalizando(true);
    setTimeout(() => {
      setResultado(analizarAfirmacion(afirmacion));
      setAnalizando(false);
    }, 600);
  };

  const config = resultado ? nivelHumoConfig[resultado.nivelHumo] : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Detector de humo
        </h1>
        <p className="text-zinc-500 leading-relaxed">
          Pega una afirmación de suplemento y te decimos cuánto humo contiene.
          Basado en patrones comunes de marketing pseudocientífico.
        </p>
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
          <span className="text-xs font-medium text-amber-700">
            Análisis educativo basado en patrones — no sustituye revisión científica independiente
          </span>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-3">
        <textarea
          value={afirmacion}
          onChange={(e) => setAfirmacion(e.target.value)}
          placeholder={`"El NMN rejuvenece 10 años"\n"La ashwagandha triplica tu testosterona"`}
          rows={3}
          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none leading-relaxed"
        />
        <button
          onClick={analizar}
          disabled={!afirmacion.trim() || analizando}
          className="w-full bg-zinc-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {analizando ? "Analizando..." : "Detectar humo"}
        </button>
      </div>

      {/* Ejemplos */}
      <div className="space-y-2">
        <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
          Prueba con estos ejemplos
        </p>
        <div className="flex flex-wrap gap-2">
          {ejemplos.map((e) => (
            <button
              key={e}
              onClick={() => {
                setAfirmacion(e);
                setResultado(null);
              }}
              className="text-xs bg-white border border-zinc-200 text-zinc-500 px-3 py-1.5 rounded-full hover:border-zinc-400 hover:text-zinc-700 transition-colors"
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      {/* Resultado */}
      {resultado && config && (
        <div className={`border rounded-2xl p-6 space-y-5 ${config.bg} ${config.border}`}>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{config.emoji}</span>
              <span className={`text-base font-bold ${config.color}`}>
                {config.label}
              </span>
              <span className={`text-sm font-semibold ml-auto ${config.color}`}>
                {resultado.puntuacion}/10
              </span>
            </div>
            <h3 className="text-base font-semibold text-zinc-900">
              {resultado.titular}
            </h3>
          </div>

          <div className="bg-white/70 rounded-xl p-4 space-y-1">
            <p className="text-sm text-zinc-600 leading-relaxed">
              {resultado.explicacion}
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-zinc-700 mb-2">
                Señales de alerta detectadas
              </h4>
              <ul className="space-y-1.5">
                {resultado.señalesDeAlerta.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-zinc-600">
                    <span className="mt-0.5 flex-shrink-0">⚠</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-700 mb-2">
                Qué comprobar antes de comprar
              </h4>
              <ul className="space-y-1.5">
                {resultado.queComprobar.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-zinc-600">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">→</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={() => {
              setResultado(null);
              setAfirmacion("");
            }}
            className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            Analizar otra afirmación
          </button>
        </div>
      )}

      {/* Info */}
      <div className="bg-white border border-zinc-200 rounded-xl p-5 space-y-2">
        <h3 className="text-sm font-semibold text-zinc-800">
          ¿Cómo funciona el detector?
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Detecta patrones comunes de marketing pseudocientífico: lenguaje de efecto absoluto,
          cuantificaciones sin respaldo, mecanismos no probados en humanos y suplementos con
          escasa evidencia clínica. Es una herramienta educativa. Para análisis riguroso, acude
          siempre a PubMed y meta-análisis independientes.
        </p>
      </div>
    </div>
  );
}
