import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToptabsPageRoutingModule } from './toptabs-routing.module';

import { ToptabsPage } from './toptabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToptabsPageRoutingModule
  ],
  declarations: [ToptabsPage]
})
export class ToptabsPageModule {}
