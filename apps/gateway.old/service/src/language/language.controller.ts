import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  CustomError,
  ValidationPipe,
  CHECK_TRANSLATION_ERROR,
} from '@ourloop/shared';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LanguageService } from './language.service';
import { checkTranslationSchema } from './request/schema/check-translation.schema';
import { checkTranslationDto } from './request/dto/check-translation.dto';
import { CheckTranslationRO } from './response/check-translation.ro';
import { plainToClass, plainToInstance } from 'class-transformer';
import { LanguageRO } from './response/language.ro';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Language')
@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @ApiOperation({ summary: 'Check translation content' })
  @ApiResponse({ status: 200, type: CheckTranslationRO })
  @Post('/check')
  @HttpCode(HttpStatus.OK)
  async checkTranslation(
    @Body(new ValidationPipe(checkTranslationSchema))
    data: checkTranslationDto,
  ): Promise<CheckTranslationRO> {
    const { content } = data;
    const result = await this.languageService
      .checkTranslationByAWS(content)
      .catch((error) => {
        throw new CustomError(CHECK_TRANSLATION_ERROR, error);
      });

    return plainToClass(CheckTranslationRO, result);
  }

  @ApiOperation({ summary: 'Get list of supported languages' })
  @ApiResponse({ status: 200, type: LanguageRO, isArray: true })
  @Get('/')
  async getListOfTranslations(): Promise<LanguageRO[]> {
    const languages = await this.languageService.getVisibleLanguages();
    return plainToClass(LanguageRO, languages);
  }

  @ApiOperation({ summary: 'Get list of all languages' })
  @ApiResponse({ status: 200, type: LanguageRO, isArray: true })
  @Get('/all')
  async getListOfAllLanguages(): Promise<LanguageRO[]> {
    const allLanguages = await this.languageService.getLanguages()

    return plainToInstance(LanguageRO, allLanguages);
  }
}
