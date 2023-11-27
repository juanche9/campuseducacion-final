import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from 'src/app/model/noticia.model';
import { Storage } from '@ionic/storage';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoticiasProvider {
  ENDPOINT = 'https://www.campuseducacion.com/blog/API/Noticias/';
  NOTICIA = 'http://www.campuseducacion.com/blog/API/Noticias/';
  favoritas: Number[] = [];
  constructor(
    public http: HttpClient,
    public storage: Storage) {
    }
    getNoticiasCategoriaSearch(categoria: string | number | boolean, criteria: string | number | boolean) {
      let params = new HttpParams();
      if (categoria!=0) {
        params = params.set('categoria', categoria);
      }
      params = params.set('criteria', criteria);
      return this.getNoticias(params);
    }

    getNoticiasCategoria(categoria: string | number | boolean) {
      let params = new HttpParams();
      if (categoria == 0 && this.favoritas.length>0) {
        params = params.set('favoritas', this.favoritas.join(','));
      } else if (categoria!=0) {
        params = params.set('categoria', categoria);
      }
      return this.getNoticias(params);
    }

    getNoticias(params: HttpParams) {
      return this.http.get(this.ENDPOINT, { params }).pipe(
        first(),
        map(res =>  <Noticia[]>res),
        map(res => res.filter(this.parseDate))
      );
    }
  parseDate(parseDate: any): Noticia[] {
    throw new Error('Method not implemented.');
  }

    getNoticia(idNoticia: number) {
      return this.http.get(this.NOTICIA+idNoticia).pipe(
        first(),
        map(res => <Noticia>res)
      );
    }
}
