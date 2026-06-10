"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/suplementos", label: "Suplementos" },
  { href: "/ranking", label: "Ranking" },
  { href: "/detector", label: "Detector de humo" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-zinc-900">
            longevid<span className="text-emerald-600">app</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
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
