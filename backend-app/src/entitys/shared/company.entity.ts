import { BaseEntity } from 'src/common/entity/baseEntity';
import { Column, Entity, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';
import { CompanySettingsEntity } from './companySettings.entity';
import { UsersEntity } from '@entity/main/user.entity';
import { CompanyTypeEntity } from './company_type.entity';

@Entity('company')
export class CompanyEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, default: null })
  logo: string;

  @Column({ type: 'varchar', length: 100 })
  sub_domain: string;

  @Column({ type: 'bool', default: false })
  is_domain_mapped: string;

  @Column({ type: 'varchar', default: '' })
  domain: string;

  @Column({ type: 'bool', default: false })
  agency: boolean;

  @Column({ type: 'bool', default: false })
  hipaa: boolean;

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
}
