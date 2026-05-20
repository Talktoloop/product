import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeService } from '@app/modules/home/home.service';
import { InlineLoadingModule } from '@app/shared/components/inline-loading/inline-loading.module';
import { TranslateModule } from '@ngx-translate/core';
import { FilterSectionV2Module } from '@shared/components/filters-section-v2/filter-section-v2.module';
import { ListModule } from '@shared/components/list/list.module';
import { PostPreviewModule } from '@shared/components/post/post-preview/post-preview.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TranslateModule, PostPreviewModule, ListModule, FilterSectionV2Module, InlineLoadingModule],
  exports: [HomeRoutingModule],
  providers: [HomeService],
})
export class HomeModule {}
