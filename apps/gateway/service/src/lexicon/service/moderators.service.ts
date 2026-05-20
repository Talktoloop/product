import { Injectable } from '@nestjs/common';
import { ModeratorRepository } from '../repository/moderator.repository';
import { ModeratorEntity } from '../entity/moderator.entity';

@Injectable()
export class ModeratorService {
  constructor(private readonly moderatorService: ModeratorRepository) {}
  findAllModerators(  ): Promise<Record<string, string>[]> {
    return this.moderatorService.findAll();
  }

  findModeratorById(id: string): Promise<ModeratorEntity> {
    return this.moderatorService.findById(id);
  }
}
