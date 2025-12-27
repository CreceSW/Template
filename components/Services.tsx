// ════════════════════════════════════════════════════════════════════════════════
// 📝 PERSONALIZACIÓN - EDITAR AQUÍ
// ════════════════════════════════════════════════════════════════════════════════
const SECTION_HEADER = {
  title: "Nuestros Servicios",
  subtitle: "Soluciones completas para cada tipo de negocio. Elige el paquete que mejor se adapte a tus necesidades",
};

const SERVICES = [
  {
    title: "Landing Page",
    price: "Desde $499",
    time: "3-5 días",
    features: [
      "Diseño responsivo profesional",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Integración con redes sociales",
      "Hosting incluido (1 año)",
    ],
    popular: false,
  },
  {
    title: "Web Corporativa",
    price: "Desde $1,499",
    time: "2-3 semanas",
    features: [
      "Diseño personalizado",
      "Blog integrado",
      "Panel de administración",
      "SEO avanzado",
      "Analytics y reportes",
      "Soporte por 6 meses",
    ],
    popular: true, // Marca como "Más Popular"
  },
  {
    title: "Sistema de Gestión",
    price: "Desde $3,999",
    time: "4-6 semanas",
    features: [
      "CRUD completo",
      "Base de datos PostgreSQL",
      "Autenticación segura",
      "Dashboard interactivo",
      "Reportes personalizados",
      "API REST",
      "Soporte por 1 año",
    ],
    popular: false,
  },
  {
    title: "E-commerce",
    price: "Desde $2,999",
    time: "6-8 semanas",
    features: [
      "Catálogo de productos",
      "Carrito de compras",
      "Pasarela de pago (Stripe)",
      "Panel de administración",
      "Gestión de inventario",
      "Email automatizado",
      "Soporte por 1 año",
    ],
    popular: false,
  },
  {
    title: "App Móvil",
    price: "Desde $4,999",
    time: "6-8 semanas",
    features: [
      "iOS y Android",
      "Diseño nativo con React Native",
      "Backend incluido",
      "Push notifications",
      "Publicación en stores",
      "Soporte por 1 año",
    ],
    popular: false,
  },
  {
    title: "Proyecto Personalizado",
    price: "Cotización",
    time: "Variable",
    features: [
      "Análisis de requisitos",
      "Arquitectura a medida",
      "Tecnologías específicas",
      "Integraciones complejas",
      "Escalabilidad garantizada",
      "Soporte extendido",
    ],
    popular: false,
  },
];

const CTA_TEXT = {
  prefix: "¿Necesitas algo diferente?",
  linkText: "Contáctanos",
  suffix: "y creamos una solución a tu medida",
};
// ════════════════════════════════════════════════════════════════════════════════

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {SECTION_HEADER.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {SECTION_HEADER.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular
                  ? "border-primary-600 bg-primary-50 shadow-lg"
                  : "border-gray-200 bg-white hover:border-primary-300"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-primary-600 mb-1">{service.price}</div>
                <div className="text-sm text-gray-600">{service.time}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  service.popular
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Solicitar cotización
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            {CTA_TEXT.prefix}{" "}
            <a href="#contacto" className="text-primary-600 font-semibold hover:underline">
              {CTA_TEXT.linkText}
            </a>{" "}
            {CTA_TEXT.suffix}
          </p>
        </div>
      </div>
    </section>
  );
}
