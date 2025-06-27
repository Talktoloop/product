import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderModule } from '@core/header/header.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '@shared/components/button/button.module';
import { SelectOptionModule } from '@shared/components/selectors/select-option/select-option.module';
import { SelectModule } from '@shared/components/selectors/select/select.module';
import { ArrowPreviousIconModule } from '@shared/icons/arrow-previous-icon/arrow-previous-icon.module';
import { ExpandMoreIconModule } from '@shared/icons/expand-more-icon/expand-more-icon.module';
import { SubpageHeaderComponent } from './subpage-header.component';

@NgModule({
  declarations: [SubpageHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArrowPreviousIconModule,
    TranslateModule,
    HeaderModule,
    SelectModule,
    SelectOptionModule,
    ButtonModule,
    ExpandMoreIconModule,
    RouterModule,
  ],
  exports: [SubpageHeaderComponent],
})
export class SubpageHeaderModule {}
