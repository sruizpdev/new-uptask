import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "52ab59862bd71a",
      pass: "097d33f4c5d9f4",
    },
  });

  const info = await transport.sendMail({
    from: '"Uptask - Administrador de proyectos"<cuentas@uptask.com',
    to: email,
    subject: "uptask - confirmacion de cuenta",
    text: "comprueba tu cuenta en uptask",
    html: `<p>Hola ${nombre}</p>
    <p>Tu cuenta ya esta casi lista</p>
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Verificar cuenta</a>
    `,
  });
};
export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;
  
  //TODO: meter todo esto en variables de entorno

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "52ab59862bd71a",
      pass: "097d33f4c5d9f4",
    },
  });

  const info = await transport.sendMail({
    from: '"Uptask - Administrador de proyectos"<cuentas@uptask.com',
    to: email,
    subject: "uptask - Restablece tu password",
    text: "Restablece tu password en uptask",
    html: `<p>Hola ${nombre}</p>
    <p>Restablece tu password</p>
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablece tu password</a>
    `,
  });
};

