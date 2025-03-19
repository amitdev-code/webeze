import { BaseEntity } from '@common/entity/baseEntity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { CompanyWebsiteEntity } from './companyWebsite.entity';

@Entity('website_analytics')
export class WebsiteAnalyticsEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  website_id: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'int', default: 0 })
  page_views: number;

  @Column({ type: 'int', default: 0 })
  unique_visitors: number;

  @Column({ type: 'jsonb', default: [] })
  top_pages: {
    path: string;
    views: number;
    unique_views: number;
    avg_time: number;
    bounce_rate: number;
  }[];

  @Column({ type: 'jsonb', default: [] })
  traffic_sources: {
    source: string;
    medium: string;
    views: number;
    unique_views: number;
  }[];

  @Column({ type: 'jsonb', default: [] })
  user_agents: {
    browser: string;
    os: string;
    device: string;
    count: number;
  }[];

  @Column({ type: 'jsonb', default: [] })
  locations: {
    country: string;
    city: string;
    views: number;
    unique_views: number;
  }[];

  @Column({ type: 'jsonb', default: {} })
  performance: {
    avg_load_time: number;
    avg_server_response: number;
    avg_dom_interactive: number;
    avg_first_contentful_paint: number;
  };

  @ManyToOne(() => CompanyWebsiteEntity, (website) => website.analytics)
  @JoinColumn({ name: 'website_id' })
  website: CompanyWebsiteEntity;
}
