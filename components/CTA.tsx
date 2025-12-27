"use client";

import { useState } from "react";

// ════════════════════════════════════════════════════════════════════════════════
// 📝 PERSONALIZACIÓN - EDITAR AQUÍ
// ════════════════════════════════════════════════════════════════════════════════
const SECTION_CONTENT = {
  title: "¿Listo para digitalizar tu negocio?",
  subtitle: "Contáctanos hoy y recibe una cotización personalizada sin compromiso. Nuestro equipo está listo para llevar tu proyecto al siguiente nivel.",
  formTitle: "Solicita tu cotización",
  submitButton: "Enviar solicitud",
  submittingButton: "Enviando...",
  successMessage: {
    title: "¡Mensaje enviado!",
    subtitle: "Nos pondremos en contacto contigo pronto.",
  },
  errorMessage: {
    title: "Error al enviar",
    subtitle: "Por favor, intenta de nuevo o contáctanos directamente.",
  },
};

const CONTACT_INFO = {
  email: "contacto@tumarca.com",
  phone: "+1 (555) 123-4567",
  hours: "Lun - Vie: 9AM - 6PM",
};

const SERVICE_OPTIONS = [
  { value: "landing", label: "Landing Page" },
  { value: "corporativa", label: "Web Corporativa" },
  { value: "sistema", label: "Sistema de Gestión" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "app", label: "App Móvil" },
  { value: "personalizado", label: "Proyecto Personalizado" },
];
// ════════════════════════════════════════════════════════════════════════════════

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Reset form después de 5 segundos
        setTimeout(() => {
          setStatus("idle");
          setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        }, 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {SECTION_CONTENT.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{SECTION_CONTENT.subtitle}</p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">{CONTACT_INFO.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Teléfono</div>
                  <div className="text-gray-600">{CONTACT_INFO.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horario</div>
                  <div className="text-gray-600">{CONTACT_INFO.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {SECTION_CONTENT.successMessage.title}
                </h3>
                <p className="text-gray-600">{SECTION_CONTENT.successMessage.subtitle}</p>
              </div>
            ) : status === "error" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {SECTION_CONTENT.errorMessage.title}
                </h3>
                <p className="text-gray-600">{SECTION_CONTENT.errorMessage.subtitle}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {SECTION_CONTENT.formTitle}
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="juan@empresa.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? SECTION_CONTENT.submittingButton : SECTION_CONTENT.submitButton}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
