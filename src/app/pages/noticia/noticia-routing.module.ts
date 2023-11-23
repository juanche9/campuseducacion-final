import { Routes, RouterModule } from '@angular/router';

import { NoticiaPage } from './noticia.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiaPageRoutingModule {}
