import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagicLinkComponent } from './magic-link.component';

const routes: Routes = [
  {
    path: '',
    component: MagicLinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicLinkRoutingModule {}
