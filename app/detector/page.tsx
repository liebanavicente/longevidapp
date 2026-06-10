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

// Mock responses based on keyword patterns
function analizarAfirmacion(afirmacion: string): ResultadoDetector {
  const texto = afirmacion.toLowerCase();

  // High smoke patterns
  if (
    texto.includes("rejuvenece") ||
    texto.includes("rejuvenecer") ||
    texto.includes("años más joven") ||
    texto.includes("revertir el envejecimiento")
  ) {
    return {
      nivelHumo: "astronómico",
      puntuacion: 9,
      titular: "Afirmación de rejuvenecimiento: máxima alerta",
      explicacion:
        'Afirmaciones de "rejuvenecimiento" medible en años no tienen respaldo en estudios clínicos en humanos. El envejecimiento es un proceso complejo con cientos de mecanismos implicados. Ningún suplemento ha demostrado revertirlo de forma medible en personas reales. Esta es la afirmación clásica de marketing anti-aging: suena científica, apela al miedo, y no tiene que demostrar nada concreto.',
      señalesDeAlerta: [
        'Uso de número específico ("10 años") sin metodología de medición definida',
        "Apela a estudios en animales o células como prueba en humanos",
        "Normalmente respaldada por alguien con conflicto de interés económico",
        "Imposible de falsificar o comprobar en la práctica",
      ],
      queComprobar: [
        "Busca el estudio en PubMed: ¿es en humanos? ¿Cuántos participantes? ¿Quién lo financió?",
        'Busca el nombre del suplemento + "clinical trial" + "humans" en Google Scholar',
        "Comprueba si quien hace la afirmación tiene empresa o patente relacionada",
        "Pregúntate: ¿qué marcador concreto mide el 'rejuvenecimiento'?",
      ],
    };
  }

  if (
    texto.includes("triplica") ||
    texto.includes("multiplica") ||
    texto.includes("duplica") ||
    (texto.includes("testosterona") && texto.includes("aumenta"))
  ) {
    return {
      nivelHumo: "alto",
      puntuacion: 8,
      titular: "Afirmación hormonal exagerada",
      explicacion:
        "Los efectos de suplementos sobre testosterona endógena son, en el mejor caso, modestos (10-20% en hombres con niveles subóptimos). Afirmaciones de triplicar o duplicar niveles hormonales no tienen respaldo científico en estudios controlados. Para hombres con niveles normales, la mayoría de suplementos 'potenciadores de testosterona' no muestran efecto estadísticamente significativo.",
      señalesDeAlerta: [
        "Multiplicadores extremos sin referencia de punto de partida",
        "No especifica si el efecto es en personas con déficit o con niveles normales",
        "Confunde correlación con causalidad en estudios observacionales",
        "Suele acompañarse de testimoniales en lugar de datos",
      ],
      queComprobar: [
        "¿El estudio es en hombres con niveles bajos o normales de testosterona?",
        "¿Cuánto es el incremento en valores absolutos (ng/dL), no solo porcentual?",
        "¿Es un cambio dentro del rango normal o suprafisiológico?",
        "Busca el meta-análisis más reciente sobre ese suplemento y testosterona",
      ],
    };
  }

  if (
    texto.includes("cura") ||
    texto.includes("elimina") ||
    texto.includes("previene") ||
    texto.includes("anticancerígeno")
  ) {
    return {
      nivelHumo: "alto",
      puntuacion: 7,
      titular: "Afirmación terapéutica sin respaldo",
      explicacion:
        'Las afirmaciones de "cura", "elimina" o "previene" enfermedades específicas para suplementos son ilegales en la UE sin respaldo de estudios clínicos aprobados. Incluso cuando hay evidencia parcial (como el omega 3 y triglicéridos), el efecto es de reducción de riesgo, no de eliminación. Desconfía de cualquier suplemento que prometa efectos que los fármacos regulados no pueden garantizar.',
      señalesDeAlerta: [
        "Lenguaje absoluto sin matices probabilísticos",
        "Apela a estudios in vitro o en animales como prueba de eficacia en humanos",
        "No especifica tamaño del efecto ni magnitud real del beneficio",
        "Ausencia de advertencias o contraindicaciones",
      ],
      queComprobar: [
        "¿El estudio de referencia es en humanos y aleatorizado?",
        "¿Cuál es el NNT (número necesario a tratar) para obtener el beneficio?",
        "¿Qué dice la EFSA (Agencia Europea de Seguridad Alimentaria) sobre ese claim?",
        "Busca 'systematic review' o 'meta-analysis' del suplemento en PubMed",
      ],
    };
  }

  // Low smoke - evidence-based claims
  if (
    (texto.includes("creatina") && (texto.includes("fuerza") || texto.includes("masa muscular"))) ||
    (texto.includes("proteína") && texto.includes("músculo")) ||
    (texto.includes("vitamina d") && texto.includes("déficit")) ||
    (texto.includes("omega 3") && texto.includes("triglicéridos"))
  ) {
    return {
      nivelHumo: "bajo",
      puntuacion: 2,
      titular: "Afirmación respaldada por evidencia sólida",
      explicacion:
        "Esta afirmación está en línea con la literatura científica. Hay estudios controlados, meta-análisis y consenso entre organismos científicos independientes que respaldan este efecto. El tamaño del efecto es modesto pero real y replicable.",
      señalesDeAlerta: [
        "Incluso afirmaciones correctas pueden tener matices importantes",
        "El efecto puede ser mayor o menor según el punto de partida individual",
        "La calidad del producto y la dosis importan",
      ],
      queComprobar: [
        "Comprueba que la dosis en el producto coincide con la usada en estudios",
        "Verifica que no tienes contraindicaciones específicas",
        "Consulta si el beneficio aplica a tu situación concreta",
      ],
    };
  }

  // Moderate smoke - default
  return {
    nivelHumo: "moderado",
    puntuacion: 5,
    titular: "Afirmación con evidencia parcial o mixta",
    explicacion:
      "Esta afirmación puede tener algo de base, pero probablemente la evidencia es más débil, más limitada o más matizada de lo que sugiere el marketing. Puede haber estudios que la respalden, pero también otros que no la replican, o la evidencia puede ser en poblaciones específicas que no aplican a tu caso.",
    señalesDeAlerta: [
      "Ausencia de magnitud del efecto: ¿cuánto exactamente?",
      "No especifica en qué población se observó el efecto",
      "Puede basarse en estudios preliminares que aún no se han replicado",
      "Lenguaje vago: 'puede ayudar', 'podría mejorar'",
    ],
    queComprobar: [
      "Busca el meta-análisis más reciente (no el estudio individual más favorable)",
      "Comprueba el tamaño muestral y si el estudio fue financiado por la empresa",
      "Busca si hay estudios independientes que lo repliquen",
      "Evalúa si el coste/beneficio tiene sentido aunque el efecto sea real y pequeño",
    ],
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
    }, 800);
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
          <span className="text-xs font-medium text-amber-700">
            Mock educativo — no sustituye análisis científico real
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
          Analiza patrones lingüísticos comunes en el marketing de suplementos: afirmaciones
          absolutas, cuantificaciones extremas, terminología pseudocientífica y promesas sin
          mecanismo concreto. Es un filtro educativo, no un sistema de inteligencia artificial.
          Para análisis riguroso, acude siempre a PubMed y meta-análisis independientes.
        </p>
      </div>
    </div>
  );
}
