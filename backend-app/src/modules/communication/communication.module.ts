import { Module } from '@nestjs/common';
import { CommunicationFactory } from './method/communication.factory';
import { SMSService } from './providers/sms.service';
import { EmailService } from './providers/email.service';
import { MjmlService } from './providers/mjml.service';
import { MailerModule } from '@nestjs-modules/mailer';
import * as handlebars from 'handlebars';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT as unknown as number,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      defaults: {
        from: process.env.EMAIL_FROM,
      },
    }),
  ],
  providers: [EmailService, SMSService, MjmlService, CommunicationFactory],
  exports: [CommunicationFactory, EmailService, SMSService, MjmlService],
})
export class CommunicationModule {
  constructor() {
    // Register any global Handlebars helpers if needed
    handlebars.registerHelper('formatDate', (date: Date) => {
      // Simple date formatter helper - can be extended for more complex formatting
      return new Date(date).toLocaleDateString();
    });
  }
}
