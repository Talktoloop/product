import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CommentRepository } from '../repository/comment.repository';
import { AddCommentDto } from '../request/dto/add-comment.dto';
import { StoryEntity } from '../../story/entity/story.entity';
import { v4 as uuidv4 } from 'uuid';
import { CommentEntity } from '../entity/comment.entity';
import {
  CustomError,
  COMMENT_ADD_ERROR,
  COMMENT_ADD_ERROR_ONLY_ONE_NEST,
  COMMENT_ADD_ERROR_NOT_PUBLISHED_STORY,
  COMMENT_ADD_ERROR_NOT_PUBLISHED_COMMENT,
  COMMENT_NOT_FOUND,
  STORY_STATUS,
  COMMENT_STATUS,
} from '@ourloop/shared';
import { CommentVoteRepository } from '../repository/comment-vote.repository';
import { UserEntity } from '../../user/entity/user.entity';
import { LanguageService } from '../../language/language.service';
import { SOURCE_TYPE } from '../../common/constant/source-type.constants';
import { CHANNEL_CONSTANTS } from '../../common/constant/channel.constant';
import { CommentRecipientRepository } from '../repository/comment-recipient.repository';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly commentVoteRepository: CommentVoteRepository,
    @Inject(forwardRef(() => LanguageService))
    private readonly languageService: LanguageService,
    private readonly commentRecipientRepository: CommentRecipientRepository,
  ) {}

  findComment(id: string, relations?: string[]): Promise<CommentEntity> {
    return this.commentRepository
      .findOneOrFail({ where: { id }, relations: relations ?? [] })
      .catch((error) => {
        throw new CustomError(COMMENT_NOT_FOUND, {
          error: error?.message,
        });
      });
  }

  async addComment(
    languageId: number,
    story: StoryEntity,
    data: AddCommentDto,
    user?: UserEntity,
    channel = CHANNEL_CONSTANTS.WEB,
  ): Promise<CommentEntity> {
    try {
      if (story.status !== STORY_STATUS.PUBLISHED) {
        throw new CustomError(COMMENT_ADD_ERROR_NOT_PUBLISHED_STORY, {
          error:
            'Only for published story the comment can be added - addComment',
        });
      }

      let subComment: CommentEntity;
      if (data.parentCommentId) {
        subComment = await this.commentRepository.findByIdOrFail(
          data.parentCommentId,
        );
        if (subComment.parentCommentId) {
          throw new CustomError(COMMENT_ADD_ERROR_ONLY_ONE_NEST, {
            error: 'Only one nest can be added to comment - addComment',
          });
        }

        if (
          ![
            COMMENT_STATUS.PUBLISHED,
            COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
          ].includes(subComment.status as COMMENT_STATUS)
        ) {
          throw new CustomError(COMMENT_ADD_ERROR_NOT_PUBLISHED_COMMENT, {
            error:
              'Only for published comment the comment can be added- addComment',
          });
        }
      }

      const authorNickname = data.nickname ?? user?.nickname;

      const recipient = await this.commentRecipientRepository.save({
        email: data.email,
        phone: data.phone,
        nickname: authorNickname,
      });

      const newComment = await this.commentRepository.save({
        id: uuidv4(),
        recipientId: recipient.id,
        story,
        status: COMMENT_STATUS.PENDING_REVIEW,
        user: user ?? null,
        parent: subComment,
        languageId,
        channel,
        s3FileId: data.s3FileId,
        translations: [
          {
            languageId,
            content: data.content,
          },
        ],
      });

      const language = await this.languageService.getLanguageById(languageId);
      if (language.provider) {
        this.languageService.invokeTranslation(
          newComment.id,
          data.content,
          languageId,
          SOURCE_TYPE.COMMENT,
        );
      }

      return newComment;
    } catch (error) {
      throw new CustomError(COMMENT_ADD_ERROR, error);
    }
  }

  findAllByStoryId(id: string): Promise<CommentEntity[]> {
    return this.commentRepository.findAll(id);
  }

  async findCommentIdsByCountryAndStatus(
    countryId: number,
    status: COMMENT_STATUS,
  ) {
    return this.commentRepository.findCommentIdsByCountryAndStatus(
      countryId,
      status,
    );
  }

  async addNewVote(
    id: string,
    hash: string,
    user?: UserEntity,
  ): Promise<boolean> {
    const comment = await this.commentRepository.findByIdOrFail(id);
    return await this.commentVoteRepository.saveVoteIfNotExits(
      comment,
      hash,
      user,
    );
  }

  async removeVote(
    id: string,
    hash: string,
    user?: UserEntity,
  ): Promise<boolean> {
    const comment = await this.commentRepository.findByIdOrFail(id);
    return await this.commentVoteRepository.removeVoteIfNotExits(
      comment,
      hash,
      user,
    );
  }
}
