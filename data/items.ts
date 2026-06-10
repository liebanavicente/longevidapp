import { Item } from "@/types";

export const items: Item[] = [
  // ─── SUPLEMENTOS ────────────────────────────────────────────────────────────
  {
    id: "creatina",
    nombre: "Creatina",
    tipo: "suplemento",
    categoria: "Rendimiento",
    evidencia: 9,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "El suplemento más estudiado en deportes. Mejora fuerza, potencia y composición corporal con una relación coste-beneficio difícil de superar.",
    beneficios: [
      "Mejoras de 10-15% en fuerza y potencia documentadas en más de 500 estudios",
      "Contraresta la sarcopenia (pérdida muscular) asociada al envejecimiento",
      "Evidencia creciente de beneficios cognitivos y neuroprotección",
      "Especialmente útil en vegetarianos y veganos con menor ingesta dietética",
    ],
    limitaciones: [
      "Puede causar ligera retención de agua intracelular (no es grasa)",
      "Molestias gastrointestinales ocasionales (reducir dosis o tomar con comida)",
      "Precaución en enfermedad renal preexistente",
      "Sin efecto significativo sin entrenamiento de fuerza",
    ],
    alternativas: [
      "Entrenamiento de fuerza progresivo (base imprescindible)",
      "Proteína adecuada en dieta",
    ],
    referencias: [
      {
        titulo: "ISSN position stand: creatine supplementation",
        url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z",
      },
      {
        titulo: "Creatine supplementation and aging musculoskeletal health",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6950288/",
      },
    ],
    contextoUso:
      "3-5g/día de monohidrato de creatina. No es necesaria la fase de carga. Tomar con agua; la hora del día importa poco.",
    evidenciaDetalle:
      "Más de 500 estudios clínicos respaldan su eficacia. Mejoras de un 10-15% en fuerza y potencia están bien documentadas. En hombres de 40+, ayuda a contrarrestar la sarcopenia. Meta-análisis recientes también sugieren beneficios en función cognitiva bajo estrés.",
    paraQuien: [
      "Hombres que hacen entrenamiento de fuerza o HIIT",
      "Personas que quieren preservar masa muscular a partir de los 40",
      "Vegetarianos y veganos (menor ingesta dietética de creatina)",
      "Personas con interés en neuroprotección a largo plazo",
    ],
    paraQuienNo: [
      "Personas con enfermedad renal preexistente (consultar médico)",
      "Quienes no entrenan y esperan resultados sin ejercicio",
    ],
  },
  {
    id: "proteina-whey",
    nombre: "Proteína Whey",
    tipo: "suplemento",
    categoria: "Proteínas",
    evidencia: 9,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Una forma práctica de cubrir las necesidades proteicas cuando la dieta se queda corta. No hay magia, solo proteína de alta calidad a buen precio.",
    beneficios: [
      "Perfil de aminoácidos completo con alta digestibilidad",
      "Efecto anabólico (construcción muscular) bien documentado",
      "Conveniente para cubrir objetivos proteicos post-entrenamiento",
      "Regula el apetito y soporta la función inmune",
    ],
    limitaciones: [
      "No añade nada especial si ya cubres tu proteína con comida real",
      "Posibles molestias digestivas en intolerantes a la lactosa (usar isolado)",
      "El mito del daño renal en personas sanas no tiene respaldo científico, pero existe confusión",
    ],
    alternativas: [
      "Pollo, huevos, pescado, legumbres",
      "Proteína de guisante o arroz para veganos",
      "Requesón o yogur griego como opción de alimento real",
    ],
    referencias: [
      {
        titulo: "Dietary protein and muscle mass: translating science to application",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566799/",
      },
    ],
    contextoUso:
      "Lo necesario para completar tu objetivo proteico diario. En general 20-40g por toma. La dosis total diaria importa más que el timing.",
    evidenciaDetalle:
      "La evidencia es sólida: la proteína whey tiene un perfil de aminoácidos excelente, alta digestibilidad y un efecto anabólico bien documentado. El efecto no viene del polvo en sí, sino de cubrir tus necesidades proteicas totales.",
    paraQuien: [
      "Personas que no llegan a 1.6-2.2g de proteína por kg de peso corporal con la dieta",
      "Quienes entrenan y necesitan conveniencia post-entrenamiento",
      "Personas mayores con menor apetito pero necesidades proteicas altas",
    ],
    paraQuienNo: [
      "Personas con intolerancia a la lactosa severa (usar isolado o proteína vegetal)",
      "Quienes ya cubren su proteína con alimentación normal",
    ],
  },
  {
    id: "vitamina-d",
    nombre: "Vitamina D",
    tipo: "suplemento",
    categoria: "Vitaminas y minerales",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Imprescindible si tienes déficit (muy común en España, especialmente en invierno). Si tus niveles son normales, suplementar no añade beneficios mágicos.",
    beneficios: [
      "Corrige el déficit con mejoras documentadas en inmunidad, huesos y estado de ánimo",
      "Estudios VITAL y D-HEALTH: beneficios cardiovasculares y reducción de mortalidad por cáncer en déficit",
      "Actúa como hormona: implicada en síntesis de testosterona y función muscular",
    ],
    limitaciones: [
      "Sin beneficio demostrado si ya tienes niveles óptimos",
      "Toxicidad posible a dosis muy altas (>10.000 UI/día prolongado)",
      "No sustituye la exposición solar moderada",
    ],
    alternativas: [
      "Exposición solar directa 15-30 min/día en piel expuesta",
      "Pescado azul, huevos, lácteos enriquecidos",
    ],
    referencias: [
      {
        titulo: "Vitamin D and Health — The VITAL trial findings",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1809944",
      },
    ],
    contextoUso:
      "1000-2000 UI/día para mantenimiento. En déficit, puede necesitarse 4000 UI/día bajo supervisión médica. Tomar con grasa (es liposoluble). Medir niveles en sangre antes de empezar.",
    evidenciaDetalle:
      "La evidencia es clara para corregir déficit: mejora la función inmune, la salud ósea y posiblemente el estado de ánimo. Lo que NO está demostrado: que tomar vitamina D si ya tienes niveles normales mejore nada.",
    paraQuien: [
      "Personas con déficit confirmado por analítica (niveles < 30 ng/mL)",
      "Quienes viven en latitudes >35° o trabajan en interior todo el día",
      "Hombres de 40+ (déficit muy prevalente)",
    ],
    paraQuienNo: [
      "Personas con niveles ya óptimos sin razón médica para suplementar",
    ],
  },
  {
    id: "omega-3",
    nombre: "Omega 3 (EPA/DHA)",
    tipo: "suplemento",
    categoria: "Vitaminas y minerales",
    evidencia: 7,
    coste: "medio",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Relevante si no comes pescado azul 2-3 veces por semana. Con buena dieta mediterránea, su efecto se reduce mucho.",
    beneficios: [
      "Reducción sólida de triglicéridos (efecto dosis-dependiente)",
      "REDUCE-IT: reducción de eventos cardiovasculares con dosis altas de EPA",
      "Efecto antiinflamatorio sistémico documentado",
      "Beneficios sobre función cognitiva y salud articular",
    ],
    limitaciones: [
      "Poco útil si ya comes sardinas, caballa o salmón 2-3 veces/semana",
      "La calidad del producto importa mucho (riesgo de oxidación)",
      "A dosis altas puede tener efecto anticoagulante",
    ],
    alternativas: [
      "Sardinas, caballa, salmón, anchoas (2-3 raciones/semana)",
      "Aceite de algas (opción vegana con EPA y DHA directamente)",
    ],
    referencias: [
      {
        titulo: "REDUCE-IT trial: cardiovascular outcomes with high-dose EPA",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1812792",
      },
    ],
    contextoUso:
      "1-2g/día de EPA+DHA combinados. Mirar el etiquetado: 1g de aceite de pescado no equivale a 1g de omega-3. Tomar con comida.",
    evidenciaDetalle:
      "Evidencia sólida para triglicéridos. Moderada para salud cardiovascular general. La calidad del producto importa: comprar marcas con certificación IFOS.",
    paraQuien: [
      "Personas que no comen pescado azul regularmente",
      "Triglicéridos elevados (a dosis altas bajo supervisión médica)",
      "Hombres de 40+ con factores de riesgo cardiovascular",
    ],
    paraQuienNo: [
      "Quienes ya comen salmón, sardinas o caballa 2-3 veces/semana",
      "Como sustituto de hábitos alimenticios deficientes",
    ],
  },
  {
    id: "magnesio",
    nombre: "Magnesio",
    tipo: "suplemento",
    categoria: "Vitaminas y minerales",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Mineral implicado en más de 300 procesos metabólicos. El déficit es muy común y los beneficios sobre el sueño y el estrés están bastante respaldados.",
    beneficios: [
      "Mejora calidad del sueño documentada en personas con déficit",
      "Reduce calambres musculares nocturnos",
      "Efectos positivos en sensibilidad a la insulina",
      "Función muscular, nerviosa y síntesis proteica",
    ],
    limitaciones: [
      "La forma importa: el óxido tiene mala absorción; preferir glicinato o malato",
      "Dosis altas pueden causar diarrea",
      "Precaución con enfermedad renal",
    ],
    alternativas: [
      "Frutos secos (almendras, anacardos), semillas de calabaza",
      "Espinacas, acelgas, aguacate",
      "Chocolate negro +70% cacao",
    ],
    referencias: [
      {
        titulo: "Magnesium and sleep: review of mechanisms and clinical studies",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8053283/",
      },
    ],
    contextoUso:
      "200-400mg/día de magnesio elemental. Glicinato para sueño/relajación; malato o citrato para energía. Tomar por la noche.",
    evidenciaDetalle:
      "Amplia evidencia de que el déficit (muy común en dietas occidentales) afecta negativamente el sueño, el estado de ánimo y la salud cardiovascular. La suplementación en personas con déficit mejora calidad del sueño y reduce calambres.",
    paraQuien: [
      "Personas con calidad de sueño deficiente",
      "Quienes consumen poco magnesio en dieta",
      "Hombres con niveles elevados de estrés o mucho deporte",
    ],
    paraQuienNo: [
      "Con dieta rica en verduras de hoja, frutos secos y legumbres",
      "Con insuficiencia renal",
    ],
  },
  {
    id: "colageno",
    nombre: "Colágeno",
    tipo: "suplemento",
    categoria: "Recuperación",
    evidencia: 4,
    coste: "medio",
    seguridad: "alta",
    retorno: "medio",
    veredicto: "Depende",
    descripcion:
      "La evidencia es mucho más débil de lo que el marketing sugiere. Puede tener sentido para articulaciones en combinación con vitamina C, pero para piel los datos son escasos.",
    beneficios: [
      "Reducción modesta de dolor articular en atletas (con vitamina C)",
      "Fuente de proteína, aunque incompleta (baja en triptófano)",
    ],
    limitaciones: [
      "Al digerirlo se rompe en aminoácidos que el cuerpo usa donde quiere, no donde lo necesitas",
      "Evidencia para piel mayormente financiada por la industria",
      "Precio premium rara vez justificado",
      "No sustituye a una fuente proteica completa",
    ],
    alternativas: [
      "Proteína completa de calidad (whey, carne, pescado)",
      "Ejercicio de fuerza (estimula síntesis de colágeno endógeno)",
      "Vitamina C adecuada en dieta",
    ],
    referencias: [
      {
        titulo: "Collagen supplementation for joint pain: systematic review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566878/",
      },
    ],
    contextoUso:
      "10-15g/día de colágeno hidrolizado antes del entrenamiento con 50mg de vitamina C. Poco más que especulación para el resto de usos.",
    evidenciaDetalle:
      "Los estudios en articulaciones muestran resultados modestos pero existen. Para piel, la mayor parte de la evidencia viene de estudios financiados por la industria.",
    paraQuien: [
      "Atletas con molestias articulares o tendinopatías (con vitamina C)",
    ],
    paraQuienNo: [
      "Como anti-aging facial (evidencia muy débil)",
      "Personas que ya cubren bien su proteína total",
    ],
  },
  {
    id: "ashwagandha",
    nombre: "Ashwagandha",
    tipo: "suplemento",
    categoria: "Adaptógenos",
    evidencia: 6,
    coste: "medio",
    seguridad: "media",
    retorno: "medio",
    veredicto: "Depende",
    descripcion:
      "El adaptógeno con más evidencia. Efectivo para reducir cortisol y estrés percibido. Los efectos en testosterona existen pero son modestos.",
    beneficios: [
      "Reducción de cortisol y estrés percibido en ensayos controlados (KSM-66, Sensoril)",
      "Mejora del sueño en personas con ansiedad",
      "+14% de testosterona aproximado en meta-análisis (hombres con niveles subóptimos)",
    ],
    limitaciones: [
      "Casos raros de hepatotoxicidad reportados (usar marcas certificadas por terceros)",
      "Puede afectar función tiroidea (precaución en hipotiroidismo)",
      "Puede potenciar sedantes y ansiolíticos",
      "No es un sustituto de estrategias reales de gestión del estrés",
    ],
    alternativas: [
      "Gestión del estrés: sueño, ejercicio, meditación",
      "Magnesio glicinato por la noche",
    ],
    referencias: [
      {
        titulo: "Adaptogenic and Anxiolytic Effects of Ashwagandha: Double-blind RCT",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6979308/",
      },
    ],
    contextoUso:
      "300-600mg/día de extracto estandarizado (KSM-66 o Sensoril). Tomar con comida. Ciclar: 2-3 meses de uso, 1 mes de descanso.",
    evidenciaDetalle:
      "Varios ensayos controlados muestran reducción de cortisol y estrés percibido. El efecto en testosterona existe pero en hombres con niveles subóptimos por estrés crónico. Para personas sanas sin estrés, el efecto es mínimo.",
    paraQuien: [
      "Hombres con estrés crónico elevado",
      "Personas con dificultad para conciliar el sueño por ansiedad",
      "Deportistas con alto volumen de entrenamiento y recuperación deficiente",
    ],
    paraQuienNo: [
      "Personas con hipotiroidismo",
      "Con enfermedades autoinmunes",
      "Embarazadas",
    ],
  },
  {
    id: "cafeina",
    nombre: "Cafeína",
    tipo: "suplemento",
    categoria: "Estimulantes",
    evidencia: 9,
    coste: "bajo",
    seguridad: "media",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "El ergogénico más efectivo, seguro y barato que existe. Mejora rendimiento físico, cognitivo y estado de alerta. El problema: tolerancia y dependencia.",
    beneficios: [
      "Mejoras de 2-4% en rendimiento aeróbico documentadas",
      "Reducción del esfuerzo percibido (RPE) durante el ejercicio",
      "Mejora del tiempo de reacción y la concentración",
      "Evidencia epidemiológica de efectos neuroprotectores a largo plazo",
    ],
    limitaciones: [
      "Tolerancia rápida: el efecto disminuye con el uso continuo",
      "Dependencia y síndrome de abstinencia (dolor de cabeza, fatiga)",
      "Altera el sueño si se toma tarde (vida media 5-6h)",
      "Contraindicada en ansiedad, arritmias o hipertensión no controlada",
    ],
    alternativas: [
      "Café negro (tiene beneficios adicionales más allá de la cafeína)",
      "Descanso adecuado (lo que realmente quieres reemplazar)",
    ],
    referencias: [
      {
        titulo: "ISSN position stand: Caffeine and exercise performance",
        url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-021-00383-4",
      },
    ],
    contextoUso:
      "3-6mg/kg de peso corporal, 30-60 min antes del ejercicio. Para un hombre de 80kg: ~240-480mg. Cortar el consumo 6-8h antes de dormir.",
    evidenciaDetalle:
      "Evidencia de grado A para rendimiento deportivo según la ISSN. La tolerancia se desarrolla rápido, por lo que es importante gestionar el consumo. El café tiene evidencia adicional sobre salud metabólica y hepática.",
    paraQuien: [
      "Cualquiera que entrene o necesite rendimiento cognitivo puntual",
      "Personas que quieren dosificación precisa más allá del café",
    ],
    paraQuienNo: [
      "Personas con ansiedad o arritmias cardíacas",
      "Quienes tienen mala calidad de sueño",
      "Como sustituto del sueño",
    ],
  },
  {
    id: "melatonina",
    nombre: "Melatonina",
    tipo: "suplemento",
    categoria: "Sueño",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Funciona para jet lag y reajustar el ritmo circadiano. Para insomnio general, la dosis importa: menos es más.",
    beneficios: [
      "Evidencia sólida para jet lag y ritmos circadianos alterados",
      "Facilita la conciliación del sueño sin dependencia",
      "Dosis bajas (0.5-1mg) son igual o más eficaces que dosis altas",
      "Especialmente útil en mayores de 55 (producción endógena decrece)",
    ],
    limitaciones: [
      "No mantiene el sueño ni lo profundiza como los hipnóticos farmacológicos",
      "No es solución a largo plazo sin abordar higiene del sueño",
      "Puede potenciar anticoagulantes",
    ],
    alternativas: [
      "Higiene del sueño: oscuridad total, frío, horarios regulares",
      "Reducción de luz azul por la noche",
      "Magnesio glicinato",
    ],
    referencias: [
      {
        titulo: "Melatonin: Physiology and pharmacology of a regulator of sleep",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5405617/",
      },
    ],
    contextoUso:
      "0.5-1mg, 30-60 min antes de dormir. Empezar por la dosis mínima. Para jet lag: tomar a la hora local de destino.",
    evidenciaDetalle:
      "Evidencia sólida para jet lag. Para insomnio primario, la evidencia es más modesta. Lo curioso: dosis bajas funcionan igual o mejor que las dosis comerciales habituales de 5-10mg.",
    paraQuien: [
      "Viajeros frecuentes con jet lag",
      "Trabajadores a turnos",
      "Mayores de 55 con producción endógena reducida",
    ],
    paraQuienNo: [
      "Insomnio de mantenimiento (despertarse de madrugada)",
      "Como solución permanente sin mejorar hábitos de sueño",
    ],
  },
  {
    id: "nmn",
    nombre: "NMN",
    tipo: "suplemento",
    categoria: "Longevidad",
    evidencia: 3,
    coste: "alto",
    seguridad: "media",
    retorno: "bajo",
    veredicto: "Probablemente humo",
    descripcion:
      "Caro, prometedor en ratones, sin evidencia sólida en humanos a día de hoy. El hype de David Sinclair vendió mucho producto antes que los ensayos clínicos.",
    beneficios: [
      "Eleva niveles de NAD+ en sangre (demostrado en estudios pequeños)",
      "Resultados espectaculares en modelos animales",
    ],
    limitaciones: [
      "Estudios en humanos pequeños (20-30 personas), cortos y con resultados mixtos",
      "Que suba el NAD+ no implica beneficios clínicos medibles",
      "Conflicto de interés evidente en los principales promotores",
      "La FDA ha cuestionado su estatus como suplemento",
      "Preocupación teórica: podría potencialmente acelerar crecimiento de células cancerosas",
    ],
    alternativas: [
      "Ejercicio (eleva NAD+ de forma natural)",
      "Restricción calórica o ayuno intermitente (activa sirtuinas)",
      "Niacina (precursor barato de NAD+ con más evidencia humana)",
    ],
    referencias: [
      {
        titulo: "NMN supplementation in healthy middle-aged adults: a randomized trial",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8119030/",
      },
    ],
    contextoUso:
      "Los ensayos usan 250-1000mg/día. Precio: 50-150€/mes. Con esa inversión mensual cubrirías creatina + omega 3 + vitamina D durante un año.",
    evidenciaDetalle:
      "Los estudios en ratones son impresionantes. Los estudios en humanos son pequeños, cortos y con resultados mixtos. David Sinclair tiene conflicto de interés evidente (cofundador de empresas que lo venden).",
    paraQuien: [
      "Personas con mucho dinero para gastar y curiosidad por la ciencia emergente",
    ],
    paraQuienNo: [
      "Cualquiera que espere resultados anti-aging concretos",
      "Personas sin los básicos cubiertos (sueño, ejercicio, dieta)",
    ],
  },
  {
    id: "resveratrol",
    nombre: "Resveratrol",
    tipo: "suplemento",
    categoria: "Longevidad",
    evidencia: 2,
    coste: "alto",
    seguridad: "media",
    retorno: "bajo",
    veredicto: "Probablemente humo",
    descripcion:
      "El 'componente activo del vino tinto' que prometía mucho y ha decepcionado en cada ensayo clínico riguroso en humanos.",
    beneficios: [
      "Efectos espectaculares en levaduras y ratones",
      "Activación teórica de sirtuinas (SIRT1)",
    ],
    limitaciones: [
      "Biodisponibilidad oral pésima: el cuerpo lo metaboliza muy rápido",
      "Estudios en humanos no replican los resultados en animales",
      "Puede interferir con las adaptaciones al ejercicio aeróbico",
      "El vino tinto contiene cantidades ínfimas (1-2mg por copa)",
    ],
    alternativas: [
      "Polifenoles de la dieta mediterránea real (aceite de oliva, frutos rojos, verduras)",
      "Ejercicio (activa las mismas vías metabólicas con evidencia sólida)",
    ],
    referencias: [
      {
        titulo: "Resveratrol and cardiovascular outcomes: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4499410/",
      },
    ],
    contextoUso:
      "Los estudios usan 150-500mg/día. Biodisponibilidad tan baja que la dosis efectiva real es incierta. Precio: 30-80€/mes.",
    evidenciaDetalle:
      "El entusiasmo inicial de los años 2000 no ha sobrevivido a los ensayos clínicos. El PREDIMED no encontró beneficios significativos. La excusa del vino tinto no se sostiene (cantidades ínfimas).",
    paraQuien: [],
    paraQuienNo: [
      "Prácticamente cualquier persona que busque beneficios de salud concretos",
      "Como excusa para beber vino tinto",
    ],
  },
  {
    id: "multivitaminico",
    nombre: "Multivitamínico",
    tipo: "suplemento",
    categoria: "Vitaminas y minerales",
    evidencia: 4,
    coste: "bajo",
    seguridad: "alta",
    retorno: "medio",
    veredicto: "Depende",
    descripcion:
      "Una red de seguridad mediocre para una dieta mediocre. No sustituye comer bien y no previene enfermedades cardiovasculares ni cáncer según los estudios más largos.",
    beneficios: [
      "Seguro barato para personas con dietas restrictivas o deficientes",
      "Especialmente útil para veganos estrictos (B12, zinc, hierro)",
      "Cubre bases sin necesidad de analítica previa",
    ],
    limitaciones: [
      "No reduce mortalidad cardiovascular ni cáncer en personas que comen razonablemente",
      "Exceso de vitamina A (retinol): hepatotoxicidad y daño óseo",
      "Hierro extra en hombres adultos: innecesario y potencialmente negativo",
      "No mejora una dieta deficiente, solo la tapa",
    ],
    alternativas: [
      "Dieta mediterránea variada (literalmente mejor que cualquier multivitamínico)",
      "Análisis de sangre + suplementación específica del déficit real",
    ],
    referencias: [
      {
        titulo: "USPSTF: Vitamin and Mineral Supplementation to Prevent CVD and Cancer",
        url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vitamin-supplementation-to-prevent-cvd-and-cancer",
      },
    ],
    contextoUso:
      "Seguir la dosis del producto. Preferir fórmulas sin hierro para hombres adultos. Tomar con comida.",
    evidenciaDetalle:
      "Los estudios grandes (USPSTF, ensayos de 10+ años) son decepcionantes: no reducen mortalidad en adultos que comen razonablemente bien. Pueden tener sentido para personas con dietas restrictivas.",
    paraQuien: [
      "Personas con dietas muy restrictivas o poco variadas",
      "Veganos estrictos (especialmente para B12)",
      "Personas mayores con mala absorción de micronutrientes",
    ],
    paraQuienNo: [
      "Personas con dieta mediterránea variada",
      "Hombres en edad adulta (riesgo de exceso de hierro en algunos productos)",
    ],
  },

  // ─── ALIMENTOS ───────────────────────────────────────────────────────────────
  {
    id: "huevos",
    nombre: "Huevos",
    tipo: "alimento",
    categoria: "Proteína animal",
    evidencia: 9,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Uno de los alimentos más completos y baratos que existen. Proteína de alta calidad, vitaminas liposolubles, colina y grasas saludables. El miedo al colesterol dietético ha quedado obsoleto.",
    beneficios: [
      "Proteína completa con todos los aminoácidos esenciales (6-7g por huevo)",
      "Colina: esencial para salud cerebral y hepática, infraconsumo generalizado",
      "Vitaminas A, D, E, B12, selenio y zinc en una sola unidad",
      "Alta saciedad y facilidad de preparación a coste mínimo",
    ],
    limitaciones: [
      "Personas con hipercolesterolemia familiar pueden necesitar limitar la ingesta",
      "Riesgo de salmonella con huevos crudos o poco cocinados",
    ],
    alternativas: [
      "Otras fuentes de proteína animal de calidad: pollo, pescado",
      "Legumbres para quienes no consumen animal",
    ],
    referencias: [
      {
        titulo: "Egg consumption and cardiovascular risk: a dose-response meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6471050/",
      },
    ],
  },
  {
    id: "sardinas",
    nombre: "Sardinas",
    tipo: "alimento",
    categoria: "Proteína animal",
    evidencia: 9,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "El suplemento de omega 3 más barato y completo que existe. Además aportan proteína, calcio, vitamina D y B12 en un formato que no caduca y cuesta menos de 2€.",
    beneficios: [
      "Alta concentración de EPA y DHA (omega 3) sin riesgo de oxidación",
      "Proteína completa de alta biodisponibilidad",
      "Calcio del espinal (si se come entero), vitamina D y B12",
      "Bajo contenido en mercurio frente a pescados grandes",
    ],
    limitaciones: [
      "Olor que puede hacer incómodo el consumo en ciertos contextos",
      "Las en salsa o aceite de girasol son peores que en aceite de oliva o agua",
    ],
    alternativas: [
      "Caballa, boquerones, anchoas — perfil similar de omega 3",
      "Suplemento de omega 3 de calidad (más caro, menos nutrientes totales)",
    ],
    referencias: [
      {
        titulo: "Fish consumption and cardiovascular disease: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6835948/",
      },
    ],
  },
  {
    id: "lentejas",
    nombre: "Lentejas",
    tipo: "alimento",
    categoria: "Legumbres",
    evidencia: 8,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Proteína vegetal, fibra, hierro y folatos a coste casi simbólico. Una de las bases más infravaloradas de la alimentación mediterránea.",
    beneficios: [
      "18g de proteína por 100g en seco (alta para una legumbre)",
      "Fibra soluble: mejora glucemia postprandial y salud intestinal",
      "Hierro no-hemo, folato, magnesio y potasio",
      "Índice glucémico bajo: saciedad prolongada",
    ],
    limitaciones: [
      "Proteína incompleta (complementar con cereal o animal en el mismo día)",
      "Flatulencias en personas con sensibilidad digestiva (mejorable con cocción adecuada)",
      "El hierro no-hemo tiene menor absorción que el de origen animal",
    ],
    alternativas: [
      "Garbanzos, alubias, guisantes — familia similar",
      "Tofu o tempeh para quienes prefieren soja",
    ],
    referencias: [
      {
        titulo: "Legume consumption and cardiometabolic health: systematic review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6855972/",
      },
    ],
  },
  {
    id: "garbanzos",
    nombre: "Garbanzos",
    tipo: "alimento",
    categoria: "Legumbres",
    evidencia: 8,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Versátiles, saciantes y con un perfil nutricional excelente. Junto al aceite de oliva, son la columna vertebral de la dieta mediterránea.",
    beneficios: [
      "Proteína + fibra: combinación de alta saciedad",
      "Prebióticos: alimentan la microbiota intestinal beneficiosa",
      "Control glucémico: reducen el índice glucémico de la comida",
      "Manganeso, folato, hierro y zinc",
    ],
    limitaciones: [
      "Proteína incompleta (complementar con cereal o proteína animal)",
      "Requieren remojo y cocción o uso de conserva (más práctico)",
    ],
    alternativas: [
      "Lentejas, alubias, guisantes",
      "Hummus como forma fácil de incorporarlos",
    ],
    referencias: [
      {
        titulo: "Chickpeas and human health: a review of the evidence",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5188421/",
      },
    ],
  },
  {
    id: "yogur-griego",
    nombre: "Yogur griego natural",
    tipo: "alimento",
    categoria: "Lácteos",
    evidencia: 8,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Alta densidad proteica, probióticos y calcio en un formato conveniente y sabroso. Uno de los mejores snacks para hombres que entrenan.",
    beneficios: [
      "10-15g de proteína por 100g (más del doble que el yogur normal)",
      "Probióticos: mejora microbiota intestinal y función inmune",
      "Calcio y fósforo para salud ósea",
      "Alta saciedad con bajo índice glucémico",
    ],
    limitaciones: [
      "Elegir natural sin azúcar (los versiones de frutas pueden tener hasta 15g de azúcar)",
      "No apto para intolerantes a la lactosa severos",
    ],
    alternativas: [
      "Requesón (perfil proteico similar, más barato)",
      "Kéfir (más probióticos, menos proteína)",
    ],
    referencias: [
      {
        titulo: "Yogurt consumption and cardiometabolic disease risk",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5227968/",
      },
    ],
  },
  {
    id: "avena",
    nombre: "Avena",
    tipo: "alimento",
    categoria: "Cereales",
    evidencia: 8,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "El cereal con mejor perfil nutricional. Beta-glucano para el colesterol, fibra para el intestino y carbohidratos de absorción lenta para la energía sostenida.",
    beneficios: [
      "Beta-glucano: efecto demostrado en reducción del colesterol LDL (claim aprobado por EFSA)",
      "Fibra soluble que mejora la microbiota y el control glucémico",
      "Proteína relativa alta para un cereal (13g/100g)",
      "Coste mínimo y máxima versatilidad culinaria",
    ],
    limitaciones: [
      "Los porridges instantáneos con azúcar añadido anulan gran parte de los beneficios",
      "Contaminación cruzada con gluten en personas celíacas (elegir certificada sin gluten)",
    ],
    alternativas: [
      "Cebada (también alta en beta-glucano)",
      "Arroz integral como opción sin avena",
    ],
    referencias: [
      {
        titulo: "Oat beta-glucan and LDL cholesterol: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4690088/",
      },
    ],
  },
  {
    id: "frutos-rojos",
    nombre: "Frutos rojos",
    tipo: "alimento",
    categoria: "Fruta y verdura",
    evidencia: 7,
    coste: "medio",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Alta densidad de polifenoles y antioxidantes con pocas calorías. Arándanos, fresas, frambuesas y moras son de los alimentos más beneficiosos por gramo.",
    beneficios: [
      "Antocianinas: efecto antiinflamatorio y protección cardiovascular documentados",
      "Mejora de la función cognitiva y memoria a largo plazo (blueberry studies)",
      "Bajo índice glucémico y alto contenido en fibra",
      "Vitamina C, manganeso y folato",
    ],
    limitaciones: [
      "Precio elevado fuera de temporada (usar congelados: perfil nutricional equivalente)",
      "El efecto antioxidante se exagera en marketing; los beneficios reales son más modestos",
    ],
    alternativas: [
      "Frutos rojos congelados (mismos nutrientes, menor coste)",
      "Granada, cerezas o ciruelas como alternativa de temporada",
    ],
    referencias: [
      {
        titulo: "Dietary berries, insulin resistance, and type 2 diabetes: a review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6315720/",
      },
    ],
  },
  {
    id: "brocoli",
    nombre: "Brócoli",
    tipo: "alimento",
    categoria: "Fruta y verdura",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "El paradigma de la verdura útil. Sulforafano, vitamina C, K, fibra y compuestos con potencial efecto anticancerígeno en estudios epidemiológicos.",
    beneficios: [
      "Sulforafano: activa vías de desintoxicación celular (Nrf2) con evidencia prometedora",
      "Alta densidad de vitamina C y K por caloría",
      "Fibra prebiótica y compuestos glucosinolatos con efecto antiinflamatorio",
      "Indol-3-carbinol: posible modulación hormonal positiva",
    ],
    limitaciones: [
      "La cocción prolongada destruye gran parte del sulforafano (cocinar al vapor o comer ligeramente crudo)",
      "Puede interferir con anticoagulantes (vitamina K) en dosis muy altas",
    ],
    alternativas: [
      "Col, coliflor, coles de Bruselas — misma familia de crucíferas",
      "Berros (mayor concentración de sulforafano)",
    ],
    referencias: [
      {
        titulo: "Cruciferous vegetables and cancer prevention: systematic review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5297864/",
      },
    ],
  },
  {
    id: "aceite-oliva",
    nombre: "Aceite de oliva virgen extra",
    tipo: "alimento",
    categoria: "Grasas saludables",
    evidencia: 9,
    coste: "medio",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "La grasa más respaldada por evidencia en la historia de la nutrición. El PREDIMED es uno de los estudios de dieta más sólidos jamás realizados.",
    beneficios: [
      "PREDIMED: reducción del 30% en eventos cardiovasculares mayores",
      "Oleocantal: efecto antiinflamatorio comparable al ibuprofeno (a dosis altas)",
      "Polifenoles con efectos antioxidantes y sobre microbiota",
      "Ácido oleico: mejora el perfil lipídico y la sensibilidad a la insulina",
    ],
    limitaciones: [
      "Alta densidad calórica: 9 kcal/g (a tener en cuenta en déficit calórico estricto)",
      "Calidad muy variable: el fraude de etiquetado es común; comprar de origen certificado",
      "No resiste bien temperaturas muy altas (para freír intenso, mejor aceite de oliva refinado)",
    ],
    alternativas: [
      "Aceite de aguacate (perfil similar, mayor tolerancia al calor)",
      "Frutos secos para las mismas grasas en formato sólido",
    ],
    referencias: [
      {
        titulo: "PREDIMED trial: Mediterranean diet and cardiovascular disease",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1200303",
      },
    ],
  },
  {
    id: "nueces",
    nombre: "Nueces",
    tipo: "alimento",
    categoria: "Grasas saludables",
    evidencia: 8,
    coste: "medio",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "El fruto seco con mejor perfil de omega 3 (ALA) y con evidencia cardiovascular, cognitiva y de longevidad sólida. Cuatro nueces al día es suficiente.",
    beneficios: [
      "Mayor contenido de ALA (omega 3 vegetal) entre los frutos secos",
      "Mejora del perfil lipídico y reducción del LDL oxidado",
      "Evidencia de reducción de mortalidad total en consumidores habituales",
      "Magnesio, vitamina E y polifenoles con efecto antiinflamatorio",
    ],
    limitaciones: [
      "Alta densidad calórica: fácil de comer en exceso (una ración = 28-30g)",
      "El ALA tiene conversión limitada a EPA/DHA activos",
    ],
    alternativas: [
      "Almendras (más proteína, menos omega 3)",
      "Semillas de lino o chía (mayor ALA, formato diferente)",
    ],
    referencias: [
      {
        titulo: "Walnut consumption and health outcomes: a systematic review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5707743/",
      },
    ],
  },

  // ─── BEBIDAS ─────────────────────────────────────────────────────────────────
  {
    id: "cafe",
    nombre: "Café",
    tipo: "bebida",
    categoria: "Bebidas",
    evidencia: 8,
    coste: "bajo",
    seguridad: "media",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Más que cafeína: el café completo tiene evidencia epidemiológica sólida sobre mortalidad, Parkinson, diabetes tipo 2 y salud hepática. Uno de los alimentos más estudiados.",
    beneficios: [
      "Reducción de riesgo de Parkinson y Alzheimer en consumidores habituales",
      "Protección hepática: reducción de riesgo de cirrosis y carcinoma hepatocelular",
      "Mejora de sensibilidad a la insulina y reducción de riesgo de DM2",
      "Rendimiento físico y cognitivo (cafeína + polifenoles)",
    ],
    limitaciones: [
      "Interfiere con el sueño si se toma tarde (cortar antes de las 14h)",
      "Puede aumentar la presión arterial en no habituados",
      "Dependencia y síndrome de abstinencia leve",
      "Puede aumentar el reflujo gastroesofágico en personas sensibles",
    ],
    alternativas: [
      "Té verde (menor cafeína, diferentes polifenoles)",
      "Achicoria (sin cafeína, con inulina prebiótica)",
    ],
    referencias: [
      {
        titulo: "Coffee consumption and mortality from all causes: meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5696634/",
      },
    ],
  },
  {
    id: "te-verde",
    nombre: "Té verde",
    tipo: "bebida",
    categoria: "Bebidas",
    evidencia: 6,
    coste: "bajo",
    seguridad: "alta",
    retorno: "medio",
    veredicto: "Merece la pena",
    descripcion:
      "EGCG (epigalocatequina galato) y L-teanina hacen del té verde una bebida con efectos cognitivos suaves y beneficios cardiometabólicos moderados.",
    beneficios: [
      "L-teanina + cafeína: combinación sinérgica para el foco sin ansiedad",
      "EGCG: efecto antiinflamatorio y antioxidante documentado",
      "Epidemiología japonesa: asociación con menor mortalidad cardiovascular",
      "Mejora modesta del metabolismo y la oxidación de grasas",
    ],
    limitaciones: [
      "Evidencia menos robusta que el café en humanos occidentales",
      "El extracto concentrado de té verde puede ser hepatotóxico (bebida normal: segura)",
      "Interfiere con la absorción de hierro no-hemo si se toma con comidas",
    ],
    alternativas: [
      "Café (más evidencia y mayor efecto ergogénico)",
      "Té blanco o matcha (mayor concentración de EGCG)",
    ],
    referencias: [
      {
        titulo: "Green tea consumption and mortality: a systematic review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4467482/",
      },
    ],
  },
  {
    id: "alcohol",
    nombre: "Alcohol",
    tipo: "bebida",
    categoria: "Bebidas",
    evidencia: 9,
    coste: "medio",
    seguridad: "baja",
    retorno: "bajo",
    veredicto: "Probablemente humo",
    descripcion:
      "La ciencia ha cerrado el debate: no existe un nivel seguro de alcohol para la salud. El mito de los beneficios del vino tinto no ha sobrevivido a los estudios de Mendelian randomization.",
    beneficios: [
      "Ninguno que no puedas obtener con otras estrategias sin riesgo",
    ],
    limitaciones: [
      "Cancerígeno de clase 1 (IARC): cáncer de mama, hígado, colon, esófago y boca",
      "Disruption del sueño profundo (reduce el sueño REM incluso en dosis bajas)",
      "Reduce la síntesis proteica muscular y eleva el cortisol",
      "El 'efecto cardioprotector' era confusión estadística (bebedores moderados vs. abstemios)",
      "Calorías vacías: 7 kcal/g sin micronutrientes",
    ],
    alternativas: [
      "Vino sin alcohol (polifenoles sin etanol)",
      "Agua con gas y limón para el ritual social",
      "Té frío, kombucha o kéfir de agua",
    ],
    referencias: [
      {
        titulo: "Alcohol use and burden for 195 countries: GBD 2016",
        url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31310-2/fulltext",
      },
    ],
  },
  {
    id: "refrescos-zero",
    nombre: "Refrescos zero",
    tipo: "bebida",
    categoria: "Bebidas",
    evidencia: 5,
    coste: "bajo",
    seguridad: "media",
    retorno: "bajo",
    veredicto: "Depende",
    descripcion:
      "Mejor que el refresco azucarado, peor que el agua. Útil como herramienta de transición para reducir azúcar, pero no son neutros para la salud.",
    beneficios: [
      "Calorías prácticamente nulas: útil en estrategias de control de peso",
      "Reduce la ingesta de azúcar vs. la versión normal",
      "Puede ayudar a mantener la adherencia en dietas restrictivas",
    ],
    limitaciones: [
      "Los edulcorantes artificiales pueden alterar la microbiota intestinal (evidencia emergente, no concluyente)",
      "El ácido fosfórico puede afectar la densidad ósea a largo plazo con consumo muy alto",
      "No reduce el deseo de dulce a largo plazo en todos los estudios",
      "La caseína de la cola puede interferir con la absorción de calcio",
    ],
    alternativas: [
      "Agua con gas con limón o hierbas (sin aditivos)",
      "Kombucha (bajo en azúcar, con probióticos)",
      "Reducir gradualmente la necesidad de bebidas dulces",
    ],
    referencias: [
      {
        titulo: "Artificially sweetened beverages and health outcomes: meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5998368/",
      },
    ],
  },
];

export function getItemById(id: string): Item | undefined {
  return items.find((i) => i.id === id);
}

export function buscarItems(query: string): Item[] {
  const q = query.toLowerCase();
  return items.filter(
    (i) =>
      i.nombre.toLowerCase().includes(q) ||
      i.categoria.toLowerCase().includes(q) ||
      i.descripcion.toLowerCase().includes(q) ||
      i.tipo.toLowerCase().includes(q)
  );
}

export function getItemsByTipo(tipo: string): Item[] {
  return items.filter((i) => i.tipo === tipo);
}

export function getGrandesAliados(): Item[] {
  return items.filter(
    (i) =>
      i.evidencia >= 7 &&
      (i.coste === "bajo" || i.coste === "medio" || i.coste === "ninguno") &&
      (i.seguridad === "alta" || i.seguridad === "media") &&
      i.retorno === "alto"
  );
}

export const CATEGORIAS_TIPO: Record<string, string[]> = {
  alimento: [
    "Proteína animal",
    "Legumbres",
    "Fruta y verdura",
    "Grasas saludables",
    "Cereales",
    "Lácteos",
  ],
  bebida: ["Bebidas"],
  suplemento: [
    "Rendimiento",
    "Recuperación",
    "Vitaminas y minerales",
    "Longevidad",
    "Sueño",
    "Adaptógenos",
    "Estimulantes",
    "Proteínas",
  ],
};
