import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomError } from '@ourloop/shared';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { LanguageId } from '../../language/language-id.decorator';
import { caseManagerMapper } from '../mapper/case-manager.mapper';
import { CaseManagerRO } from '../response/case-manager.ro';
import { CaseManagerService } from '../service/case-manager.service';
import { CASE_MANAGER_NOT_FOUND } from '@ourloop/shared';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Case Manager')
@Controller('case-manager')
export class CaseManagerController {
  constructor(private readonly caseManagerService: CaseManagerService) {}
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
  })
  @Get()
  @ApiOperation({ summary: 'Get random case manager' })
  @ApiResponse({ status: 200, type: CaseManagerRO })
  async getRandomCaseManager(
    @LanguageId() languageId: number,
  ): Promise<CaseManagerRO> {
    const caseManager = await this.caseManagerService.getRandomManager();

    if (!caseManager) {
      throw new CustomError(CASE_MANAGER_NOT_FOUND, {
        error: 'Any case manager does not exist',
      });
    }
    return caseManagerMapper(caseManager, languageId);
  }
}
