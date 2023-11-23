import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NoticiasProvider } from 'src/app/providers/noticias/noticias.service';
import { Subscription } from "rxjs";
import { Noticia } from 'src/app/model/noticia.model';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
    private socialSharing: SocialSharing,
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

  checkSharingOptions() {
    this.socialSharing.canShareVia('facebook').then(() => {
      this.canShareFacebook = true;
    }).catch(() => {
      this.canShareFacebook = false;
    });
    this.socialSharing.canShareVia('whatsapp').then(() => {
      this.canShareWhatsApp = true;
    }).catch(() => {
      this.canShareWhatsApp = false;
    });
    this.socialSharing.canShareVia('twitter').then(() => {
      this.canShareTwitter = true;
    }).catch(() => {
      this.canShareTwitter = false;
    });
  }

  shareFacebook() {
    this.socialSharing.shareViaFacebook(this.noticia.Title, this.noticia.Imagen, this.noticia.GUID);
  }

  shareTwitter() {
    this.socialSharing.shareViaTwitter(this.noticia.Title, this.noticia.Imagen, this.noticia.GUID);
  }

  shareWhatsApp() {
    this.socialSharing.shareViaWhatsApp(this.noticia.Title, this.noticia.Imagen, this.noticia.GUID);
  }

  share() {
    this.socialSharing.share(this.noticia.Title, this.noticia.Extracto, this.noticia.Imagen, this.noticia.GUID);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
