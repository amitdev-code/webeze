import { BaseEntity } from '@common/entity/baseEntity';
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CompanyEntity } from './company.entity';
import { SubscriptionPlanEntity } from './subscriptionPlan.entity';
import { SubscriptionPaymentEntity } from './subscriptionPayment.entity';

@Entity('company_settings')
export class CompanySettingsEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  company_id: string;

  @Column({ type: 'bool', default: false })
  txt_record_added: boolean;

  @Column({ type: 'varchar', length: 255, default: null })
  txt_record: string;

  @Column({ type: 'varchar', length: 255, default: null })
  cname: string;

  @Column({ type: 'bool', default: false })
  is_admin_created: boolean;

  @Column({ type: 'timestamp', default: null })
  subscription_updated: Date;

  @Column({ type: 'varchar', length: 255, default: null })
  previousPlan: string;

  @Column({ type: 'jsonb', default: {} })
  billing: {
    stripe_customer_id: string;
    stripe_subscription_id: string;
    payment_method_id: string;
    default_payment_method: string;
    billing_email: string;
    billing_name: string;
    billing_phone: string;
    billing_address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
    tax_id?: string;
    invoice_prefix?: string;
  };

  @Column({ type: 'jsonb', default: {} })
  smtp: {
    host: string;
    port: number;
    username: string;
    password: string;
    from_email: string;
    from_name: string;
    encryption: 'tls' | 'ssl';
  };

  @Column({ type: 'jsonb', default: {} })
  sms: {
    provider: string;
    api_key: string;
    api_secret: string;
    from_number: string;
  };

  @Column({ type: 'jsonb', default: {} })
  two_fact_auth: {
    enabled: boolean;
    method: 'sms' | 'email' | 'authenticator';
    backup_codes: string[];
  };

  @Column({ type: 'jsonb', default: {} })
  subscription: {
    status: 'active' | 'past_due' | 'canceled' | 'trialing' | 'unpaid';
    current_period_start: Date;
    current_period_end: Date;
    cancel_at_period_end: boolean;
    canceled_at: Date;
    trial_start: Date;
    trial_end: Date;
    quantity: number;
    plan_id: string;
  };

  @OneToOne(() => CompanyEntity, (company) => company.settings)
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => SubscriptionPlanEntity, (plan) => plan.companies)
  @JoinColumn({ name: 'subscription.plan_id' })
  subscription_plan: SubscriptionPlanEntity;

  @OneToMany(() => SubscriptionPaymentEntity, (payment) => payment.company)
  payments: SubscriptionPaymentEntity[];
}
