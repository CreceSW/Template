export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <svg
                    className="w-full h-full max-w-md mx-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="mt-4 text-lg font-semibold">Equipo Profesional</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-400 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos una startup especializada en desarrollo web y digitalización de negocios.
              Nuestro objetivo es ayudar a empresas de todos los tamaños a tener presencia digital
              efectiva y competitiva.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Utilizamos las tecnologías más modernas del mercado: <strong>Next.js, TypeScript,
              Tailwind CSS</strong> y más, garantizando sitios web rápidos, seguros y escalables.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Stack Tecnológico Moderno</h3>
                  <p className="text-gray-600">Next.js 14+, TypeScript, Tailwind CSS, PostgreSQL</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Entrega Rápida</h3>
                  <p className="text-gray-600">Proyectos listos en semanas, no meses</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Soporte Continuo</h3>
                  <p className="text-gray-600">Acompañamiento post-lanzamiento garantizado</p>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
