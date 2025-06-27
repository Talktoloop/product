import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensitiveCasesComponent } from './sensitive-cases.component';

const routes: Routes = [{ path: '', component: SensitiveCasesComponent, data: { title: 'sensitiveCases' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensitiveCasesRoutingModule {}
