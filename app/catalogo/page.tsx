"use client";

import { useState, useMemo } from "react";
import { items } from "@/data/items";
import ItemCard from "@/components/ItemCard";
import { Veredicto, TipoItem } from "@/types";

const TIPOS: { value: TipoItem | ""; label: string }[] = [
  { value: "", label: "Todo" },
  { value: "alimento", label: "Alimentos" },
  { value: "bebida", label: "Bebidas" },
  { value: "suplemento", label: "Suplementos" },
];

const VEREDICTOS: Veredicto[] = [
  "Merece la pena",
  "Depende",
  "Probablemente humo",
];

const EVIDENCIA_FILTROS = [
  { value: 0, label: "Cualquier evidencia" },
  { value: 7, label: "Alta (≥7)" },
  { value: 5, label: "Media (≥5)" },
];

const COSTE_FILTROS = [
  { value: "", label: "Cualquier coste" },
  { value: "bajo", label: "Bajo" },
  { value: "medio", label: "Medio" },
  { value: "alto", label: "Alto" },
];

const veredictoStyles: Record<Veredicto, string> = {
  "Merece la pena": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Depende: "bg-amber-50 text-amber-700 border-amber-200",
  "Probablemente humo": "bg-red-50 text-red-700 border-red-200",
};

export default function CatalogoPage() {
  const [query, setQuery] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState<TipoItem | "">("");
  const [verFiltro, setVerFiltro] = useState<Veredicto | "">("");
  const [evidFiltro, setEvidFiltro] = useState(0);
  const [costeFiltro, setCosteFiltro] = useState("");

  const resultados = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter((i) => {
      const matchQuery =
        !q ||
        i.nombre.toLowerCase().includes(q) ||
        i.descripcion.toLowerCase().includes(q) ||
        i.categoria.toLowerCase().includes(q) ||
        i.tipo.toLowerCase().includes(q);
      const matchTipo = !tipoFiltro || i.tipo === tipoFiltro;
      const matchVer = !verFiltro || i.veredicto === verFiltro;
      const matchEvid = !evidFiltro || i.evidencia >= evidFiltro;
      const matchCoste = !costeFiltro || i.coste === costeFiltro;
      return matchQuery && matchTipo && matchVer && matchEvid && matchCoste;
    });
  }, [query, tipoFiltro, verFiltro, evidFiltro, costeFiltro]);

  const limpiarFiltros = () => {
    setQuery("");
    setTipoFiltro("");
    setVerFiltro("");
    setEvidFiltro(0);
    setCosteFiltro("");
  };

  const hayFiltros = query || tipoFiltro || verFiltro || evidFiltro || costeFiltro;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Catálogo
        </h1>
        <p className="text-zinc-500">
          {items.length} elementos evaluados por evidencia, coste, seguridad y retorno real.
          Alimentos, bebidas y suplementos en un mismo lugar.
        </p>
      </div>

      {/* Buscador */}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Buscar alimento, bebida, suplemento o efecto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />

        {/* Filtro tipo */}
        <div className="flex flex-wrap gap-2">
          {TIPOS.map(({ value, label }) => (
            <button
              key={label}
              onClick={() => setTipoFiltro(tipoFiltro === value ? "" : value)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                tipoFiltro === value
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Filtros secundarios */}
        <div className="flex flex-wrap gap-2">
          {/* Veredicto */}
          {VEREDICTOS.map((v) => (
            <button
              key={v}
              onClick={() => setVerFiltro(verFiltro === v ? "" : v)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                verFiltro === v
                  ? veredictoStyles[v]
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-zinc-400">Evidencia:</span>
          {EVIDENCIA_FILTROS.map(({ value, label }) => (
            <button
              key={label}
              onClick={() => setEvidFiltro(evidFiltro === value ? 0 : value)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                evidFiltro === value && value !== 0
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {label}
            </button>
          ))}
          <span className="text-xs text-zinc-400 ml-2">Coste:</span>
          {COSTE_FILTROS.map(({ value, label }) => (
            <button
              key={label}
              onClick={() => setCosteFiltro(costeFiltro === value ? "" : value)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                costeFiltro === value && value !== ""
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Resultados */}
      {resultados.length > 0 ? (
        <>
          <p className="text-xs text-zinc-400">
            {resultados.length} resultado{resultados.length !== 1 ? "s" : ""}
            {hayFiltros ? " con los filtros actuales" : ""}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {resultados.map((i) => (
              <ItemCard key={i.id} item={i} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16 text-zinc-400">
          <p className="text-lg">Sin resultados para &ldquo;{query}&rdquo;</p>
          <button
            onClick={limpiarFiltros}
            className="mt-3 text-sm text-emerald-600 hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
