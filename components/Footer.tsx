export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-3">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          <p className="text-sm text-amber-800 font-medium">
            Información educativa únicamente — no sustituye consejo médico profesional.
            Consulta con tu médico antes de iniciar cualquier suplementación.
          </p>
        </div>
        <p className="text-xs text-zinc-400 text-center">
          longevidapp · Evidencia, no marketing · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
