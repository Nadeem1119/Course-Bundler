import {createTransport} from "nodemailer"

export const sendEmail = async(to,subject,text)=>{

  var transporter=createTransport(
    {
      host : "sandbox.smtp.mailtrap.io",
      port : 2525,
      auth:{
        user:"cad9d9497df62f",
        pass:"cb9e08b90ca382"
      }
    }
  );
  await transporter.sendMail({
    to,subject,text,
  })
}