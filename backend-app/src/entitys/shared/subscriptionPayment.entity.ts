import { BaseEntity } from '@common/entity/baseEntity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { CompanySettingsEntity } from './companySettings.entity';

@Entity('subscription_payment')
export class SubscriptionPaymentEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  company_id: string;

  @Column({ type: 'varchar', length: 255 })
  subscription_id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 50 })
  currency: string;

  @Column({ type: 'varchar', length: 50 })
  status: 'pending' | 'completed' | 'failed' | 'refunded';

  @Column({ type: 'varchar', length: 255 })
  payment_method: string;

  @Column({ type: 'varchar', length: 255 })
  payment_provider: string;

  @Column({ type: 'varchar', length: 255 })
  transaction_id: string;

  @Column({ type: 'timestamp' })
  payment_date: Date;

  @Column({ type: 'timestamp' })
  next_billing_date: Date;

  @Column({ type: 'jsonb', default: {} })
  metadata: {
    stripe_payment_intent_id: string;
    stripe_subscription_id: string;
    stripe_customer_id: string;
    invoice_url: string;
    receipt_url: string;
  };

  @Column({ type: 'jsonb', default: {} })
  billing_details: {
    name: string;
    email: string;
    phone: string;
    address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
    tax_id?: string;
  };

  @ManyToOne(() => CompanySettingsEntity, (settings) => settings.payments)
  @JoinColumn({ name: 'company_id' })
  company: CompanySettingsEntity;
}
