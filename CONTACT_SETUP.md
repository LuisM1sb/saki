# Configuración del Formulario de Contacto

Este proyecto incluye un formulario de contacto completo con backend serverless en Vercel usando Resend para el envío de emails.

## 🚀 Configuración Rápida

### 1. Configurar Resend

1. Ve a [resend.com](https://resend.com) y crea una cuenta
2. Verifica tu dominio o usa el dominio de prueba
3. Obtén tu API key desde [resend.com/api-keys](https://resend.com/api-keys)

### 2. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
RESEND_API_KEY=re_tu_api_key_aqui
CONTACT_EMAIL=tu-email@dominio.com
FROM_EMAIL=noreply@tu-dominio.com
```

### 3. Configurar en Vercel

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a Settings > Environment Variables
3. Agrega las variables:
   - `RESEND_API_KEY`: Tu API key de Resend
   - `CONTACT_EMAIL`: Email donde recibirás los mensajes
   - `FROM_EMAIL`: Email desde el cual se enviarán (debe estar verificado en Resend)

### 4. Verificar Dominio en Resend

1. En Resend, ve a Domains
2. Agrega tu dominio (ej: `sakilab.cl`)
3. Configura los registros DNS según las instrucciones
4. Una vez verificado, actualiza `FROM_EMAIL` en las variables de entorno

## 📁 Estructura de Archivos

```
├── api/
│   └── contact.js          # Endpoint serverless de Vercel
├── src/
│   └── components/
│       └── Contact.jsx     # Componente del formulario
├── env.example             # Ejemplo de variables de entorno
└── CONTACT_SETUP.md        # Este archivo
```

## 🔧 Funcionalidades

### Frontend (React + TailwindCSS)
- ✅ Formulario con campos: nombre, email, mensaje
- ✅ Validación de campos requeridos
- ✅ Estados de carga ("Enviando...")
- ✅ Alertas de éxito y error
- ✅ Reset automático del formulario
- ✅ Diseño responsive

### Backend (Vercel Serverless)
- ✅ Endpoint `/api/contact` (POST)
- ✅ Validación de datos
- ✅ Envío de email con Resend
- ✅ Manejo de errores
- ✅ CORS configurado
- ✅ Email HTML con diseño profesional

## 📧 Formato del Email

El email incluye:
- Información del cliente (nombre, email)
- Mensaje completo
- Fecha y hora de envío
- Diseño HTML profesional
- Versión de texto plano

## 🧪 Testing

Para probar localmente:

1. Instala las dependencias: `npm install`
2. Configura las variables de entorno en `.env.local`
3. Ejecuta el servidor: `npm run dev`
4. El formulario estará disponible en la sección de contacto

## 🚨 Troubleshooting

### Error: "Invalid API key"
- Verifica que `RESEND_API_KEY` esté correctamente configurada
- Asegúrate de que la API key sea válida y activa

### Error: "Domain not verified"
- Verifica tu dominio en Resend
- Usa un email verificado en `FROM_EMAIL`

### Error: "Method not allowed"
- Asegúrate de que el formulario haga POST a `/api/contact`
- Verifica que el endpoint esté desplegado en Vercel

### El formulario no se resetea
- Verifica que la respuesta del servidor sea exitosa (status 200)
- Revisa la consola del navegador para errores

## 📝 Personalización

### Cambiar el email de destino
Edita la variable `CONTACT_EMAIL` en las variables de entorno.

### Modificar el diseño del email
Edita el template HTML en `api/contact.js` en la sección `html:`.

### Cambiar los mensajes de alerta
Modifica los mensajes en `src/components/Contact.jsx` en la función `showAlert`.

## 🔒 Seguridad

- ✅ Validación de entrada en el servidor
- ✅ Sanitización de datos
- ✅ Rate limiting (configurar en Vercel si es necesario)
- ✅ CORS configurado
- ✅ Variables de entorno seguras

## 📞 Soporte

Si tienes problemas con la configuración:
1. Revisa los logs en Vercel Functions
2. Verifica las variables de entorno
3. Comprueba el estado de tu cuenta de Resend
4. Revisa la consola del navegador para errores del frontend
