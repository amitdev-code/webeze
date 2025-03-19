import { BaseEntity } from '@common/entity/baseEntity';
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CompanyEntity } from './company.entity';
import { WebsiteTemplateEntity } from './websiteTemplate.entity';
import { WebsiteAnalyticsEntity } from './websiteAnalytics.entity';
import { WebsiteBlogEntity } from './websiteBlog.entity';
import { WebsiteBlogCategoryEntity } from './websiteBlogCategory.entity';
import { WebsiteBlogTagEntity } from './websiteBlogTag.entity';

@Entity('company_website')
export class CompanyWebsiteEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', default: '' })
  description: string;

  @Column({ type: 'jsonb', default: {} })
  content: {
    pages: {
      id: string;
      title: string;
      slug: string;
      content: any;
      meta: {
        title: string;
        description: string;
        keywords: string[];
      };
    }[];
    navigation: {
      main: any[];
      footer: any[];
    };
    theme: {
      colors: string[];
      fonts: string[];
      styles: any;
    };
  };

  @Column({ type: 'jsonb', default: {} })
  seo: {
    meta_title: string;
    meta_description: string;
    meta_keywords: string[];
    og_image: string;
    og_title: string;
    og_description: string;
    twitter_card: string;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
  };

  @Column({ type: 'jsonb', default: {} })
  integrations: {
    google_analytics: string;
    facebook_pixel: string;
    custom_scripts: string[];
  };

  @Column({ type: 'bool', default: false })
  is_published: boolean;

  @Column({ type: 'timestamp', default: null })
  published_at: Date;

  @Column({ type: 'varchar' })
  company_id: string;

  @Column({ type: 'varchar', default: null })
  template_id: string;

  @ManyToOne(() => CompanyEntity, (company) => company.websites)
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToOne(() => WebsiteTemplateEntity, (template) => template.websites)
  @JoinColumn({ name: 'template_id' })
  template: WebsiteTemplateEntity;

  @OneToMany(() => WebsiteAnalyticsEntity, (analytics) => analytics.website)
  analytics: WebsiteAnalyticsEntity[];

  @OneToMany(() => WebsiteBlogEntity, (blog) => blog.website)
  blogs: WebsiteBlogEntity[];

  @OneToMany(() => WebsiteBlogCategoryEntity, (category) => category.website)
  blog_categories: WebsiteBlogCategoryEntity[];

  @OneToMany(() => WebsiteBlogTagEntity, (tag) => tag.website)
  blog_tags: WebsiteBlogTagEntity[];
}
