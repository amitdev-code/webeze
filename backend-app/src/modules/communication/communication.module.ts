import { Module } from '@nestjs/common';
import { CommunicationFactory } from './method/communication.factory';
import { SMSService } from './providers/sms.service';
import { EmailService } from './providers/email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
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
      template: {
        dir: join(__dirname, '../../../templates/email-templates'),
        adapter: {
          compile: (template: string, options: any) => {
            const compiled = handlebars.compile(template, options);
            return (context: any) => compiled(context);
          },
        },
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [EmailService, SMSService, CommunicationFactory],
  exports: [CommunicationFactory],
})
export class CommunicationModule {
  constructor() {
    // Register partials manually
    const partialsDir = join(__dirname, '../../../templates/email-templates/partials');
    fs.readdirSync(partialsDir).forEach((file) => {
      const partialName = file.split('.')[0]; // Remove .hbs extension
      const partialTemplate = fs.readFileSync(join(partialsDir, file), 'utf8');
      handlebars.registerPartial(partialName, partialTemplate);
    });
  }
}
