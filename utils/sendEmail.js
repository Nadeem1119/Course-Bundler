import {createTransport} from "nodemailer"

export const sendEmail = async(to,subject,text)=>{

  const transporter=createTransport(
    {
      /*
      host : "sandbox.smtp.mailtrap.io",
      port : 2525,
      auth:{
        user:"cad9d9497df62f",
        pass:"cb9e08b90ca382"
      }
      */
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }
  );
  await transporter.sendMail({
    to,subject,text,
  })
}