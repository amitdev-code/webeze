import { BaseEntity } from '@common/entity/baseEntity';
import { Column, Entity, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { CompanyWebsiteEntity } from './companyWebsite.entity';
import { WebsiteBlogEntity } from './websiteBlog.entity';
import { CompanyEntity } from './company.entity';

@Entity('website_blog_tag')
export class WebsiteBlogTagEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  slug: string;

  @Column({ type: 'varchar', length: 255, default: null })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  website_id: string;

  @Column({ type: 'varchar', length: 255 })
  company_id: string;

  @Column({ type: 'jsonb', default: {} })
  metadata: {
    color: string;
    icon: string;
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  };

  @ManyToOne(() => CompanyWebsiteEntity, (website) => website.blog_tags)
  @JoinColumn({ name: 'website_id' })
  website: CompanyWebsiteEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.blog_tags)
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @ManyToMany(() => WebsiteBlogEntity, (blog) => blog.tags)
  blogs: WebsiteBlogEntity[];
}
