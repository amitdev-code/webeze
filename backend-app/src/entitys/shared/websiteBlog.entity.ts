import { BaseEntity } from '@common/entity/baseEntity';
import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CompanyWebsiteEntity } from './companyWebsite.entity';
import { WebsiteBlogCategoryEntity } from './websiteBlogCategory.entity';
import { WebsiteBlogTagEntity } from './websiteBlogTag.entity';

@Entity('website_blog')
export class WebsiteBlogEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  slug: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text', default: null })
  excerpt: string;

  @Column({ type: 'varchar', length: 255, default: null })
  featured_image: string;

  @Column({ type: 'jsonb', default: [] })
  gallery_images: string[];

  @Column({ type: 'varchar', length: 255 })
  website_id: string;

  @Column({ type: 'varchar', length: 255 })
  category_id: string;

  @Column({ type: 'varchar', length: 255 })
  author_id: string;

  @Column({ type: 'bool', default: false })
  is_published: boolean;

  @Column({ type: 'timestamp', default: null })
  published_at: Date;

  @Column({ type: 'timestamp', default: null })
  scheduled_for: Date;

  @Column({ type: 'int', default: 0 })
  views: number;

  @Column({ type: 'int', default: 0 })
  likes: number;

  @Column({ type: 'int', default: 0 })
  comments_count: number;

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
  settings: {
    allow_comments: boolean;
    require_approval: boolean;
    show_author: boolean;
    show_date: boolean;
    show_category: boolean;
    show_tags: boolean;
    show_related_posts: boolean;
    show_social_sharing: boolean;
    custom_css: string;
    custom_js: string;
  };

  @Column({ type: 'jsonb', default: {} })
  metadata: {
    reading_time: number;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    language: string;
    series: string;
    episode: number;
    custom_fields: Record<string, any>;
  };

  @ManyToOne(() => CompanyWebsiteEntity, (website) => website.blogs)
  @JoinColumn({ name: 'website_id' })
  website: CompanyWebsiteEntity;

  @ManyToOne(() => WebsiteBlogCategoryEntity, (category) => category.blogs)
  @JoinColumn({ name: 'category_id' })
  category: WebsiteBlogCategoryEntity;

  @ManyToMany(() => WebsiteBlogTagEntity, (tag) => tag.blogs)
  @JoinTable({
    name: 'website_blog_tags',
    joinColumn: {
      name: 'blog_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: WebsiteBlogTagEntity[];
}
