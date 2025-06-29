import { EntityRepository, Repository } from 'typeorm';
import { IvrrCallEntity } from '../entity/ivrr-call.entity';

@EntityRepository(IvrrCallEntity)
export class IvrrCallRepository extends Repository<IvrrCallEntity> {}
