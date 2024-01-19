import nodemailer from "nodemailer";

export const emailRegistro = async (data) => {
  const { email, nombre, token } = data;

  //TODO : MOVER-HACIA-.ENV
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "30bd5638d2243d",
      pass: "8d62c9f4fb1251",
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
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "30bd5638d2243d",
      pass: "8d62c9f4fb1251",
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
