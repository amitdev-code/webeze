import { BaseEntity } from '@common/entity/baseEntity';
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { TemplateCategoryEntity } from './templateCategory.entity';
import { CompanyWebsiteEntity } from './companyWebsite.entity';

@Entity('website_template')
export class WebsiteTemplateEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  thumbnail: string;

  @Column({ type: 'jsonb', default: [] })
  preview_images: string[];

  @Column({ type: 'varchar', length: 50 })
  slug: string;

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @Column({ type: 'varchar', length: 255 })
  category_id: string;

  @Column({ type: 'jsonb', default: {} })
  template_data: {
    // Global styles and settings
    global: {
      colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
        [key: string]: string;
      };
      typography: {
        font_family: string;
        heading_font: string;
        font_sizes: {
          h1: string;
          h2: string;
          h3: string;
          h4: string;
          h5: string;
          h6: string;
          body: string;
          small: string;
        };
      };
      spacing: {
        section_padding: string;
        container_width: string;
        grid_gap: string;
      };
      animations: {
        enabled: boolean;
        effects: string[];
      };
    };

    // Page structure
    pages: {
      id: string;
      name: string;
      slug: string;
      type: 'home' | 'about' | 'contact' | 'blog' | 'shop' | 'custom';
      sections: {
        id: string;
        type: string;
        content: any;
        settings: {
          background: string;
          padding: string;
          margin: string;
          animation: string;
        };
      }[];
      meta: {
        title: string;
        description: string;
        keywords: string[];
        og_image: string;
      };
    }[];

    // Components library
    components: {
      id: string;
      type: string;
      category: string;
      name: string;
      description: string;
      thumbnail: string;
      content: any;
      settings: any;
      variants: {
        id: string;
        name: string;
        content: any;
        thumbnail: string;
      }[];
    }[];

    // Assets
    assets: {
      images: {
        id: string;
        url: string;
        alt: string;
        category: string;
      }[];
      icons: {
        id: string;
        name: string;
        category: string;
      }[];
      fonts: {
        family: string;
        variants: string[];
        category: string;
      }[];
    };

    // Navigation
    navigation: {
      main: {
        id: string;
        label: string;
        url: string;
        children?: {
          id: string;
          label: string;
          url: string;
        }[];
      }[];
      footer: {
        id: string;
        label: string;
        url: string;
        children?: {
          id: string;
          label: string;
          url: string;
        }[];
      }[];
    };

    // Forms
    forms: {
      id: string;
      name: string;
      fields: {
        id: string;
        type: string;
        label: string;
        placeholder: string;
        required: boolean;
        validation: string[];
      }[];
      settings: {
        submit_button_text: string;
        success_message: string;
        error_message: string;
        redirect_url: string;
      };
    }[];

    // Integrations
    integrations: {
      type: string;
      enabled: boolean;
      settings: any;
    }[];
  };

  @Column({ type: 'jsonb', default: {} })
  features: {
    ecommerce: boolean;
    blog: boolean;
    portfolio: boolean;
    contact_form: boolean;
    newsletter: boolean;
    social_media: boolean;
    analytics: boolean;
    seo: boolean;
    multilingual: boolean;
    custom_domain: boolean;
  };

  @Column({ type: 'jsonb', default: {} })
  metadata: {
    author: string;
    version: string;
    last_updated: Date;
    tags: string[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    required_plan: string[];
    demo_url: string;
    documentation_url: string;
  };

  @Column({ type: 'int', default: 0 })
  usage_count: number;

  @ManyToOne(() => TemplateCategoryEntity, (category) => category.templates)
  @JoinColumn({ name: 'category_id' })
  category: TemplateCategoryEntity;

  @OneToMany(() => CompanyWebsiteEntity, (website) => website.template)
  websites: CompanyWebsiteEntity[];
}
