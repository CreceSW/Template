// ════════════════════════════════════════════════════════════════════════════════
// 📝 PERSONALIZACIÓN - EDITAR AQUÍ
// ════════════════════════════════════════════════════════════════════════════════
const SECTION_HEADER = {
  title: "Lo que dicen nuestros clientes",
  subtitle: "La satisfacción de nuestros clientes es nuestra mejor carta de presentación",
};

const TESTIMONIALS = [
  {
    name: "María González",
    role: "CEO, TechStart",
    // Genera avatar automático con UI Avatars (puedes cambiar el color de fondo)
    image: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=3b82f6&color=fff&size=128",
    content:
      "Increíble equipo. Entregaron nuestra landing page en solo 4 días y el resultado superó todas nuestras expectativas. El sitio es rápido, moderno y exactamente lo que necesitábamos.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Director, Comercial Express",
    image: "https://ui-avatars.com/api/?name=Carlos+Ramirez&background=8b5cf6&color=fff&size=128",
    content:
      "Desarrollaron nuestro e-commerce completo en tiempo récord. La integración con Stripe funciona perfectamente y el panel de administración es muy intuitivo. ¡100% recomendados!",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, Diseño Creativo",
    image: "https://ui-avatars.com/api/?name=Ana+Martinez&background=ec4899&color=fff&size=128",
    content:
      "Profesionalismo total. Nos ayudaron a digitalizar todo nuestro negocio con un sistema de gestión personalizado. El soporte post-lanzamiento ha sido excepcional.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Gerente de Marketing, InnovaLab",
    image: "https://ui-avatars.com/api/?name=Roberto+Silva&background=10b981&color=fff&size=128",
    content:
      "La mejor inversión que hemos hecho. Nuestro sitio web ahora aparece en Google, es responsive y ha aumentado nuestras conversiones en un 250%. Excelente trabajo.",
    rating: 5,
  },
  {
    name: "Laura Pérez",
    role: "Directora, Consultoría Pro",
    image: "https://ui-avatars.com/api/?name=Laura+Perez&background=f59e0b&color=fff&size=128",
    content:
      "Trabajar con ellos fue muy fácil. Entendieron perfectamente lo que necesitábamos y lo ejecutaron sin problemas. El resultado final es simplemente espectacular.",
    rating: 5,
  },
  {
    name: "Diego Torres",
    role: "CTO, AppMakers",
    image: "https://ui-avatars.com/api/?name=Diego+Torres&background=6366f1&color=fff&size=128",
    content:
      "Stack tecnológico moderno, código limpio y bien documentado. Como CTO valoro mucho la calidad técnica y estos chicos realmente saben lo que hacen. Altamente recomendados.",
    rating: 5,
  },
];

const CTA_SECTION = {
  text: "¿Quieres ser el próximo caso de éxito?",
  buttonText: "Contáctanos ahora",
  buttonHref: "#contacto",
};
// ════════════════════════════════════════════════════════════════════════════════

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {SECTION_HEADER.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{SECTION_HEADER.subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg mb-4">{CTA_SECTION.text}</p>
          <a
            href={CTA_SECTION.buttonHref}
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition shadow-lg"
          >
            {CTA_SECTION.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
