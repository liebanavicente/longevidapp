export type NivelEvidencia = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type NivelCoste = "bajo" | "medio" | "alto";
export type NivelSeguridad = "alta" | "media" | "baja";
export type Veredicto = "Merece la pena" | "Depende" | "Probablemente humo";
export type Categoria =
  | "Rendimiento"
  | "Recuperación"
  | "Vitaminas y minerales"
  | "Longevidad"
  | "Sueño"
  | "Adaptógenos"
  | "Estimulantes"
  | "Proteínas";

export interface Referencia {
  titulo: string;
  url: string;
}

export interface Suplemento {
  slug: string;
  nombre: string;
  categoria: Categoria;
  evidencia: NivelEvidencia;
  coste: NivelCoste;
  seguridad: NivelSeguridad;
  veredicto: Veredicto;
  descripcionCorta: string;
  paraQueSirve: string;
  queDiceLaEvidencia: string;
  paraQuienTieneSentido: string[];
  paraQuienNo: string[];
  dosisOrientativa: string;
  riesgosInteracciones: string[];
  alternativas: string[];
  referencias: Referencia[];
}
