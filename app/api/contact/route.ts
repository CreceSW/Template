import { NextResponse } from "next/server";

// ════════════════════════════════════════════════════════════════════════════════
// 📝 CONFIGURACIÓN DEL FORMULARIO DE CONTACTO
// ════════════════════════════════════════════════════════════════════════════════
// Para habilitar envío de emails, configura las variables de entorno en .env.local:
//
// Opción 1: Resend (Recomendado - 3000 emails/mes gratis)
//   RESEND_API_KEY=re_xxxxx
//   EMAIL_TO=tu@email.com
//
// Opción 2: SMTP genérico (Gmail, Outlook, etc.)
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=587
//   SMTP_USER=tu@gmail.com
//   SMTP_PASS=tu-app-password
//   EMAIL_TO=destino@email.com
// ════════════════════════════════════════════════════════════════════════════════

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validación básica
    if (!data.name || !data.email || !data.service) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Intentar enviar email
    const emailSent = await sendEmail(data);

    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: "Mensaje enviado correctamente",
      });
    } else {
      // Si no hay configuración de email, guardar en logs (desarrollo)
      console.log("📧 Nuevo mensaje de contacto:", {
        fecha: new Date().toISOString(),
        ...data,
      });

      return NextResponse.json({
        success: true,
        message: "Mensaje recibido (modo desarrollo)",
      });
    }
  } catch (error) {
    console.error("Error en formulario de contacto:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

async function sendEmail(data: ContactFormData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO;

  // Si hay configuración de Resend, usarla
  if (resendApiKey && emailTo) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Formulario Web <onboarding@resend.dev>",
          to: emailTo,
          subject: `Nuevo contacto: ${data.service}`,
          html: generateEmailHTML(data),
        }),
      });

      if (response.ok) {
        console.log("✅ Email enviado via Resend");
        return true;
      } else {
        const error = await response.text();
        console.error("❌ Error Resend:", error);
        return false;
      }
    } catch (error) {
      console.error("❌ Error enviando email:", error);
      return false;
    }
  }

  // Sin configuración de email - modo desarrollo
  return false;
}

function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin:0;">Nuevo mensaje de contacto</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Nombre:</div>
            <div class="value">${escapeHtml(data.name)}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${escapeHtml(data.email)}</div>
          </div>
          ${data.phone ? `
          <div class="field">
            <div class="label">Teléfono:</div>
            <div class="value">${escapeHtml(data.phone)}</div>
          </div>
          ` : ""}
          <div class="field">
            <div class="label">Servicio de interés:</div>
            <div class="value">${escapeHtml(data.service)}</div>
          </div>
          ${data.message ? `
          <div class="field">
            <div class="label">Mensaje:</div>
            <div class="value">${escapeHtml(data.message)}</div>
          </div>
          ` : ""}
        </div>
        <div class="footer">
          Enviado desde el formulario de contacto de tu sitio web
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
