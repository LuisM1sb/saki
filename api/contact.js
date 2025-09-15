import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Configurar CORS para permitir requests desde el frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Solo permitir POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Todos los campos son requeridos' 
      });
    }

    // Validar reCaptcha (solo si está configurado)
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken) {
        return res.status(400).json({ 
          error: 'Verificación reCaptcha requerida' 
        });
      }

      // Verificar el token de reCaptcha con Google
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      });

      const recaptchaData = await recaptchaResponse.json();

      if (!recaptchaData.success) {
        console.error('reCaptcha verification failed:', recaptchaData);
        return res.status(400).json({ 
          error: 'Verificación reCaptcha fallida. Por favor, inténtalo de nuevo.' 
        });
      }
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Formato de email inválido' 
      });
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Saki Lab <noreply@sakilab.cl>', // Cambia esto por tu dominio verificado en Resend
      to: ['info@sakilab.cl'], // Tu email donde quieres recibir los mensajes
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 3px solid #d4af37; padding-bottom: 10px; margin-bottom: 20px;">
              Nuevo Mensaje de Contacto - Saki Lab
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 10px;">Información del Cliente:</h3>
              <p style="margin: 5px 0; color: #666;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #666;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 10px;">Mensaje:</h3>
              <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; border-left: 4px solid #d4af37;">
                <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #888; font-size: 14px; margin: 0;">
                Este mensaje fue enviado desde el formulario de contacto de Saki Lab
              </p>
              <p style="color: #888; font-size: 12px; margin: 5px 0 0 0;">
                Fecha: ${new Date().toLocaleString('es-CL', { 
                  timeZone: 'America/Santiago',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        Nuevo mensaje de contacto de Saki Lab
        
        Información del Cliente:
        - Nombre: ${name}
        - Email: ${email}
        
        Mensaje:
        ${message}
        
        ---
        Enviado desde el formulario de contacto de Saki Lab
        Fecha: ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}
      `
    });

    if (error) {
      console.error('Error enviando email:', error);
      return res.status(500).json({ 
        error: 'Error interno del servidor al enviar el email' 
      });
    }

    console.log('Email enviado exitosamente:', data);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      id: data.id 
    });

  } catch (error) {
    console.error('Error en el endpoint de contacto:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor' 
    });
  }
}
