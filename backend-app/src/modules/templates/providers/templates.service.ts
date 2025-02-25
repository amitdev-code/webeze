import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemplatesEntity } from '../../../entitys/shared/templates.entity';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectRepository(TemplatesEntity)
    private readonly templatesRepository: Repository<TemplatesEntity>,
  ) {}
}
