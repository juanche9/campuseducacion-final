import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NoticiasProvider } from 'src/app/providers/noticias/noticias.service';
import { Subscription } from "rxjs";
import { Noticia } from 'src/app/model/noticia.model';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit, OnDestroy {
  noticia: Noticia;
  subscriptions: Subscription[] = [];
  canShareFacebook = false;
  canShareTwitter = false;
  canShareEmail = false;
  canShareGoogle = false;
  canShareWhatsApp = false;

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasProvider,
    public toastCtrl: ToastController
  ) {
    this.noticia = new Noticia(0,'','','','','','',[],'');
  }

  ngOnInit() {
    const idNoticia = this.route.snapshot.paramMap.get('idNoticia');
    if (idNoticia !== null) {
      const sub = this.noticiasService.getNoticia(+idNoticia).subscribe(
        (noticia: any) => {
          this.noticia = noticia;
        }
      );
      this.subscriptions.push(sub);
    } else {
      // Manejar el caso donde 'idNoticia' es null (por ejemplo, redireccionar o mostrar un mensaje de error)
    }
  }


  async share() {
    await Share.share({
      title: this.noticia.Title,
      text: this.noticia.Extracto,
      url: this.noticia.GUID,
      dialogTitle: 'Compartir Noticia',
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
