import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNoticiasPage } from './tab-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: TabNoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNoticiasPageRoutingModule {}
