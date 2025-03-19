import { BaseEntity } from '@common/entity/baseEntity';
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CompanyWebsiteEntity } from './companyWebsite.entity';
import { WebsiteBlogEntity } from './websiteBlog.entity';
import { CompanyEntity } from './company.entity';

@Entity('website_blog_category')
export class WebsiteBlogCategoryEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 50 })
  slug: string;

  @Column({ type: 'varchar', length: 255, default: null })
  thumbnail: string;

  @Column({ type: 'int', default: 0 })
  display_order: number;

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @Column({ type: 'varchar', length: 255 })
  website_id: string;

  @Column({ type: 'varchar', length: 255 })
  company_id: string;

  @Column({ type: 'jsonb', default: {} })
  metadata: {
    color: string;
    icon: string;
    featured: boolean;
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  };

  @ManyToOne(() => CompanyWebsiteEntity, (website) => website.blog_categories)
  @JoinColumn({ name: 'website_id' })
  website: CompanyWebsiteEntity;

  @ManyToOne(() => CompanyEntity, (company) => company.blog_categories)
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @OneToMany(() => WebsiteBlogEntity, (blog) => blog.category)
  blogs: WebsiteBlogEntity[];
}
