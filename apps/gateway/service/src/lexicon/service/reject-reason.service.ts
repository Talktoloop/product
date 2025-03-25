import { Injectable } from '@nestjs/common';
import { RejectReasonRepository } from '../repository/reject-reason.repository';
import { RejectReasonEntity } from '../entity/reject-reason.entity';
import { CustomError, REJECT_REASON_NOT_FOUND } from '@ourloop/shared';

@Injectable()
export class RejectReasonService {
  constructor(
    private readonly rejectReasonRepository: RejectReasonRepository,
  ) { }
  findAll(): Promise<RejectReasonEntity[]> {
    return this.rejectReasonRepository.find({ where: { isTopLevel: true }, relations: { children: true }, order: { id: 'DESC' } });
  }

  findByIdsOrFail(ids: number[]): Promise<RejectReasonEntity[]> {
    return Promise.all(
      ids.map((value) => this.findOneByParamsOrFail({ id: value })),
    );
  }

  async findOneByParamsOrFail(params: {
    id?: number;
    code?: string;
  }): Promise<RejectReasonEntity> {
    return this.rejectReasonRepository.findOneByParams(params).then((data) => {
      if (!data) {
        throw new CustomError(REJECT_REASON_NOT_FOUND, {
          error: 'Reject reason ID does not exist',
        });
      }

      return data;
    });
  }
}
