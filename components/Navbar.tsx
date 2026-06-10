"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/grandes-aliados", label: "Grandes aliados" },
  { href: "/ranking", label: "Ranking" },
  { href: "/detector", label: "Detector de humo" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl font-bold tracking-tight text-zinc-900">
            longevid<span className="text-emerald-600">app</span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 flex-wrap">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                pathname.startsWith(href)
                  ? "text-emerald-600"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
