export type NivelEvidencia = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type NivelCoste = "bajo" | "medio" | "alto" | "ninguno";
export type NivelSeguridad = "alta" | "media" | "baja";
export type NivelRetorno = "alto" | "medio" | "bajo";
export type Veredicto = "Merece la pena" | "Depende" | "Probablemente humo";
export type TipoItem = "alimento" | "bebida" | "suplemento" | "habito_nutricional";

export type Categoria =
  // Suplementos
  | "Rendimiento"
  | "Recuperación"
  | "Vitaminas y minerales"
  | "Longevidad"
  | "Sueño"
  | "Adaptógenos"
  | "Estimulantes"
  | "Proteínas"
  // Alimentos
  | "Proteína animal"
  | "Legumbres"
  | "Fruta y verdura"
  | "Grasas saludables"
  | "Cereales"
  | "Lácteos"
  // Bebidas
  | "Bebidas";

export interface Referencia {
  titulo: string;
  url: string;
}

export interface Item {
  id: string;
  nombre: string;
  tipo: TipoItem;
  categoria: Categoria;
  evidencia: NivelEvidencia;
  coste: NivelCoste;
  seguridad: NivelSeguridad;
  retorno: NivelRetorno;
  veredicto: Veredicto;
  descripcion: string;
  beneficios: string[];
  limitaciones: string[];
  alternativas: string[];
  referencias: Referencia[];
  // Campos opcionales de detalle (suplementos tienen mayor granularidad)
  contextoUso?: string;
  evidenciaDetalle?: string;
  paraQuien?: string[];
  paraQuienNo?: string[];
}

// Alias de compatibilidad
export type Suplemento = Item;
