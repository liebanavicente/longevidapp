import Link from "next/link";

const grupos = [
  {
    id: "habitos",
    titulo: "Hábitos de base",
    subtitulo: "Sin esto, todo lo demás es ruido",
    items: [
      {
        posicion: 1,
        nombre: "Sueño 7-9 horas",
        tipo: "habito",
        descripcion:
          "Recuperación hormonal, cortisol, testosterona, función cognitiva. Ningún alimento ni suplemento lo sustituye.",
        impacto: 10,
        coste: "Gratuito",
        id: null,
      },
      {
        posicion: 2,
        nombre: "Entrenamiento de fuerza",
        tipo: "habito",
        descripcion:
          "El mejor antienvejecimiento conocido. Masa muscular, huesos, sensibilidad a la insulina, testosterona.",
        impacto: 10,
        coste: "Gratuito / Bajo",
        id: null,
      },
      {
        posicion: 3,
        nombre: "Cardio moderado (zona 2)",
        tipo: "habito",
        descripcion:
          "Salud cardiovascular, mitocondrias, VO2 max. 150-180 min/semana de caminata rápida o bici.",
        impacto: 9,
        coste: "Gratuito",
        id: null,
      },
    ],
  },
  {
    id: "alimentacion",
    titulo: "Alimentación de base",
    subtitulo: "Más impacto que cualquier suplemento. Más barato también.",
    items: [
      {
        posicion: 4,
        nombre: "Aceite de oliva virgen extra",
        tipo: "alimento",
        descripcion:
          "PREDIMED: reducción del 30% en eventos cardiovasculares. La grasa más respaldada por evidencia.",
        impacto: 9,
        coste: "Medio",
        id: "aceite-oliva",
      },
      {
        posicion: 5,
        nombre: "Huevos",
        tipo: "alimento",
        descripcion:
          "Proteína completa, colina, vitaminas liposolubles. El miedo al colesterol dietético ha quedado obsoleto.",
        impacto: 9,
        coste: "Bajo",
        id: "huevos",
      },
      {
        posicion: 6,
        nombre: "Sardinas",
        tipo: "alimento",
        descripcion:
          "Omega 3, proteína, calcio, vitamina D y B12. El suplemento de omega 3 más barato que existe.",
        impacto: 9,
        coste: "Bajo",
        id: "sardinas",
      },
      {
        posicion: 7,
        nombre: "Legumbres (lentejas, garbanzos)",
        tipo: "alimento",
        descripcion:
          "Proteína vegetal, fibra, minerales. Base de la dieta mediterránea y la longevidad en las zonas azules.",
        impacto: 8,
        coste: "Muy bajo",
        id: "lentejas",
      },
      {
        posicion: 8,
        nombre: "Yogur griego natural",
        tipo: "alimento",
        descripcion:
          "Alta proteína, probióticos, calcio. Uno de los mejores snacks para quien entrena.",
        impacto: 8,
        coste: "Bajo",
        id: "yogur-griego",
      },
      {
        posicion: 9,
        nombre: "Nueces y frutos secos",
        tipo: "alimento",
        descripcion:
          "Omega 3 vegetal, magnesio, vitamina E. Reducción de mortalidad total documentada.",
        impacto: 8,
        coste: "Medio",
        id: "nueces",
      },
      {
        posicion: 10,
        nombre: "Café",
        tipo: "bebida",
        descripcion:
          "Protección neurológica, hepática y metabólica. Uno de los alimentos más estudiados del mundo.",
        impacto: 8,
        coste: "Bajo",
        id: "cafe",
      },
    ],
  },
  {
    id: "suplementos",
    titulo: "Suplementos con alta evidencia",
    subtitulo: "Útiles cuando la dieta no llega o hay déficit real",
    items: [
      {
        posicion: 11,
        nombre: "Creatina monohidrato",
        tipo: "suplemento",
        descripcion:
          "El suplemento más respaldado por evidencia. Fuerza, masa muscular, posible neuroprotección.",
        impacto: 8,
        coste: "Bajo (~10-15€/mes)",
        id: "creatina",
      },
      {
        posicion: 12,
        nombre: "Vitamina D (si hay déficit)",
        tipo: "suplemento",
        descripcion:
          "Crítica si tienes déficit. Huesos, inmunidad, estado de ánimo. Analítica primero.",
        impacto: 8,
        coste: "Muy bajo (~3-5€/mes)",
        id: "vitamina-d",
      },
      {
        posicion: 13,
        nombre: "Omega 3 (si no comes pescado azul)",
        tipo: "suplemento",
        descripcion:
          "Triglicéridos, inflamación, corazón. Si ya comes sardinas 2x/semana, ahórratelo.",
        impacto: 7,
        coste: "Medio (~15-25€/mes)",
        id: "omega-3",
      },
      {
        posicion: 14,
        nombre: "Proteína whey (si no llegas)",
        tipo: "suplemento",
        descripcion:
          "Conveniente y eficaz para cubrir proteína. No es mágico: es solo proteína.",
        impacto: 7,
        coste: "Bajo (~20-30€/mes)",
        id: "proteina-whey",
      },
      {
        posicion: 15,
        nombre: "Magnesio glicinato",
        tipo: "suplemento",
        descripcion:
          "Sueño, estrés, función muscular. El déficit es muy común. Barato y seguro.",
        impacto: 7,
        coste: "Bajo (~8-15€/mes)",
        id: "magnesio",
      },
    ],
  },
  {
    id: "moderada",
    titulo: "Evidencia moderada",
    subtitulo: "Pueden tener sentido en contextos específicos",
    items: [
      {
        posicion: 16,
        nombre: "Ashwagandha",
        tipo: "suplemento",
        descripcion:
          "Para estrés crónico elevado. Modesto pero real. No es un potenciador hormonal milagroso.",
        impacto: 5,
        coste: "Medio (~15-25€/mes)",
        id: "ashwagandha",
      },
      {
        posicion: 17,
        nombre: "Melatonina (baja dosis)",
        tipo: "suplemento",
        descripcion:
          "Para jet lag o ritmo circadiano alterado. A dosis de 0.5-1mg, no las 5mg del mercado.",
        impacto: 5,
        coste: "Muy bajo (~5€/mes)",
        id: "melatonina",
      },
      {
        posicion: 18,
        nombre: "Té verde",
        tipo: "bebida",
        descripcion:
          "L-teanina + cafeína: foco sin ansiedad. EGCG con efecto antiinflamatorio modesto.",
        impacto: 5,
        coste: "Bajo",
        id: "te-verde",
      },
      {
        posicion: 19,
        nombre: "Colágeno (con vitamina C)",
        tipo: "suplemento",
        descripcion:
          "Para articulaciones, con resultados modestos. Para piel, el marketing supera la evidencia.",
        impacto: 4,
        coste: "Medio (~20-35€/mes)",
        id: "colageno",
      },
      {
        posicion: 20,
        nombre: "Multivitamínico",
        tipo: "suplemento",
        descripcion:
          "Red de seguridad barata si tu dieta es deficiente. No previene enfermedades en quienes comen bien.",
        impacto: 3,
        coste: "Bajo (~10-20€/mes)",
        id: "multivitaminico",
      },
    ],
  },
  {
    id: "evitar",
    titulo: "Evitar o reducir al máximo",
    subtitulo: "El retorno es negativo o mínimo para la salud",
    items: [
      {
        posicion: 21,
        nombre: "Refrescos zero",
        tipo: "bebida",
        descripcion:
          "Mejores que los azucarados, peores que el agua. Útiles como transición, no como hábito.",
        impacto: 2,
        coste: "Bajo",
        id: "refrescos-zero",
      },
      {
        posicion: 22,
        nombre: "Alcohol",
        tipo: "bebida",
        descripcion:
          "No existe nivel seguro. Cancerígeno, rompe el sueño, inhibe síntesis proteica.",
        impacto: 1,
        coste: "Medio",
        id: "alcohol",
      },
      {
        posicion: 23,
        nombre: "NMN / NAD+",
        tipo: "suplemento",
        descripcion:
          "Espectacular en ratones. Estudios en humanos pequeños y sin resultados concluyentes. Precio desorbitado.",
        impacto: 2,
        coste: "Muy alto (~80-150€/mes)",
        id: "nmn",
      },
      {
        posicion: 24,
        nombre: "Resveratrol",
        tipo: "suplemento",
        descripcion:
          "Ha fallado en todos los ensayos clínicos rigurosos. Biodisponibilidad pésima.",
        impacto: 1,
        coste: "Alto (~30-80€/mes)",
        id: "resveratrol",
      },
    ],
  },
];

export default function RankingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Ranking de mayor retorno
        </h1>
        <p className="text-zinc-500 leading-relaxed">
          Ordenado por impacto real esperado, no por precio ni por lo que vende
          mejor. Los hábitos van primero porque sin ellos todo lo demás es ruido.
          Los alimentos antes que los suplementos porque suelen ganar.
        </p>
      </div>

      {grupos.map((grupo) => (
        <section key={grupo.id} className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-zinc-900">{grupo.titulo}</h2>
            <p className="text-sm text-zinc-400">{grupo.subtitulo}</p>
          </div>
          <div className="space-y-3">
            {grupo.items.map((item) => (
              <RankingItem key={item.posicion} item={item} />
            ))}
          </div>
        </section>
      ))}

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
        <p className="text-sm text-amber-800">
          Este ranking es orientativo. El impacto individual varía según tu
          situación de partida, déficits específicos y estilo de vida. Información
          educativa, no consejo médico ni dietético.
        </p>
      </div>
    </div>
  );
}

function ImpactoBar({ valor }: { valor: number }) {
  const color =
    valor >= 8
      ? "bg-emerald-500"
      : valor >= 5
      ? "bg-amber-400"
      : valor >= 3
      ? "bg-orange-400"
      : "bg-red-400";

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-sm ${i < valor ? color : "bg-zinc-200"}`}
        />
      ))}
    </div>
  );
}

const tipoBadge: Record<string, string> = {
  habito: "bg-orange-50 text-orange-600",
  alimento: "bg-blue-50 text-blue-600",
  bebida: "bg-cyan-50 text-cyan-600",
  suplemento: "bg-violet-50 text-violet-600",
};

const tipoLabel: Record<string, string> = {
  habito: "hábito",
  alimento: "alimento",
  bebida: "bebida",
  suplemento: "suplemento",
};

function RankingItem({
  item,
}: {
  item: {
    posicion: number;
    nombre: string;
    tipo: string;
    descripcion: string;
    impacto: number;
    coste: string;
    id: string | null;
  };
}) {
  const content = (
    <div className="bg-white border border-zinc-200 rounded-xl p-4 flex items-start gap-4 hover:border-zinc-400 hover:shadow-sm transition-all">
      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold text-zinc-500">{item.posicion}</span>
      </div>
      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-zinc-900">{item.nombre}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              tipoBadge[item.tipo] ?? "bg-zinc-100 text-zinc-500"
            }`}
          >
            {tipoLabel[item.tipo] ?? item.tipo}
          </span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">{item.descripcion}</p>
        <div className="flex items-center gap-3 pt-0.5">
          <ImpactoBar valor={item.impacto} />
          <span className="text-xs text-zinc-400">{item.coste}</span>
        </div>
      </div>
    </div>
  );

  if (item.id) {
    return <Link href={`/catalogo/${item.id}`}>{content}</Link>;
  }
  return content;
}
