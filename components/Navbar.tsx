"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TuMarca
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-blue-600 transition">
              Inicio
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">
              Características
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">
              Nosotros
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition">
              Servicios
            </Link>
            <Link href="#testimonios" className="text-gray-700 hover:text-blue-600 transition">
              Testimonios
            </Link>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
            <Link
              href="#inicio"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="#features"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Características
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="#testimonios"
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              onClick={toggleMenu}
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="block px-3 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
