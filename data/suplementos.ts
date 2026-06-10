import { Suplemento } from "@/types";

export const suplementos: Suplemento[] = [
  {
    slug: "creatina",
    nombre: "Creatina",
    categoria: "Rendimiento",
    evidencia: 9,
    coste: "bajo",
    seguridad: "alta",
    veredicto: "Merece la pena",
    descripcionCorta:
      "El suplemento más estudiado en deportes. Mejora fuerza, potencia y composición corporal con una relación coste-beneficio difícil de superar.",
    paraQueSirve:
      "La creatina aumenta los depósitos de fosfocreatina muscular, lo que mejora la capacidad de realizar esfuerzos de alta intensidad (levantamiento de pesas, sprints, HIIT). También hay evidencia creciente sobre beneficios cognitivos y en la salud muscular con la edad.",
    queDiceLaEvidencia:
      "Más de 500 estudios clínicos respaldan su eficacia. Mejoras de un 10-15% en fuerza y potencia están bien documentadas. En hombres de 40+, ayuda a contrarrestar la sarcopenia (pérdida muscular asociada al envejecimiento). Meta-análisis recientes también sugieren beneficios en función cognitiva bajo estrés.",
    paraQuienTieneSentido: [
      "Hombres que hacen entrenamiento de fuerza o HIIT",
      "Personas que quieren preservar masa muscular a partir de los 40",
      "Vegetarianos y veganos (menor ingesta dietética de creatina)",
      "Personas con interés en neuroprotección a largo plazo",
    ],
    paraQuienNo: [
      "Personas con enfermedad renal preexistente (consultar médico)",
      "Quienes no entrenan y esperan resultados sin ejercicio",
    ],
    dosisOrientativa:
      "3-5g/día de monohidrato de creatina. No es necesaria la fase de carga. Tomar con agua; la hora del día importa poco.",
    riesgosInteracciones: [
      "Muy segura a dosis normales",
      "Puede causar ligera retención de agua intracelular (no es grasa)",
      "En casos raros: molestias gastrointestinales (reducir dosis o tomar con comida)",
      "Precaución en enfermedad renal (aunque la evidencia no la vincula a daño en riñones sanos)",
    ],
    alternativas: [
      "Entrenamiento de fuerza progresivo (base imprescindible)",
      "Proteína adecuada en dieta",
    ],
    referencias: [
      {
        titulo:
          "International Society of Sports Nutrition position stand: creatine supplementation",
        url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z",
      },
      {
        titulo: "Creatine supplementation and aging musculoskeletal health",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6950288/",
      },
    ],
  },
  {
    slug: "proteina-whey",
    nombre: "Proteína Whey",
    categoria: "Proteínas",
    evidencia: 9,
    coste: "bajo",
    seguridad: "alta",
    veredicto: "Merece la pena",
    descripcionCorta:
      "Una forma práctica de cubrir las necesidades proteicas cuando la dieta se queda corta. No hay magia, solo proteína de alta calidad a buen precio.",
    paraQueSirve:
      "Complementar la ingesta proteica diaria. La proteína es el macronutriente más importante para preservar y ganar masa muscular, regular el apetito y mantener la función inmune.",
    queDiceLaEvidencia:
      "La evidencia es sólida: la proteína whey tiene un perfil de aminoácidos excelente, alta digestibilidad y un efecto anabólico (construcción muscular) bien documentado. El efecto no viene del polvo en sí, sino de cubrir tus necesidades proteicas totales. Si ya las cubres con comida, el whey no añade nada especial.",
    paraQuienTieneSentido: [
      "Personas que no llegan a 1.6-2.2g de proteína por kg de peso corporal con la dieta",
      "Quienes entrenan y necesitan conveniencia post-entrenamiento",
      "Personas mayores con menor apetito pero necesidades proteicas altas",
    ],
    paraQuienNo: [
      "Personas con intolerancia a la lactosa severa (usar isolado o proteína vegetal)",
      "Quienes ya cubren su proteína con alimentación normal",
      "Personas que esperan resultados sin entrenar ni comer bien",
    ],
    dosisOrientativa:
      "Lo necesario para completar tu objetivo proteico diario. En general 20-40g por toma. La dosis total diaria importa más que el timing.",
    riesgosInteracciones: [
      "Muy segura",
      "Posibles molestias digestivas en intolerantes a la lactosa (optar por isolado)",
      "No daña los riñones en personas sanas, a pesar del mito extendido",
    ],
    alternativas: [
      "Pollo, huevos, pescado, legumbres",
      "Proteína de guisante o arroz para veganos",
      "Requesón o Greek yogurt para una opción real de alimento",
    ],
    referencias: [
      {
        titulo:
          "Dietary protein and muscle mass: translating science to application",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566799/",
      },
      {
        titulo: "Protein intake for optimal muscle maintenance",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4558471/",
      },
    ],
  },
  {
    slug: "vitamina-d",
    nombre: "Vitamina D",
    categoria: "Vitaminas y minerales",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    veredicto: "Merece la pena",
    descripcionCorta:
      "Imprescindible si tienes déficit (muy común en España, especialmente en invierno). Si tus niveles son normales, suplementar no añade beneficios mágicos.",
    paraQueSirve:
      "Regulación del calcio y la salud ósea, función inmune, síntesis de testosterona, salud cardiovascular y muscular. Actúa más como hormona que como vitamina.",
    queDiceLaEvidencia:
      "La evidencia es clara para corregir déficit: mejora la función inmune, la salud ósea y posiblemente el estado de ánimo. Lo que NO está demostrado: que tomar vitamina D si ya tienes niveles normales mejore nada. Estudios recientes (VITAL, D-HEALTH) sugieren beneficios cardiovasculares y de reducción de mortalidad por cáncer, pero solo en personas con déficit.",
    paraQuienTieneSentido: [
      "Personas con déficit confirmado por analítica (niveles < 30 ng/mL)",
      "Quienes viven en latitudes >35° o trabajan en interior todo el día",
      "Hombres de 40+ (déficit muy prevalente)",
      "Personas con piel oscura o que usan mucha protección solar",
    ],
    paraQuienNo: [
      "Personas con niveles ya óptimos sin razón médica para suplementar",
      "No sustituye la exposición solar moderada, que tiene otros beneficios",
    ],
    dosisOrientativa:
      "1000-2000 UI/día para mantenimiento. En déficit, puede necesitarse 4000 UI/día bajo supervisión médica. Tomar con grasa (es liposoluble). Medir niveles en sangre antes de empezar.",
    riesgosInteracciones: [
      "Segura a dosis normales",
      "Toxicidad posible a dosis muy altas (>10.000 UI/día prolongado)",
      "Sinergia con vitamina K2 para la salud ósea",
      "Puede interaccionar con ciertos medicamentos para el corazón",
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
      {
        titulo:
          "Vitamin D deficiency in adults: when to test and how to treat",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3068797/",
      },
    ],
  },
  {
    slug: "omega-3",
    nombre: "Omega 3 (EPA/DHA)",
    categoria: "Vitaminas y minerales",
    evidencia: 7,
    coste: "medio",
    seguridad: "alta",
    veredicto: "Merece la pena",
    descripcionCorta:
      "Relevante si no comes pescado azul 2-3 veces por semana. Con buena dieta mediterránea, su efecto se reduce mucho.",
    paraQueSirve:
      "Salud cardiovascular, reducción de triglicéridos, función cognitiva, antiinflamatorio sistémico, salud articular. EPA y DHA son los activos importantes; el ALA del lino tiene conversión limitada.",
    queDiceLaEvidencia:
      "Evidencia sólida para reducción de triglicéridos (efecto dosis-dependiente). Evidencia moderada para salud cardiovascular (el estudio REDUCE-IT mostró reducción de eventos cardiovasculares con dosis altas de EPA). La evidencia sobre cognición y antienvejecimiento existe pero es menos robusta. La calidad del producto importa mucho (oxidación, contenido real de EPA/DHA).",
    paraQuienTieneSentido: [
      "Personas que no comen pescado azul regularmente",
      "Triglicéridos elevados (consultar médico, a dosis altas)",
      "Personas con dieta alta en omega-6 (aceites vegetales procesados)",
      "Hombres de 40+ con factores de riesgo cardiovascular",
    ],
    paraQuienNo: [
      "Quienes ya comen salmón, sardinas o caballa 2-3 veces/semana",
      "Como sustituto de hábitos alimenticios deficientes",
    ],
    dosisOrientativa:
      "1-2g/día de EPA+DHA combinados. Mirar el etiquetado: 1g de aceite de pescado no equivale a 1g de omega-3. Tomar con comida para mejor absorción y evitar regusto.",
    riesgosInteracciones: [
      "Seguro a dosis normales",
      "A dosis altas puede tener efecto anticoagulante (precaución con warfarina)",
      "Riesgo de oxidación del producto: comprar marcas con certificación IFOS",
      "Puede causar eructos o regusto (comprar productos de calidad o tomar congelado)",
    ],
    alternativas: [
      "Sardinas, caballa, salmón, anchoas (2-3 raciones/semana)",
      "Aceite de algas (opción vegana con EPA y DHA directamente)",
    ],
    referencias: [
      {
        titulo:
          "REDUCE-IT trial: cardiovascular outcomes with high-dose EPA",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1812792",
      },
      {
        titulo: "Marine n-3 fatty acids and prevention of cardiovascular disease",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1811403",
      },
    ],
  },
  {
    slug: "magnesio",
    nombre: "Magnesio",
    categoria: "Vitaminas y minerales",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    veredicto: "Merece la pena",
    descripcionCorta:
      "Mineral implicado en más de 300 procesos metabólicos. El déficit es común y los beneficios sobre el sueño y el estrés están bastante respaldados.",
    paraQueSirve:
      "Función muscular y nerviosa, síntesis de proteínas, control de glucosa en sangre, presión arterial, calidad del sueño y relajación muscular.",
    queDiceLaEvidencia:
      "Amplia evidencia de que el déficit (muy común en dietas occidentales) afecta negativamente el sueño, el estado de ánimo y la salud cardiovascular. La suplementación en personas con déficit mejora calidad del sueño, reduce calambres musculares y tiene efectos positivos en la sensibilidad a la insulina. La forma de magnesio importa: el glicinato o malato tienen mejor tolerancia digestiva que el óxido.",
    paraQuienTieneSentido: [
      "Personas con calidad de sueño deficiente",
      "Quienes consumen poco magnesio en dieta (pocos frutos secos, verduras de hoja)",
      "Hombres con niveles elevados de estrés o mucho deporte",
      "Personas con calambres musculares nocturnos",
    ],
    paraQuienNo: [
      "Con dieta rica en verduras de hoja, frutos secos y legumbres",
      "Con insuficiencia renal (el riñón regula el magnesio; consultar médico)",
    ],
    dosisOrientativa:
      "200-400mg/día de magnesio elemental. Glicinato para sueño/relajación; malato o citrato para energía. Evitar el óxido (mala absorción). Tomar por la noche.",
    riesgosInteracciones: [
      "Seguro a dosis normales",
      "Dosis altas pueden causar diarrea (especialmente con óxido o citrato)",
      "Precaución con enfermedad renal",
      "Puede reducir la absorción de algunos antibióticos y bifosfonatos",
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
  },
  {
    slug: "colageno",
    nombre: "Colágeno",
    categoria: "Recuperación",
    evidencia: 4,
    coste: "medio",
    seguridad: "alta",
    veredicto: "Depende",
    descripcionCorta:
      "La evidencia es mucho más débil de lo que el marketing sugiere. Puede tener sentido para articulaciones en combinación con vitamina C, pero para piel los datos son escasos.",
    paraQueSirve:
      "Teóricamente: salud articular, piel, tendones y ligamentos. El colágeno es la proteína estructural más abundante del cuerpo, pero tomarlo oral no garantiza que llegue donde lo necesitas.",
    queDiceLaEvidencia:
      "La evidencia para articulaciones es modesta pero existe: algunos estudios muestran reducción de dolor articular en atletas con colágeno hidrolizado + vitamina C. Para piel, hay estudios (mayormente financiados por la industria) que muestran mejoras en hidratación. El problema fundamental: al digerirlo, se rompe en aminoácidos que el cuerpo usa donde quiere. El precio premium rara vez está justificado.",
    paraQuienTieneSentido: [
      "Atletas con molestias articulares o tendinopatías (con vitamina C)",
      "Personas con ingesta proteica general baja (es una fuente de proteína, aunque incompleta)",
    ],
    paraQuienNo: [
      "Como anti-aging facial (evidencia muy débil para esto)",
      "Quienes buscan rejuvenecimiento sistémico",
      "Personas que ya cubren bien su proteína total",
    ],
    dosisOrientativa:
      "10-15g/día de colágeno hidrolizado antes del entrenamiento con 50mg de vitamina C para maximizar síntesis. Poco más que especulación para el resto de usos.",
    riesgosInteracciones: [
      "Muy seguro",
      "Bajo en triptófano (aminoácido esencial): no usarlo como única fuente proteica",
    ],
    alternativas: [
      "Proteína completa de calidad (whey, carne, pescado)",
      "Ejercicio de fuerza (estimula síntesis de colágeno endógeno)",
      "Vitamina C adecuada en dieta",
    ],
    referencias: [
      {
        titulo:
          "Collagen supplementation for joint pain: systematic review",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566878/",
      },
    ],
  },
  {
    slug: "ashwagandha",
    nombre: "Ashwagandha",
    categoria: "Adaptógenos",
    evidencia: 6,
    coste: "medio",
    seguridad: "media",
    veredicto: "Depende",
    descripcionCorta:
      "El adaptógeno con más evidencia. Efectivo para reducir cortisol y estrés percibido. Los efectos en testosterona existen pero son modestos.",
    paraQueSirve:
      "Reducción del estrés y la ansiedad, modulación del cortisol, mejora del sueño, pequeñas mejoras en testosterona y composición corporal en hombres bajo estrés crónico.",
    queDiceLaEvidencia:
      "Varios ensayos controlados muestran reducción de cortisol y estrés percibido con extractos estandarizados (KSM-66, Sensoril). El efecto en testosterona existe (meta-análisis: +14% aprox.) pero en hombres con niveles subóptimos por estrés crónico. No es un potenciador hormonal para personas sanas sin estrés. La evidencia de calidad es menor que para creatina o vitamina D.",
    paraQuienTieneSentido: [
      "Hombres con estrés crónico elevado",
      "Personas con dificultad para conciliar el sueño por ansiedad",
      "Deportistas con alto volumen de entrenamiento y recuperación deficiente",
    ],
    paraQuienNo: [
      "Personas con hipotiroidismo (puede elevar T3/T4, consultar médico)",
      "Con enfermedades autoinmunes (puede estimular el sistema inmune)",
      "Embarazadas",
      "Como reemplazo de estrategias reales de gestión del estrés",
    ],
    dosisOrientativa:
      "300-600mg/día de extracto estandarizado (KSM-66 o Sensoril). Tomar con comida. Ciclar: 2-3 meses de uso, 1 mes de descanso.",
    riesgosInteracciones: [
      "Generalmente bien tolerada",
      "Casos raros de hepatotoxicidad reportados (usar marcas con certificación de terceros)",
      "Puede potenciar sedantes y ansiolíticos",
      "Puede afectar función tiroidea",
    ],
    alternativas: [
      "Gestión del estrés: sueño, ejercicio, meditación, reducción de carga",
      "Magnesio glicinato por la noche",
    ],
    referencias: [
      {
        titulo:
          "Adaptogenic and Anxiolytic Effects of Ashwagandha: A Double-blind RCT",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6979308/",
      },
    ],
  },
  {
    slug: "cafeina",
    nombre: "Cafeína",
    categoria: "Estimulantes",
    evidencia: 9,
    coste: "bajo",
    seguridad: "media",
    veredicto: "Merece la pena",
    descripcionCorta:
      "El ergogénico más efectivo, seguro y barato que existe. Mejora rendimiento físico, cognitivo y estado de alerta. El problema: tolerancia y dependencia.",
    paraQueSirve:
      "Mejora del rendimiento aeróbico y de fuerza, alerta cognitiva, reducción del RPE (esfuerzo percibido), estado de ánimo. También tiene efectos neuroprotectores a largo plazo según epidemiología.",
    queDiceLaEvidencia:
      "Evidencia de grado A para rendimiento deportivo. Mejoras de 2-4% en rendimiento aeróbico, reducción del esfuerzo percibido, mejora del tiempo de reacción y concentración. La tolerancia se desarrolla rápido, por lo que es importante gestionar el consumo. El café (no solo cafeína aislada) tiene evidencia adicional sobre salud metabólica y hepática.",
    paraQuienTieneSentido: [
      "Prácticamente cualquiera que entrene o necesite rendimiento cognitivo",
      "Pre-entrenamiento con base real a coste mínimo",
      "Como suplemento: personas que ya consumen café y quieren dosificación precisa",
    ],
    paraQuienNo: [
      "Personas con ansiedad o arritmias cardíacas",
      "Quienes tienen mala calidad de sueño (eliminar cafeína después de las 14h)",
      "Personas con hipertensión no controlada",
      "Como sustituto del sueño",
    ],
    dosisOrientativa:
      "3-6mg/kg de peso corporal, 30-60 min antes del ejercicio. Para un hombre de 80kg: ~240-480mg. Un café espresso: ~60-80mg. Cortar el consumo 6-8h antes de dormir.",
    riesgosInteracciones: [
      "Dependencia y síndrome de abstinencia (dolor de cabeza, fatiga)",
      "Ansiedad, taquicardia a dosis altas",
      "Altera el sueño si se toma tarde (vida media 5-6h)",
      "Interacciona con algunos medicamentos cardiovasculares",
    ],
    alternativas: [
      "Café negro (tiene beneficios adicionales al café solo)",
      "Descanso adecuado (que es lo que realmente quieres reemplazar)",
    ],
    referencias: [
      {
        titulo:
          "ISSN position stand: Caffeine and exercise performance",
        url: "https://jissn.biomedcentral.com/articles/10.1186/s12970-021-00383-4",
      },
    ],
  },
  {
    slug: "melatonina",
    nombre: "Melatonina",
    categoria: "Sueño",
    evidencia: 7,
    coste: "bajo",
    seguridad: "alta",
    veredicto: "Merece la pena",
    descripcionCorta:
      "Funciona para jet lag y reajustar el ritmo circadiano. Para insomnio general, la dosis importa más de lo que se cree: menos es más.",
    paraQueSirve:
      "Regular el ritmo circadiano, facilitar la conciliación del sueño, reducir el efecto del jet lag. No es un hipnótico: no mantiene el sueño ni profundiza el sueño como los fármacos.",
    queDiceLaEvidencia:
      "Evidencia sólida para jet lag y ritmos circadianos alterados (trabajo a turnos, desfase horario). Para insomnio primario, la evidencia es más modesta. Lo sorprendente: dosis bajas (0.5-1mg) son igual o más eficaces que dosis altas (5-10mg). El mercado europeo limita la dosis por buenas razones.",
    paraQuienTieneSentido: [
      "Viajeros frecuentes con jet lag",
      "Trabajadores a turnos",
      "Personas con dificultad para conciliar el sueño (no para mantenerse dormido)",
      "Mayores de 55 (producción endógena decrece con la edad)",
    ],
    paraQuienNo: [
      "Como solución a largo plazo sin abordar la higiene del sueño",
      "Insomnio de mantenimiento (despertarse de madrugada): aquí no ayuda",
      "Personas con enfermedades autoinmunes o que toman anticoagulantes",
    ],
    dosisOrientativa:
      "0.5-1mg, 30-60 min antes de dormir. Empezar por la dosis mínima. Para jet lag: tomar a la hora local de destino.",
    riesgosInteracciones: [
      "Muy segura",
      "Somnolencia diurna si se toma en exceso",
      "Puede potenciar anticoagulantes",
      "No crear dependencia (a diferencia de los hipnóticos farmacológicos)",
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
  },
  {
    slug: "nmn",
    nombre: "NMN (Nicotinamida Mononucleótido)",
    categoria: "Longevidad",
    evidencia: 3,
    coste: "alto",
    seguridad: "media",
    veredicto: "Probablemente humo",
    descripcionCorta:
      "Caro, prometedor en ratones, sin evidencia sólida en humanos a día de hoy. El hype de David Sinclair vendió mucho producto antes que los ensayos clínicos.",
    paraQueSirve:
      "Teóricamente: elevar niveles de NAD+, que decrece con la edad y es esencial para la función mitocondrial y la activación de sirtuinas (proteínas relacionadas con la longevidad).",
    queDiceLaEvidencia:
      "Los estudios en ratones son impresionantes. Los estudios en humanos, de momento, son pequeños (20-30 personas), de corta duración y con resultados mixtos. Sí se eleva NAD+ en sangre, pero que eso se traduzca en beneficios clínicos relevantes no está demostrado. David Sinclair tiene conflicto de interés evidente (cofundador de empresas que lo venden). La FDA ha cuestionado su estatus como suplemento.",
    paraQuienTieneSentido: [
      "Personas con mucho dinero para gastar y curiosidad por la ciencia emergente",
      "Investigadores clínicos (para estudiar, no para consumir)",
    ],
    paraQuienNo: [
      "Cualquiera que espere resultados anti-aging concretos y medibles",
      "Personas que no tienen los básicos cubiertos (sueño, ejercicio, dieta)",
      "Como sustituto de intervenciones con evidencia real",
    ],
    dosisOrientativa:
      "Los ensayos usan 250-1000mg/día. El precio: 50-150€/mes. Con esa inversión mensuales podrías cubrir creatina + omega 3 + vitamina D durante un año.",
    riesgosInteracciones: [
      "Perfil de seguridad a corto plazo parece razonable en estudios pequeños",
      "Efectos a largo plazo desconocidos",
      "Preocupación teórica: la elevación de NAD+ podría potencialmente acelerar el crecimiento de células cancerosas (en estudio)",
    ],
    alternativas: [
      "Ejercicio (eleva NAD+ de forma natural)",
      "Restricción calórica o ayuno intermitente (activa sirtuinas)",
      "Niacina (precursor barato de NAD+, con más evidencia humana)",
    ],
    referencias: [
      {
        titulo:
          "NMN supplementation in healthy middle-aged adults: a randomized trial",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8119030/",
      },
    ],
  },
  {
    slug: "resveratrol",
    nombre: "Resveratrol",
    categoria: "Longevidad",
    evidencia: 2,
    coste: "alto",
    seguridad: "media",
    veredicto: "Probablemente humo",
    descripcionCorta:
      "El 'componente activo del vino tinto' que prometía mucho y ha decepcionado en cada ensayo clínico riguroso en humanos.",
    paraQueSirve:
      "Teóricamente: activar sirtuinas (SIRT1), efecto antiinflamatorio, neuroprotector, cardioprotector. En ratones y levaduras, tiene efectos espectaculares. En humanos...",
    queDiceLaEvidencia:
      "El entusiasmo inicial de los años 2000 (Sinclair de nuevo) no ha sobrevivido a los ensayos clínicos. El estudio PREDIMED no encontró beneficios significativos. El problema: la biodisponibilidad oral es pésima y el cuerpo lo metaboliza rápido. Algunos estudios incluso sugieren que puede interferir con las adaptaciones al ejercicio. El vino tinto contiene cantidades ínfimas (1-2mg por copa) que no justifican el consumo de alcohol.",
    paraQuienTieneSentido: [
      "Nadie en particular, con la evidencia actual",
    ],
    paraQuienNo: [
      "Prácticamente cualquier persona que busque beneficios de salud concretos",
      "Como excusa para beber vino tinto",
    ],
    dosisOrientativa:
      "Los estudios usan 150-500mg/día. Biodisponibilidad tan baja que la dosis efectiva real es incierta. Precio: 30-80€/mes.",
    riesgosInteracciones: [
      "A dosis altas puede actuar como anticoagulante",
      "Puede interaccionar con medicamentos metabolizados por CYP450",
      "Paradójicamente puede reducir adaptaciones al ejercicio aeróbico",
    ],
    alternativas: [
      "Polifenoles de la dieta mediterránea real (aceite de oliva virgen, berries, verduras)",
      "Ejercicio (activa las mismas vías metabólicas con evidencia sólida)",
    ],
    referencias: [
      {
        titulo: "Resveratrol and cardiovascular outcomes: a meta-analysis",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4499410/",
      },
    ],
  },
  {
    slug: "multivitaminico",
    nombre: "Multivitamínico",
    categoria: "Vitaminas y minerales",
    evidencia: 4,
    coste: "bajo",
    seguridad: "alta",
    veredicto: "Depende",
    descripcionCorta:
      "Una red de seguridad mediocre para una dieta mediocre. No sustituye comer bien y no previene enfermedades cardiovasculares ni cáncer según los estudios más largos.",
    paraQueSirve:
      "Cubrir posibles déficits nutricionales de micronutrientes cuando la dieta es variada pero no perfecta.",
    queDiceLaEvidencia:
      "Los estudios grandes (USPSTF, ensayos de 10+ años) son decepcionantes: los multivitamínicos no reducen mortalidad cardiovascular, cáncer ni mortalidad total en adultos que comen razonablemente bien. Pueden tener sentido como 'seguro barato' para personas con dietas restrictivas o deficientes. El problema: algunos nutrientes (vitamina A, hierro) pueden ser contraproducentes en exceso.",
    paraQuienTieneSentido: [
      "Personas con dietas muy restrictivas o poco variadas",
      "Veganos estrictos (especialmente para B12, zinc, hierro)",
      "Personas mayores con mala absorción de micronutrientes",
      "Quienes prefieren un enfoque 'seguro barato' sin analítica",
    ],
    paraQuienNo: [
      "Personas con dieta mediterránea variada y bien cubierta",
      "Como sustituto de mejorar la alimentación",
      "Hombres en edad adulta (riesgo de exceso de hierro en algunos productos)",
    ],
    dosisOrientativa:
      "Seguir la dosis del producto. Preferir fórmulas sin hierro para hombres adultos. Tomar con comida.",
    riesgosInteracciones: [
      "Generalmente seguros a dosis recomendadas",
      "Exceso de vitamina A (retinol): hepatotoxicidad y potencial daño óseo",
      "Hierro extra en hombres adultos: innecesario y potencialmente negativo",
      "Algunas vitaminas B en exceso: neuropatía (vitamina B6 a dosis muy altas)",
    ],
    alternativas: [
      "Dieta mediterránea variada (literalmente mejor que cualquier multivitamínico)",
      "Análisis de sangre + suplementación específica del déficit real",
    ],
    referencias: [
      {
        titulo:
          "USPSTF: Vitamin and Mineral Supplementation to Prevent CVD and Cancer",
        url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vitamin-supplementation-to-prevent-cvd-and-cancer",
      },
    ],
  },
];

export function getSuplementoBySlug(slug: string): Suplemento | undefined {
  return suplementos.find((s) => s.slug === slug);
}

export function buscarSuplementos(query: string): Suplemento[] {
  const q = query.toLowerCase();
  return suplementos.filter(
    (s) =>
      s.nombre.toLowerCase().includes(q) ||
      s.categoria.toLowerCase().includes(q) ||
      s.descripcionCorta.toLowerCase().includes(q)
  );
}
