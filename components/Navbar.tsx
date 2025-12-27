"use client";

import { useState } from "react";
import Link from "next/link";

// ════════════════════════════════════════════════════════════════════════════════
// 📝 PERSONALIZACIÓN - EDITAR AQUÍ
// ════════════════════════════════════════════════════════════════════════════════
const BRAND = {
  name: "TuMarca",                    // Nombre de la empresa/marca
  logo: null as string | null,        // Ruta al logo (ej: "/logo.svg") o null para usar texto
};

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Características", href: "#features" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Testimonios", href: "#testimonios" },
];

const CTA_BUTTON = {
  label: "Contacto",
  href: "#contacto",
};
// ════════════════════════════════════════════════════════════════════════════════

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              {BRAND.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={BRAND.logo} alt={BRAND.name} className="h-8" />
              ) : (
                BRAND.name
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href={CTA_BUTTON.href}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              {CTA_BUTTON.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={CTA_BUTTON.href}
              className="block px-3 py-2 bg-primary-600 text-white text-center rounded-md hover:bg-primary-700"
              onClick={toggleMenu}
            >
              {CTA_BUTTON.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
