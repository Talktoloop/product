import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectOptionModule } from '@app/shared/components/selectors/select-option/select-option.module';
import { SelectModule } from '@app/shared/components/selectors/select/select.module';
import { DropdownDirectiveModule } from '@app/shared/directives/dropdown/dropdown-directive.module';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DotsHorizontalIconModule } from '@shared/icons/dots-horizontal-icon/dots-horizontal-icon.module';
import { ReportFormModule } from '@app/shared/components/report-form/report-form.module';
import { PostContextMenuComponent } from './post-context-menu.component';

@NgModule({
  declarations: [PostContextMenuComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    DotsHorizontalIconModule,
    SelectModule,
    SelectOptionModule,
    SharedModule,
    DropdownDirectiveModule,
    ReportFormModule,
  ],
  exports: [PostContextMenuComponent],
})
export class PostContextMenuModule {}
