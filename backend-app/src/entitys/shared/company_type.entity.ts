import { BaseEntity } from 'src/common/entity/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity('company_type')
export class CompanyTypeEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;
}
