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
    id: "salmon",
    nombre: "Salmón",
    tipo: "alimento",
    categoria: "Proteína animal",
    evidencia: 9,
    coste: "medio",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Proteína completa + omega 3 EPA/DHA + vitamina D en un solo alimento. Uno de los más densos nutricionalmente. 2-3 raciones por semana sustituyen muchos suplementos.",
    beneficios: [
      "EPA y DHA (omega 3): efecto cardiovascular, antiinflamatorio y cognitivo documentado",
      "Proteína completa de alta calidad (20-25g por 100g)",
      "Vitamina D natural y B12 en concentraciones relevantes",
      "Astaxantina: antioxidante carotenoide con efectos prometedores",
    ],
    limitaciones: [
      "Precio elevado frente a sardinas o caballa con perfil similar",
      "El salmón de piscifactoría tiene menor concentración de omega 3 que el salvaje",
      "Mercurio: bajo en salmón, pero el salvaje puede tener más contaminantes que el de cultivo",
    ],
    alternativas: [
      "Sardinas o caballa (omega 3 equivalente, mucho más baratas)",
      "Trucha (perfil similar, menor coste)",
    ],
    referencias: [
      {
        titulo: "Fatty fish consumption and cardiovascular disease risk: meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6835948/",
      },
    ],
  },
  {
    id: "aguacate",
    nombre: "Aguacate",
    tipo: "alimento",
    categoria: "Grasas saludables",
    evidencia: 7,
    coste: "medio",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "La fruta más alta en grasas monoinsaturadas. Mejora la absorción de nutrientes liposolubles y tiene un perfil de micronutrientes excepcional para ser una fruta.",
    beneficios: [
      "Ácido oleico: mejora perfil lipídico y sensibilidad a la insulina",
      "Mejora la absorción de vitaminas liposolubles (A, D, E, K) de otros alimentos",
      "Potasio: más que el plátano, importante para la presión arterial",
      "Fibra soluble e insoluble, folato y magnesio",
    ],
    limitaciones: [
      "Alta densidad calórica (160 kcal/100g): vigilar porciones en déficit calórico",
      "Precio y disponibilidad variable; maduración impredecible",
      "Impacto ambiental elevado (huella hídrica alta)",
    ],
    alternativas: [
      "Aceite de oliva virgen extra (mismas grasas monoinsaturadas, más barato)",
      "Nueces o almendras para los micronutrientes",
    ],
    referencias: [
      {
        titulo: "Avocado consumption and cardiometabolic risk: a systematic review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6471050/",
      },
    ],
  },
  {
    id: "espinacas",
    nombre: "Espinacas",
    tipo: "alimento",
    categoria: "Fruta y verdura",
    evidencia: 8,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Máxima densidad de micronutrientes por caloría. Hierro, magnesio, folato, vitamina K y nitratos que mejoran el rendimiento físico. La base de cualquier dieta seria.",
    beneficios: [
      "Nitratos inorgánicos: mejoran la eficiencia muscular y reducen la presión arterial",
      "Hierro no-hemo, magnesio y folato en altas concentraciones",
      "Vitamina K, luteína y zeaxantina para salud ocular y ósea",
      "Ecdisterona: compuesto con posible efecto anabólico (investigación emergente)",
    ],
    limitaciones: [
      "Oxalatos: pueden reducir la absorción de calcio e hierro; blanquear mejora la biodisponibilidad",
      "El hierro no-hemo tiene peor absorción que el animal (tomar con vitamina C)",
      "Precaución en personas con cálculos renales de oxalato",
    ],
    alternativas: [
      "Col rizada (kale): perfil similar pero más vitamina C y K",
      "Acelgas, rúcula o canónigos para variedad",
    ],
    referencias: [
      {
        titulo: "Dietary nitrate from vegetables and exercise performance",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4998136/",
      },
    ],
  },
  {
    id: "ajo",
    nombre: "Ajo",
    tipo: "alimento",
    categoria: "Fruta y verdura",
    evidencia: 6,
    coste: "bajo",
    seguridad: "alta",
    retorno: "medio",
    veredicto: "Merece la pena",
    descripcion:
      "Alicina y compuestos organosulfurados con efectos cardiovasculares y antimicrobianos documentados. Uno de los condimentos con mayor investigación científica.",
    beneficios: [
      "Reducción modesta pero real de la presión arterial sistólica (meta-análisis: -8 mmHg)",
      "Efecto hipolipemiante: reduce LDL ligeramente",
      "Propiedades antimicrobianas y efecto prebiótico",
      "Asociado a menor incidencia de cáncer colorrectal en estudios epidemiológicos",
    ],
    limitaciones: [
      "La alicina se destruye con la cocción prolongada (picar y dejar reposar 10 min antes de cocinar)",
      "El ajo en polvo o suplementos tienen menor biodisponibilidad que el fresco",
      "El efecto sobre la presión arterial es modesto: no sustituye la medicación",
      "Puede causar molestias gastrointestinales en personas sensibles",
    ],
    alternativas: [
      "Cebolla, puerros, cebollino (misma familia, compuestos similares)",
      "Suplemento de ajo envejecido (Kyolic) si no se tolera el fresco",
    ],
    referencias: [
      {
        titulo: "Garlic intake and blood pressure: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6966103/",
      },
    ],
  },
  {
    id: "chocolate-negro",
    nombre: "Chocolate negro (+85%)",
    tipo: "alimento",
    categoria: "Grasas saludables",
    evidencia: 6,
    coste: "bajo",
    seguridad: "alta",
    retorno: "medio",
    veredicto: "Merece la pena",
    descripcion:
      "Polifenoles, flavanoles y magnesio con efecto cardiovascular real. Pero solo a partir del 85% de cacao y sin abusar. El chocolate con leche no cuenta.",
    beneficios: [
      "Flavanoles del cacao: mejoran la función endotelial y reducen la presión arterial",
      "Magnesio, hierro y zinc en cantidades relevantes",
      "Efecto en el estado de ánimo vía serotonina y endorfinas",
      "Antioxidantes polifenólicos con efecto antiinflamatorio modesto",
    ],
    limitaciones: [
      "Alta densidad calórica: 600 kcal/100g, fácil de comer en exceso",
      "El efecto requiere alto porcentaje de cacao (≥85%); el chocolate con leche no tiene evidencia",
      "Algunos productos tienen altos niveles de cadmio y plomo (dependiente del origen del cacao)",
      "La cafeína y teobromina pueden interferir con el sueño en personas sensibles",
    ],
    alternativas: [
      "Cacao puro en polvo sin azúcar (más polifenoles, menos calorías)",
      "Frutos rojos para un perfil antiinflamatorio similar",
    ],
    referencias: [
      {
        titulo: "Cocoa flavanols and cardiovascular health: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5539137/",
      },
    ],
  },
  {
    id: "aceite-coco",
    nombre: "Aceite de coco",
    tipo: "alimento",
    categoria: "Grasas saludables",
    evidencia: 3,
    coste: "medio",
    seguridad: "media",
    retorno: "bajo",
    veredicto: "Probablemente humo",
    descripcion:
      "El aceite que prometía revolucionar la salud y ha decepcionado en cada ensayo clínico. La AHA advierte explícitamente contra su uso como grasa principal.",
    beneficios: [
      "Alta estabilidad térmica (útil para cocinar a alta temperatura)",
      "MCTs (triglicéridos de cadena media): efecto ligeramente saciante en algunos estudios",
    ],
    limitaciones: [
      "90% de grasas saturadas: eleva el LDL más que la mantequilla",
      "La AHA recomienda explícitamente limitar su consumo cardiovascular",
      "Los MCTs son minoritarios en el aceite de coco comercial (domina el ácido láurico)",
      "Si quieres MCTs, mejor aceite de MCT puro que aceite de coco",
      "El hype de 'quema grasas' no tiene respaldo en estudios de largo plazo",
    ],
    alternativas: [
      "Aceite de oliva virgen extra (evidencia cardiovascular sólida)",
      "Aceite de aguacate para cocción a alta temperatura",
      "Aceite de MCT puro si el objetivo son los MCTs específicamente",
    ],
    referencias: [
      {
        titulo: "AHA Presidential Advisory: Dietary Fats and Cardiovascular Disease",
        url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000510",
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

  {
    id: "zinc",
    nombre: "Zinc",
    tipo: "suplemento",
    categoria: "Vitaminas y minerales",
    evidencia: 7,
    coste: "bajo",
    seguridad: "media",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "Mineral clave para la función inmune, síntesis proteica y producción de testosterona. El déficit es común en atletas y en personas con alta sudoración.",
    beneficios: [
      "Función inmune: acorta duración del resfriado común cuando se toma al inicio",
      "Implicado en la síntesis de testosterona (efectos en déficit)",
      "Síntesis proteica y cicatrización",
      "Función tiroidea y salud de la piel",
    ],
    limitaciones: [
      "Dosis altas (>40mg/día) interfieren con la absorción de cobre",
      "El óxido de zinc tiene baja absorción; preferir gluconato, citrato o bisglicinato",
      "Nauseas si se toma con el estómago vacío",
      "Atletas con dieta variada rara vez tienen déficit real",
    ],
    alternativas: [
      "Ostras (fuente más concentrada de zinc en alimentos)",
      "Carne roja, semillas de calabaza, legumbres",
    ],
    referencias: [
      {
        titulo: "Zinc supplementation and immune function: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2277319/",
      },
    ],
    contextoUso:
      "8-15mg/día de zinc elemental. Tomar con comida para evitar náuseas. No combinar con suplementos de hierro en la misma toma.",
    evidenciaDetalle:
      "La evidencia para la función inmune es sólida. Para testosterona, el efecto existe pero principalmente en hombres con déficit previo (atletas de resistencia, vegetarianos). En personas con niveles normales, el efecto es mínimo.",
    paraQuien: [
      "Atletas con mucho volumen de entrenamiento y sudoración",
      "Vegetarianos y veganos (menor absorción de zinc vegetal)",
      "Hombres mayores de 50 con déficit confirmado",
    ],
    paraQuienNo: [
      "Personas con dieta variada y sin signos de déficit",
      "A dosis altas sin supervisión médica",
    ],
  },
  {
    id: "vitamina-k2",
    nombre: "Vitamina K2",
    tipo: "suplemento",
    categoria: "Vitaminas y minerales",
    evidencia: 5,
    coste: "medio",
    seguridad: "alta",
    retorno: "medio",
    veredicto: "Depende",
    descripcion:
      "Potencialmente importante para dirigir el calcio a los huesos y alejarlo de las arterias. La evidencia es prometedora pero los estudios en humanos son aún limitados.",
    beneficios: [
      "Activa proteínas (osteocalcina, MGP) que regulan dónde se deposita el calcio",
      "Asociada a menor calcificación arterial en estudios observacionales",
      "Posible sinergia con vitamina D y calcio para salud ósea",
    ],
    limitaciones: [
      "Falta de ensayos clínicos grandes y de larga duración en humanos",
      "La evidencia más sólida es observacional (no causal)",
      "MK-7 (más biodisponible que MK-4) solo en algunos alimentos fermentados",
      "Interacción con anticoagulantes tipo warfarina",
    ],
    alternativas: [
      "Natto (fuente de MK-7 más concentrada del mundo, aunque con sabor intenso)",
      "Quesos curados, yema de huevo, mantequilla de pasto",
    ],
    referencias: [
      {
        titulo: "Vitamin K2 and cardiovascular disease: observational evidence",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4566462/",
      },
    ],
    contextoUso:
      "100-200mcg/día de MK-7 (menaquinona-7). Tomar con grasa (liposoluble). Especialmente relevante si tomas vitamina D o calcio.",
    evidenciaDetalle:
      "La biología es convincente pero la evidencia clínica en humanos es escasa. Tiene sentido como complemento a la vitamina D si ya tienes los básicos cubiertos. Sin riesgo significativo y con potencial beneficio.",
    paraQuien: [
      "Personas que toman vitamina D o calcio",
      "Hombres mayores preocupados por salud ósea y cardiovascular",
    ],
    paraQuienNo: [
      "Personas con tratamiento anticoagulante sin consultar médico",
      "Como prioridad antes de cubrir vitamina D, omega 3 y magnesio",
    ],
  },
  {
    id: "citrulina",
    nombre: "L-Citrulina",
    tipo: "suplemento",
    categoria: "Rendimiento",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "El mejor precursor de óxido nítrico disponible. Reduce el dolor muscular post-entrenamiento y mejora el rendimiento en ejercicio de alta intensidad.",
    beneficios: [
      "Aumenta los niveles de arginina plasmática más eficientemente que la arginina directa",
      "Reduce el dolor muscular (DOMS) hasta un 40% en estudios controlados",
      "Mejora el rendimiento en ejercicios de alta intensidad y repetición",
      "Puede reducir la presión arterial en personas con hipertensión leve",
    ],
    limitaciones: [
      "El malato de citrulina (forma más común) incluye ácido málico: la dosis de citrulina pura es menor",
      "Efecto modesto en deportistas de élite bien entrenados",
      "Sin efecto añadido si ya se toma arginina",
    ],
    alternativas: [
      "Zumo de remolacha (nitrato natural, diferente mecanismo pero similar resultado)",
      "Entrenamiento progresivo y recuperación adecuada",
    ],
    referencias: [
      {
        titulo: "L-Citrulline supplementation and exercise performance: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5368575/",
      },
    ],
    contextoUso:
      "6-8g de L-citrulina pura (o 8-10g de malato de citrulina 2:1), 30-60 min antes del entrenamiento. En ayunas o con algo ligero.",
    evidenciaDetalle:
      "Evidencia sólida para reducción del DOMS y mejora del rendimiento en resistencia muscular. La citrulina supera a la arginina como precursor de NO porque evita el metabolismo de primer paso intestinal.",
    paraQuien: [
      "Personas que hacen entrenamiento de fuerza o HIIT con volumen alto",
      "Hombres que quieren reducir el dolor muscular post-entreno",
    ],
    paraQuienNo: [
      "Sin entrenamiento de fuerza o alta intensidad",
      "Personas con hipotensión",
    ],
  },
  {
    id: "berberina",
    nombre: "Berberina",
    tipo: "suplemento",
    categoria: "Longevidad",
    evidencia: 6,
    coste: "medio",
    seguridad: "media",
    retorno: "medio",
    veredicto: "Depende",
    descripcion:
      "El suplemento que más se parece a un fármaco. Efecto real sobre glucosa e insulina comparable en algunos estudios a la metformina. Pero también sus limitaciones.",
    beneficios: [
      "Reducción de glucosa en ayunas y HbA1c en diabéticos tipo 2 (comparada con metformina en estudios chinos)",
      "Activa AMPK (vía del ejercicio y la restricción calórica)",
      "Mejora el perfil lipídico: reduce LDL y triglicéridos",
      "Efecto antimicrobiano y modulador de microbiota",
    ],
    limitaciones: [
      "Baja biodisponibilidad oral (mitigar tomando con comida o BBR-encapsulada)",
      "Puede causar problemas gastrointestinales: náuseas, diarrea",
      "Interacciones con ciclosporina y otros fármacos metabolizados por CYP3A4",
      "La mayoría de estudios son chinos con posibles sesgos metodológicos",
      "No hay datos de seguridad a largo plazo en personas sanas",
    ],
    alternativas: [
      "Metformina (prescripción médica, más evidencia, misma vía)",
      "Ejercicio y dieta baja en azúcar (activan AMPK sin efectos adversos)",
    ],
    referencias: [
      {
        titulo: "Berberine and type 2 diabetes: a meta-analysis of randomized trials",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2410097/",
      },
    ],
    contextoUso:
      "500mg, 2-3 veces al día con comida. Ciclado recomendado (8 semanas uso, 4 descanso). Vigilar interacciones con otros fármacos.",
    evidenciaDetalle:
      "Tiene el mejor perfil de evidencia entre los suplementos para el control glucémico. El mecanismo AMPK es sólido. El problema es la calidad de los estudios y la falta de datos de seguridad a largo plazo en poblaciones occidentales.",
    paraQuien: [
      "Hombres con resistencia a la insulina o prediabetes",
      "Personas con glucosa en ayunas elevada que no quieren farmacología",
    ],
    paraQuienNo: [
      "Personas con glucosa normal (puede causar hipoglucemia)",
      "Con medicación crónica sin revisar interacciones",
      "Sin supervisión médica en diabéticos medicados",
    ],
  },
  {
    id: "curcumina",
    nombre: "Curcumina",
    tipo: "suplemento",
    categoria: "Recuperación",
    evidencia: 4,
    coste: "medio",
    seguridad: "alta",
    retorno: "medio",
    veredicto: "Depende",
    descripcion:
      "Principio activo de la cúrcuma con propiedades antiinflamatorias reales, pero con un problema enorme: prácticamente no se absorbe sin formulación especial.",
    beneficios: [
      "Efecto antiinflamatorio documentado (inhibe NF-κB y COX-2)",
      "Reducción modesta del dolor articular en artritis en algunos estudios",
      "Potencial efecto neuroprotector (en investigación)",
    ],
    limitaciones: [
      "Biodisponibilidad pésima: la cúrcuma estándar no se absorbe casi nada",
      "Se necesita formulación especial (con piperina, liposomal, fosfolípida) para efecto real",
      "Los estudios positivos suelen usar formas patentadas muy diferentes a lo que se vende habitualmente",
      "El efecto antiinflamatorio crónico puede no ser deseable en contexto deportivo",
    ],
    alternativas: [
      "Ibuprofeno (para inflamación aguda, más efectivo a corto plazo)",
      "Dieta antiinflamatoria: omega 3, verduras, aceite de oliva",
      "Jengibre (antiinflamatorio similar con mejor absorción natural)",
    ],
    referencias: [
      {
        titulo: "Curcumin bioavailability and clinical efficacy: a review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5664031/",
      },
    ],
    contextoUso:
      "Solo con formulaciones de alta biodisponibilidad: BCM-95, Meriva, o con piperina (pero la piperina interfiere con muchos fármacos). 500-1000mg de curcumina de alta absorción.",
    evidenciaDetalle:
      "El mecanismo antiinflamatorio es real. El problema es que los estudios positivos usan formas que no son las que se venden en la mayoría de tiendas. Si compras cúrcuma en polvo barata, probablemente estés tirando el dinero.",
    paraQuien: [
      "Personas con dolor articular crónico que quieren una alternativa a los AINEs",
      "Solo si se elige una formulación de biodisponibilidad comprobada",
    ],
    paraQuienNo: [
      "Con anticoagulantes o antiagregantes",
      "Si se compra en forma de cúrcuma en polvo estándar sin formulación especial",
    ],
  },
  {
    id: "probioticos",
    nombre: "Probióticos",
    tipo: "suplemento",
    categoria: "Vitaminas y minerales",
    evidencia: 5,
    coste: "medio",
    seguridad: "alta",
    retorno: "medio",
    veredicto: "Depende",
    descripcion:
      "La evidencia es muy específica por cepa y por condición. Funcionan para ciertas cosas concretas, no como tónico general. La colonización permanente es un mito.",
    beneficios: [
      "Evidencia sólida para diarrea asociada a antibióticos (Lactobacillus rhamnosus GG, S. boulardii)",
      "SII (síndrome de intestino irritable): ciertos consorcios reducen síntomas",
      "Efectos inmunomoduladores temporales documentados",
    ],
    limitaciones: [
      "Los efectos son cepa-específicos: el producto del súper raramente tiene las cepas estudiadas",
      "La colonización a largo plazo es mínima: al parar el suplemento, desaparecen en semanas",
      "Los alimentos fermentales (kéfir, yogur, chucrut) pueden ser igual de efectivos y más baratos",
      "Sin utilidad demostrada en personas sanas con buena dieta",
    ],
    alternativas: [
      "Kéfir, yogur natural, chucrut, kimchi, miso (prebióticos y probióticos en alimento real)",
      "Fibra prebiótica (alimenta la microbiota existente en lugar de añadir nuevas bacterias)",
    ],
    referencias: [
      {
        titulo: "Probiotics and antibiotic-associated diarrhea: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4006993/",
      },
    ],
    contextoUso:
      "Solo con indicación clara (antibióticos, SII). Elegir producto con cepa específica estudiada para la condición. Refrigerar correctamente.",
    evidenciaDetalle:
      "La clave es que 'probiótico' no es una categoría homogénea. Lactobacillus acidophilus y Bifidobacterium longum son géneros, no cepas. Lo que funciona para diarrea post-antibiótico no funciona para el estado de ánimo general.",
    paraQuien: [
      "Personas tomando antibióticos (para prevenir disbiosis)",
      "Personas con SII diagnosticado buscando alivio sintomático",
    ],
    paraQuienNo: [
      "Como suplemento general de salud sin indicación concreta",
      "Personas inmunocomprometidas (riesgo de infección, consultar médico)",
    ],
  },

  // ─── ALIMENTOS ───────────────────────────────────────────────────────────────
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
    id: "kefir",
    nombre: "Kéfir",
    tipo: "bebida",
    categoria: "Bebidas",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    retorno: "alto",
    veredicto: "Merece la pena",
    descripcion:
      "El alimento fermentado con más evidencia para la microbiota intestinal. Más diversidad de cepas que cualquier probiótico comercial, y más barato.",
    beneficios: [
      "Mayor diversidad de bacterias y levaduras beneficiosas que cualquier probiótico en cápsula",
      "Mejora la tolerancia a la lactosa incluso en personas intolerantes",
      "Efecto inmunomodulador y antiinflamatorio documentado",
      "Proteína completa, calcio, fósforo y vitamina B12",
    ],
    limitaciones: [
      "Sabor ácido que requiere adaptación (el kéfir con azúcar añadido anula parte del beneficio)",
      "El kéfir de supermercado tiene menos diversidad microbiana que el tradicional con nódulos",
      "Puede causar molestias gastrointestinales transitorias en las primeras semanas",
    ],
    alternativas: [
      "Yogur natural (menos diversidad pero más accesible)",
      "Chucrut, kimchi, miso (fermentados sólidos con perfil diferente)",
    ],
    referencias: [
      {
        titulo: "Kefir consumption and gut microbiota: a randomized trial",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4854945/",
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
