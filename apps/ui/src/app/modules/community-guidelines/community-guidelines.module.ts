import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommunityGuidelinesRoutingModule } from './community-guidelines-routing.module';
import { CommunityGuidelinesComponent } from './community-guidelines.component';

@NgModule({
  declarations: [CommunityGuidelinesComponent],
  imports: [CommonModule, TranslateModule, CommunityGuidelinesRoutingModule],
})
export class CommunityGuidelinesModule {}
