import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToptabsPage } from './toptabs.page';

const routes: Routes = [
  {
    path: '',
    component: ToptabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToptabsPageRoutingModule {}
