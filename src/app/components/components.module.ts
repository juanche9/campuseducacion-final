import { NgModule } from '@angular/core';
import { NoticiaRowComponent } from './noticia-row/noticia-row';
import { IonicModule } from "ionic-angular";
import { CategoriasComponent } from './categorias/categorias';
@NgModule({
	declarations: [NoticiaRowComponent,
    CategoriasComponent],
	imports: [IonicModule],
	exports: [NoticiaRowComponent,
    CategoriasComponent]
})
export class ComponentsModule {}
