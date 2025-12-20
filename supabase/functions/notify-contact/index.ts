import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactNotificationRequest = await req.json();

    console.log("Sending notification for contact from:", name, email);

    // Send notification email to admin
    const adminEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "LAPS Contact <onboarding@resend.dev>",
        to: ["contact@laps.sn"],
        subject: `Nouveau message: ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #F59E0B, #D97706); color: white; padding: 30px; border-radius: 12px 12px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
              .value { color: #111827; font-size: 16px; }
              .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 10px; }
              .cta { display: inline-block; background: #F59E0B; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">📬 Nouveau message de contact</h1>
                <p style="margin: 10px 0 0; opacity: 0.9;">Reçu depuis le site LAPS</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nom</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #F59E0B;">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <div class="label">Téléphone</div>
                  <div class="value"><a href="tel:${phone}" style="color: #F59E0B;">${phone}</a></div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Sujet</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" class="cta">
                  Répondre à ${name}
                </a>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const adminResult = await adminEmailResponse.json();
    console.log("Admin notification sent:", adminResult);

    // Send confirmation email to the contact
    const confirmationEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "LAPS <onboarding@resend.dev>",
        to: [email],
        subject: "Nous avons bien reçu votre message !",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #F59E0B, #D97706); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; }
              .cta { display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 20px; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">✅ Message reçu !</h1>
              </div>
              <div class="content">
                <p>Bonjour <strong>${name}</strong>,</p>
                <p>Nous avons bien reçu votre message concernant "<strong>${subject}</strong>".</p>
                <p>Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 à 48 heures.</p>
                <p>En attendant, n'hésitez pas à nous contacter directement sur WhatsApp pour une réponse plus rapide :</p>
                <center>
                  <a href="https://wa.me/221785379999" class="cta">💬 Discuter sur WhatsApp</a>
                </center>
                <div class="footer">
                  <p>L'équipe LAPS<br>
                  <a href="https://laps.sn" style="color: #F59E0B;">laps.sn</a></p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const confirmationResult = await confirmationEmailResponse.json();
    console.log("Confirmation email sent:", confirmationResult);

    return new Response(JSON.stringify({ 
      success: true,
      adminEmail: adminResult,
      confirmationEmail: confirmationResult
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in notify-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
