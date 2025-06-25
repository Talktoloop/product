import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entity/category.entity';
import { CategoryRepository } from './category.repository';
import { LexiconModule } from '../lexicon/lexicon.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule.forFeature([CategoryEntity, CategoryRepository]),
    LexiconModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
