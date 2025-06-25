import { Injectable } from '@nestjs/common';
import { StoryRecipientRepository } from '../repository/story-recipient.repository';
import { StoryRecipientEntity } from '../entity/story-recipient.entity';

@Injectable()
export class StoryRecipientService {
  constructor(
    private readonly storyRecipientRepository: StoryRecipientRepository,
  ) {}

  findLastEntryByCommunicatorId(
    senderId: string,
    relations: string[] = null,
  ): Promise<StoryRecipientEntity> {
    return this.storyRecipientRepository.findLastEntryByCommunicatorId(
      senderId,
      relations,
    );
  }
}
