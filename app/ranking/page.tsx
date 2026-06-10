import Link from "next/link";

const categorias = [
  {
    id: "habitos",
    titulo: "Hábitos de base",
    subtitulo: "Sin esto, los suplementos son ruido",
    items: [
      {
        posicion: 1,
        nombre: "Sueño 7-9 horas",
        tipo: "habito",
        descripcion:
          "Recuperación hormonal, cortisol, testosterona, función cognitiva. No hay suplemento que lo sustituya.",
        impacto: 10,
        coste: "Gratuito",
        slug: null,
      },
      {
        posicion: 2,
        nombre: "Entrenamiento de fuerza",
        tipo: "habito",
        descripcion:
          "El mejor antienvejecimiento conocido. Masa muscular, huesos, sensibilidad a la insulina, testosterona.",
        impacto: 10,
        coste: "Bajo",
        slug: null,
      },
      {
        posicion: 3,
        nombre: "Cardio moderado (zona 2)",
        tipo: "habito",
        descripcion:
          "Salud cardiovascular, mitocondrias, VO2 max. 150-180 min/semana de caminata rápida o bici.",
        impacto: 9,
        coste: "Gratuito",
        slug: null,
      },
      {
        posicion: 4,
        nombre: "Dieta mediterránea + proteína adecuada",
        tipo: "habito",
        descripcion:
          "1.6-2.2g de proteína/kg. Aceite de oliva, verduras, legumbres, pescado. Más útil que cualquier suplemento.",
        impacto: 9,
        coste: "Bajo-Medio",
        slug: null,
      },
    ],
  },
  {
    id: "alta-evidencia",
    titulo: "Suplementos con alta evidencia",
    subtitulo: "Funcionan, son baratos, están bien estudiados",
    items: [
      {
        posicion: 5,
        nombre: "Creatina monohidrato",
        tipo: "suplemento",
        descripcion:
          "El suplemento más respaldado por evidencia. Fuerza, masa muscular, posible neuroprotección.",
        impacto: 8,
        coste: "Bajo (~10-15€/mes)",
        slug: "creatina",
      },
      {
        posicion: 6,
        nombre: "Vitamina D (si hay déficit)",
        tipo: "suplemento",
        descripcion:
          "Crítica si tienes déficit. Huesos, inmunidad, estado de ánimo. Analítica primero.",
        impacto: 8,
        coste: "Muy bajo (~3-5€/mes)",
        slug: "vitamina-d",
      },
      {
        posicion: 7,
        nombre: "Omega 3 (si no comes pescado)",
        tipo: "suplemento",
        descripcion:
          "Triglicéridos, inflamación, corazón. Si ya comes sardinas 2x/semana, ahórratelo.",
        impacto: 7,
        coste: "Medio (~15-25€/mes)",
        slug: "omega-3",
      },
      {
        posicion: 8,
        nombre: "Proteína whey (si no llegas)",
        tipo: "suplemento",
        descripcion:
          "Conveniente y eficaz para cubrir proteína. No es mágico: es solo proteína.",
        impacto: 7,
        coste: "Bajo (~20-30€/mes)",
        slug: "proteina-whey",
      },
      {
        posicion: 9,
        nombre: "Magnesio glicinato",
        tipo: "suplemento",
        descripcion:
          "Sueño, estrés, función muscular. El déficit es muy común. Barato y seguro.",
        impacto: 7,
        coste: "Bajo (~8-15€/mes)",
        slug: "magnesio",
      },
    ],
  },
  {
    id: "evidencia-moderada",
    titulo: "Evidencia moderada",
    subtitulo: "Pueden tener sentido en contextos específicos",
    items: [
      {
        posicion: 10,
        nombre: "Ashwagandha",
        tipo: "suplemento",
        descripcion:
          "Para estrés crónico elevado. Modesto pero real. No es un potenciador hormonal milagroso.",
        impacto: 5,
        coste: "Medio (~15-25€/mes)",
        slug: "ashwagandha",
      },
      {
        posicion: 11,
        nombre: "Melatonina (baja dosis)",
        tipo: "suplemento",
        descripcion:
          "Para jet lag o ritmo circadiano alterado. A dosis de 0.5-1mg, no las 5mg del mercado.",
        impacto: 5,
        coste: "Muy bajo (~5€/mes)",
        slug: "melatonina",
      },
      {
        posicion: 12,
        nombre: "Cafeína",
        tipo: "suplemento",
        descripcion:
          "El ergogénico más efectivo. Funciona. El problema es la tolerancia y el sueño.",
        impacto: 6,
        coste: "Muy bajo",
        slug: "cafeina",
      },
      {
        posicion: 13,
        nombre: "Colágeno (con vitamina C)",
        tipo: "suplemento",
        descripcion:
          "Para articulaciones, con resultados modestos. Para piel, el marketing supera la evidencia.",
        impacto: 4,
        coste: "Medio (~20-35€/mes)",
        slug: "colageno",
      },
      {
        posicion: 14,
        nombre: "Multivitamínico",
        tipo: "suplemento",
        descripcion:
          "Seguro barato si tu dieta es deficiente. No previene enfermedades en personas que comen bien.",
        impacto: 3,
        coste: "Bajo (~10-20€/mes)",
        slug: "multivitaminico",
      },
    ],
  },
  {
    id: "humo",
    titulo: "Probablemente humo",
    subtitulo: "Prometían mucho. Los estudios en humanos decepcionan.",
    items: [
      {
        posicion: 15,
        nombre: "NMN / NAD+",
        tipo: "suplemento",
        descripcion:
          "Espectacular en ratones. Estudios en humanos pequeños y sin resultados concluyentes. Precio desorbitado.",
        impacto: 2,
        coste: "Muy alto (~80-150€/mes)",
        slug: "nmn",
      },
      {
        posicion: 16,
        nombre: "Resveratrol",
        tipo: "suplemento",
        descripcion:
          "El 'componente activo del vino tinto' que ha fallado en todos los ensayos clínicos rigurosos en humanos.",
        impacto: 1,
        coste: "Alto (~30-80€/mes)",
        slug: "resveratrol",
      },
    ],
  },
];

export default function RankingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Ranking: Mayor retorno para hombres 40+
        </h1>
        <p className="text-zinc-500 leading-relaxed">
          Ordenado por impacto real esperado, no por precio ni por lo que vende
          mejor. Los hábitos van primero porque sin ellos los suplementos son ruido.
        </p>
      </div>

      {categorias.map((cat) => (
        <section key={cat.id} className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-zinc-900">{cat.titulo}</h2>
            <p className="text-sm text-zinc-400">{cat.subtitulo}</p>
          </div>
          <div className="space-y-3">
            {cat.items.map((item) => (
              <RankingItem key={item.posicion} item={item} />
            ))}
          </div>
        </section>
      ))}

      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
        <p className="text-sm text-amber-800">
          Este ranking es orientativo. El impacto individual varía según tu
          situación de partida, déficits específicos y estilo de vida. Información
          educativa, no consejo médico.
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
    slug: string | null;
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
              item.tipo === "habito"
                ? "bg-blue-50 text-blue-600"
                : "bg-zinc-100 text-zinc-500"
            }`}
          >
            {item.tipo === "habito" ? "hábito" : "suplemento"}
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

  if (item.slug) {
    return <Link href={`/suplementos/${item.slug}`}>{content}</Link>;
  }
  return content;
}
