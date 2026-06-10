import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `Eres un analizador experto en pseudociencia y marketing de suplementos, alimentos y bebidas para la salud. Tu trabajo es evaluar afirmaciones sobre sus propiedades y determinar cuánto "humo" contienen.

Evalúa la afirmación según estos criterios:
- Evidencia científica real en humanos (RCTs, meta-análisis)
- Lenguaje de marketing exagerado o absoluto
- Cuantificaciones extremas sin respaldo
- Terminología pseudocientífica
- Conflictos de interés evidentes
- Mecanismos biológicos plausibles

Debes devolver SIEMPRE un JSON con esta estructura exacta:
{
  "nivelHumo": "bajo" | "moderado" | "alto" | "astronómico",
  "puntuacion": <número del 1 al 10, donde 10 es máximo humo>,
  "titular": "<frase corta que resume el veredicto>",
  "explicacion": "<explicación detallada de 2-4 frases sobre por qué esta afirmación tiene ese nivel de humo>",
  "señalesDeAlerta": ["<señal 1>", "<señal 2>", "<señal 3>"],
  "queComprobar": ["<acción 1>", "<acción 2>", "<acción 3>"]
}

Criterios para nivelHumo:
- "bajo" (puntuación 1-3): La afirmación tiene respaldo científico sólido en humanos
- "moderado" (puntuación 4-6): Hay algo de evidencia pero limitada, exagerada o con matices importantes
- "alto" (puntuación 7-8): La afirmación es exagerada, sin respaldo adecuado o usa lenguaje terapéutico indebido
- "astronómico" (puntuación 9-10): Marketing puro, pseudociencia o afirmaciones imposibles de verificar

Sé directo, escéptico y basado en evidencia. Habla en español.`;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const afirmacion: string = body.afirmacion?.trim();

  if (!afirmacion) {
    return NextResponse.json({ error: "Afirmación requerida" }, { status: 400 });
  }

  if (afirmacion.length > 1000) {
    return NextResponse.json({ error: "Afirmación demasiado larga" }, { status: 400 });
  }

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Analiza esta afirmación: "${afirmacion}"`,
        },
      ],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return NextResponse.json({ error: "Sin respuesta del modelo" }, { status: 500 });
    }

    const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "Respuesta inválida del modelo" }, { status: 500 });
    }

    const resultado = JSON.parse(jsonMatch[0]);
    return NextResponse.json(resultado);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
