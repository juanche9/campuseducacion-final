import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabNoticiasPageRoutingModule } from './tab-noticias-routing.module';

import { TabNoticiasPage } from './tab-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabNoticiasPageRoutingModule
  ],
  declarations: [TabNoticiasPage]
})
export class TabNoticiasPageModule {}
