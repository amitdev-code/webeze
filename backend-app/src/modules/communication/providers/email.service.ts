import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ICommunication } from '../interface/communication.interface';
import { MjmlService } from './mjml.service';

@Injectable()
export class EmailService implements ICommunication {
  private transporter: nodemailer.Transporter;

  constructor(private readonly mjmlService: MjmlService) {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USERNAME || process.env.EMAIL_USER,
        pass: process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(to: string, subject: string, content: string): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to,
        subject,
        html: content,
      });
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  }

  async sendTemplateEmail(
    to: string,
    subject: string,
    templateName: string,
    context: any,
  ): Promise<boolean> {
    try {
      // Compile the template with the provided context
      const htmlContent = await this.mjmlService.compileTemplate(
        templateName,
        context,
      );
      // Send the email with the compiled HTML
      return await this.send(to, subject, htmlContent);
    } catch (error) {
      console.error(`Failed to send template email (${templateName}):`, error);
      return false;
    }
  }
}
