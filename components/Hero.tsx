import Link from "next/link";

// ════════════════════════════════════════════════════════════════════════════════
// 📝 PERSONALIZACIÓN - EDITAR AQUÍ
// ════════════════════════════════════════════════════════════════════════════════
const HERO_CONTENT = {
  // Título principal (usa {highlight} para resaltar texto)
  title: "Transforma tu negocio con",
  titleHighlight: "soluciones digitales",

  // Subtítulo/descripción
  subtitle: "Desarrollamos sitios web y aplicaciones que impulsan el crecimiento de tu empresa. Velocidad, calidad y resultados garantizados.",

  // Botones CTA
  primaryCTA: {
    label: "Comenzar ahora",
    href: "#contacto",
  },
  secondaryCTA: {
    label: "Ver servicios",
    href: "#services",
  },

  // Estadísticas (mostradas debajo del título)
  stats: [
    { value: "100+", label: "Proyectos" },
    { value: "50+", label: "Clientes" },
    { value: "98%", label: "Satisfacción" },
  ],

  // Imagen/ilustración (texto que aparece en el placeholder)
  illustrationText: "Diseño Web Profesional",
};
// ════════════════════════════════════════════════════════════════════════════════

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {HERO_CONTENT.title}{" "}
              <span className="text-primary-600">{HERO_CONTENT.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {HERO_CONTENT.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={HERO_CONTENT.primaryCTA.href}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg"
              >
                {HERO_CONTENT.primaryCTA.label}
              </Link>
              <Link
                href={HERO_CONTENT.secondaryCTA.href}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-primary-600"
              >
                {HERO_CONTENT.secondaryCTA.label}
              </Link>
            </div>
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {HERO_CONTENT.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-400 to-secondary-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center p-8">
                <svg
                  className="w-full h-full max-w-md mx-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <p className="mt-4 text-lg font-semibold">{HERO_CONTENT.illustrationText}</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
