"use client";

import { useState } from "react";
import { suplementos } from "@/data/suplementos";
import SuplementoCard from "@/components/SuplementoCard";
import { Categoria, Veredicto } from "@/types";

const categorias: Categoria[] = [
  "Rendimiento",
  "Recuperación",
  "Vitaminas y minerales",
  "Longevidad",
  "Sueño",
  "Adaptógenos",
  "Estimulantes",
  "Proteínas",
];

const veredictos: Veredicto[] = [
  "Merece la pena",
  "Depende",
  "Probablemente humo",
];

const veredictoStyles: Record<Veredicto, string> = {
  "Merece la pena": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Depende: "bg-amber-50 text-amber-700 border-amber-200",
  "Probablemente humo": "bg-red-50 text-red-700 border-red-200",
};

export default function SuplementosPage() {
  const [query, setQuery] = useState("");
  const [catFiltro, setCatFiltro] = useState<Categoria | "">("");
  const [verFiltro, setVerFiltro] = useState<Veredicto | "">("");

  const resultados = suplementos.filter((s) => {
    const q = query.toLowerCase();
    const matchQuery =
      !q ||
      s.nombre.toLowerCase().includes(q) ||
      s.descripcionCorta.toLowerCase().includes(q);
    const matchCat = !catFiltro || s.categoria === catFiltro;
    const matchVer = !verFiltro || s.veredicto === verFiltro;
    return matchQuery && matchCat && matchVer;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Suplementos
        </h1>
        <p className="text-zinc-500">
          {suplementos.length} suplementos analizados por evidencia, coste y
          seguridad.
        </p>
      </div>

      {/* Buscador */}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Buscar suplemento, categoría o efecto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />

        {/* Filtros */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCatFiltro("")}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              !catFiltro
                ? "bg-zinc-900 text-white border-zinc-900"
                : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
            }`}
          >
            Todas las categorías
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCatFiltro(catFiltro === cat ? "" : cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                catFiltro === cat
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {veredictos.map((v) => (
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
      </div>

      {/* Resultados */}
      {resultados.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {resultados.map((s) => (
            <SuplementoCard key={s.slug} s={s} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-zinc-400">
          <p className="text-lg">Sin resultados para &ldquo;{query}&rdquo;</p>
          <button
            onClick={() => {
              setQuery("");
              setCatFiltro("");
              setVerFiltro("");
            }}
            className="mt-3 text-sm text-emerald-600 hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
