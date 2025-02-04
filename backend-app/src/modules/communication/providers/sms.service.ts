import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { ICommunication } from '../interface/communication.interface';

@Injectable()
export class SMSService implements ICommunication {
  private client: Twilio;

  constructor() {
    this.client = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }

  async send(to: string, content: string): Promise<boolean> {
    try {
      await this.client.messages.create({
        body: content,
        to,
        from: process.env.TWILIO_PHONE_NUMBER,
      });
      return true;
    } catch (error) {
      console.error('SMS sending failed:', error);
      return false;
    }
  }
}
