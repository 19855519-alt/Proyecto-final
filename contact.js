
module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Método no permitido."
    });
  }

  const { nombre, correo, motivo, mensaje } = req.body || {};

  if (
    typeof nombre !== "string" ||
    typeof correo !== "string" ||
    typeof motivo !== "string" ||
    typeof mensaje !== "string"
  ) {
    return res.status(400).json({
      error: "Completá todos los campos correctamente."
    });
  }

  const datos = {
    nombre: nombre.trim(),
    correo: correo.trim(),
    motivo: motivo.trim(),
    mensaje: mensaje.trim()
  };

  if (
    !datos.nombre ||
    datos.nombre.length > 80 ||
    datos.correo.length > 120 ||
    datos.motivo.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo) ||
    !datos.mensaje ||
    datos.mensaje.length > 1500
  ) {
    return res.status(400).json({
      error: "Revisá los campos e intentá nuevamente."
    });
  }

  const webhook = process.env.DISCORD_WEBHOOK_URL;

  if (!webhook) {
    console.error("Falta configurar DISCORD_WEBHOOK_URL.");
    return res.status(500).json({
      error: "El formulario aún no está configurado. Intentá más tarde."
    });
  }

  let webhookUrl;

  try {
    webhookUrl = new URL(webhook);
  } catch {
    return res.status(500).json({
      error: "La configuración del formulario no es válida."
    });
  }

  if (
    webhookUrl.protocol !== "https:" ||
    webhookUrl.hostname !== "discord.com" ||
    !webhookUrl.pathname.startsWith("/api/webhooks/")
  ) {
    return res.status(500).json({
      error: "La configuración de Discord no es válida."
    });
  }

  const payload = {
    allowed_mentions: { parse: [] },
    embeds: [
      {
        title: "📩 Nuevo mensaje — Pupusas 3x1",
        color: 0xA92824,
        fields: [
          { name: "Nombre", value: datos.nombre, inline: true },
          { name: "Correo", value: datos.correo, inline: true },
          { name: "Motivo", value: datos.motivo, inline: false },
          { name: "Mensaje", value: datos.mensaje, inline: false }
        ],
        footer: { text: "Formulario web de Pupusas 3x1" },
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    const discordResponse = await fetch(webhookUrl.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000)
    });

    if (!discordResponse.ok) {
      console.error("Discord respondió con estado:", discordResponse.status);
      return res.status(502).json({
        error: "No se pudo enviar el mensaje a Discord. Intentá más tarde."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Mensaje enviado correctamente."
    });
  } catch (error) {
    console.error("Error al enviar a Discord:", error.message);
    return res.status(502).json({
      error: "No se pudo conectar con Discord. Intentá más tarde."
    });
  }
};
