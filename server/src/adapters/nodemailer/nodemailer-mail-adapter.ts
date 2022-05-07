import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a62bbe03999de0",
    pass: "31ddf9ba8aa116"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
    from: 'Equipe Feedget <hello@feedget.com>',
    to: 'Douglas Constancio <douglas.pconstancio@gmail.com>',
    subject,
    html: body,
  });
  }
}
