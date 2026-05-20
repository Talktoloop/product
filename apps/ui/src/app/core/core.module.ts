import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MobileNavigationModule } from '@core/mobile-navigation/mobile-navigation.module';
import { environment } from '@env/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { CommentService } from './services/api/comment/comment.service';
import { StoryService } from './services/api/story/story.service';
import { FiltersService } from './services/filters/filters.service';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/localisation/', `.json?v=${environment.translations.version}`);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: environment.translations.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    HeaderModule,
    MobileNavigationModule,
  ],
  exports: [HeaderComponent, MobileNavigationModule],
  providers: [StoryService, CommentService, FiltersService],
})
export class CoreModule {}
