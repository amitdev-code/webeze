import { BaseEntity } from 'src/common/entity/baseEntity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CompanySettingsEntity } from './companySettings.entity';
import { UsersEntity } from '@entity/main/user.entity';
import { CompanyTypeEntity } from './company_type.entity';
import { CompanyWebsiteEntity } from './companyWebsite.entity';
import { WebsiteBlogCategoryEntity } from './websiteBlogCategory.entity';
import { WebsiteBlogTagEntity } from './websiteBlogTag.entity';

@Entity('company')
export class CompanyEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, default: null })
  logo: string;

  @Column({ type: 'varchar', length: 100 })
  sub_domain: string;

  @Column({ type: 'bool', default: false })
  is_domain_mapped: boolean;

  @Column({ type: 'varchar', default: '' })
  domain: string;

  @Column({ type: 'bool', default: false })
  agency: boolean;

  @Column({ type: 'bool', default: false })
  hipaa: boolean;

  @Column({ type: 'jsonb', default: {} })
  contact_info: {
    email: string;
    phone: string;
    address: string;
    social_media: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };

  @Column({ type: 'jsonb', default: {} })
  branding: {
    primary_color: string;
    secondary_color: string;
    font_family: string;
    logo_url: string;
    favicon_url: string;
  };

  @OneToOne(() => CompanySettingsEntity, (settings) => settings.company, {
    cascade: true,
  })
  @JoinColumn()
  settings: CompanySettingsEntity;

  @OneToMany(() => CompanyTypeEntity, (type) => type.id, {
    cascade: true,
  })
  @JoinColumn()
  type: CompanyTypeEntity;

  @ManyToOne(() => UsersEntity, (user) => user.companies)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @Column({ type: 'varchar' })
  user_id: string;

  @OneToMany(() => CompanyWebsiteEntity, (website) => website.company)
  websites: CompanyWebsiteEntity[];

  @OneToMany(() => WebsiteBlogCategoryEntity, (category) => category.company)
  blog_categories: WebsiteBlogCategoryEntity[];

  @OneToMany(() => WebsiteBlogTagEntity, (tag) => tag.company)
  blog_tags: WebsiteBlogTagEntity[];
}
