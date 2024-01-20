import nodemailer from "nodemailer";
export const emailRegistro = async (data) => {
  const { email, nombre, token } = data;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //info email
  const info = await transport.sendMail({
    from: "CPUG- Consejo Profesional  <jU8oQ@example.com>",
    to: email,
    subject: "Confirma tu cuenta",
    text: "Confirma tu cuenta",
    html: ` 
      <p> Hola ${nombre}, confirma tu cuenta en CPUGSM </p>
      <p> Haz click en el siguiente enlace para confirmar tu cuenta </p>
      <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a>
      <p> Si no creaste esta cuenta, puedes ignorar este email </p>
      `,
  });
};

export const emailReset = async (data) => {
  const { email, nombre, token } = data;

  //TODO : MOVER-HACIA-.ENV
  const transport = nodemailer.createTransport({
    host: procces.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //info email
  const info = await transport.sendMail({
    from: "CPUG- Consejo Profesional  <jU8oQ@example.com>",
    to: email,
    subject: " CPUG - Reestablece tu contraseña",
    text: "Reestablece tu contraseña",
    html: ` 
      <p> Hola ${nombre} </p>
      <p> Haz click en el siguiente enlace para cambiar tu contraseña </p>
      <a href="${process.env.FRONTEND_URL}/reset-password/${token}">Cambiar Contraseña</a>
      <p> Si no pediste este cambio, puedes ignorar este email </p>
      `,
  });
};
