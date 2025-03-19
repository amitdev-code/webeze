import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ICommunication } from '../interface/communication.interface';
import { MjmlService } from './mjml.service';

@Injectable()
export class EmailService implements ICommunication {
  private transporter: nodemailer.Transporter;
  private readonly commonContext: Record<string, string>;

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

    // Initialize common context values that will be included in all emails
    this.commonContext = {
      logoUrl: process.env.LOGO_URL || 'https://example.com/logo.png',
      companyName: process.env.COMPANY_NAME || 'Your Company',
      privacyUrl: `${process.env.FRONTEND_URL}/privacy`,
      helpUrl: `${process.env.FRONTEND_URL}/help`,
      supportEmail: process.env.SUPPORT_EMAIL || 'support@example.com',
      year: new Date().getFullYear().toString(),
    };
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
      // Merge the common context with the template-specific context
      const mergedContext = {
        ...this.commonContext,
        ...context,
      };

      // Compile the template with the merged context
      const htmlContent = await this.mjmlService.compileTemplate(
        templateName,
        mergedContext,
      );
      // Send the email with the compiled HTML
      return await this.send(to, subject, htmlContent);
    } catch (error) {
      console.error(`Failed to send template email (${templateName}):`, error);
      return false;
    }
  }
}
