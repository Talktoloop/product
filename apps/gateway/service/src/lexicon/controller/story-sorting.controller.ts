import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StoryModeratorOrderEnum } from '../../common/types';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Sorting')
@Controller('story/moderator/pending/sorting')
export class StorySortingController {
  @ApiOperation({ summary: 'Get list of possible sorting values' })
  @ApiResponse({ status: 200, isArray: true })
  @Get()
  async getListOfSortingValues(): Promise<StoryModeratorOrderEnum[]> {
    return Object.values(StoryModeratorOrderEnum);
  }
}
