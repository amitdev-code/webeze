import { Injectable } from '@nestjs/common';
import { EmailService } from '../providers/email.service';
import { SMSService } from '../providers/sms.service';
import { ICommunication } from '../interface/communication.interface';

export enum CommunicationType {
  EMAIL = 'email',
  SMS = 'sms',
}

@Injectable()
export class CommunicationFactory {
  constructor(
    private readonly emailService: EmailService,
    private readonly smsService: SMSService,
  ) {}

  getCommunicationService(type: CommunicationType): ICommunication {
    switch (type) {
      case CommunicationType.EMAIL:
        return this.emailService;
      case CommunicationType.SMS:
        return this.smsService;
      default:
        throw new Error('Invalid communication type');
    }
  }
}
