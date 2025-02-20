import { BaseEntity } from 'src/common/entity/baseEntity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('company_type')
export class CompanyTypeEntity extends BaseEntity {
    @Column({ type: 'varchar', length: 100 })
    type: string;
}