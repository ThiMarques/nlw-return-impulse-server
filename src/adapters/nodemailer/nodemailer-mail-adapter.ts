import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9f7c5c6167fa1e",
      pass: "0ccb5092635c11"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Thiago Marques <thimarsilva18@gmail.com>',
            subject, 
            html: body,
        }); 
    }
}