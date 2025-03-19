import { BaseEntity } from '@common/entity/baseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { WebsiteTemplateEntity } from './websiteTemplate.entity';

@Entity('template_category')
export class TemplateCategoryEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 255, default: null })
  thumbnail: string;

  @Column({ type: 'varchar', length: 50 })
  slug: string;

  @Column({ type: 'int', default: 0 })
  display_order: number;

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @Column({ type: 'jsonb', default: {} })
  metadata: {
    icon: string;
    color: string;
    featured: boolean;
    popular: boolean;
  };

  @OneToMany(() => WebsiteTemplateEntity, (template) => template.category)
  templates: WebsiteTemplateEntity[];
}
