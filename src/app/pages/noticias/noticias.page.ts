import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute aquí
import { Subscription } from 'rxjs';
import { Categoria } from 'src/app/model/categoria.model';
import { Noticia } from 'src/app/model/noticia.model';
import { NoticiasProvider } from 'src/app/providers/noticias/noticias.service';
import { NoticiaPage } from '../noticia/noticia.page';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: Noticia[] = [];
  categoria: Categoria;
  subscription: Subscription;
  router: any;

  constructor(public navCtrl: NavController,
    private route: ActivatedRoute,
    private noticiasService: NoticiasProvider,
    public storage: Storage) {
      this.categoria = this.route.snapshot.params['categoria'];
      if (!this.categoria) {
        this.categoria = new Categoria(0, 0, "Noticias", 0, "noticias", []);
      }
      this.subscription = this.noticiasService.getNoticiasCategoria(this.categoria.idCategoria).subscribe(
        (noticias) => {
          this.noticias = noticias;
        },
        (error) => {
          console.log(error);
          this.noticias = [];
        }
      );
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    openNoticia(noticia: Noticia) {
      this.router.navigateByUrl('/pages/noticia', { queryParams: { idNoticia: noticia.ID } }); // Usa navigateByUrl para navegar a la página de noticias
    }

  searchItems(event: { target: { value: any; }; }) {
    // set val to the value of the searchbar
    let val = event.target.value;
    if (val && val.trim() != '') {
      this.subscription = this.noticiasService
      .getNoticiasCategoriaSearch(this.categoria.idCategoria, val)
      .subscribe(
        (noticias) => {
          this.noticias = noticias;
        },
        (error) => {
          console.log(error);
          this.noticias = [];
        }
      );
    }
  }

  doRefresh(refresher: { complete: () => void; }) {
    this.subscription = this.noticiasService.getNoticiasCategoria(this.categoria.idCategoria).subscribe(
      (noticias) => {
        this.noticias = noticias;
      },
      (error) => {},
      () => {
        setTimeout(() => {
          refresher.complete();
        }, 1000);
      }
    );
  }

  doInfinite(infiniteScroll: { complete: () => void; }) {

       setTimeout(() => {
         console.log('Async operation has ended');
         infiniteScroll.complete();
       }, 500);
     }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  ionViewDidLoad() {
    this.storage['get']('intro-done').then((done: any) => {
      if (!done) {
        // this.storage.set('intro-done', true);
        // this.navCtrl.setRoot(IntroPage);
      }
    });
  }

}
