import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToptabsPage } from './toptabs.page';

const routes: Routes = [
  {
    path: '',
    component: ToptabsPage,
    children : [

      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then( m => m.Tab5PageModule)
      },
      // {
      //   path: 'tab3/:id',
      //   loadChildren: () => import('../tab3/tab3.module').then( m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/tab4',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabs/tab4',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToptabsPageRoutingModule {}
