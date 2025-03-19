import { BaseEntity } from '@common/entity/baseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { CompanySettingsEntity } from './companySettings.entity';

@Entity('subscription_plan')
export class SubscriptionPlanEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'varchar', length: 20 })
  billing_period: 'monthly' | 'yearly';

  @Column({ type: 'jsonb', default: {} })
  features: {
    max_websites: number;
    max_pages_per_website: number;
    max_storage: number;
    custom_domain: boolean;
    analytics: boolean;
    ecommerce: boolean;
    api_access: boolean;
    priority_support: boolean;
    white_label: boolean;
  };

  @Column({ type: 'jsonb', default: {} })
  limits: {
    bandwidth: number;
    visitors: number;
    api_calls: number;
    storage: number;
  };

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @Column({ type: 'bool', default: false })
  is_popular: boolean;

  @Column({ type: 'varchar', length: 50, default: 'basic' })
  tier: 'basic' | 'pro' | 'enterprise';

  @Column({ type: 'jsonb', default: {} })
  metadata: {
    stripe_price_id: string;
    stripe_product_id: string;
    trial_days: number;
    setup_fee: number;
  };

  @OneToMany(
    () => CompanySettingsEntity,
    (settings) => settings.subscription_plan,
  )
  companies: CompanySettingsEntity[];
}
