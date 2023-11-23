import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Intro', url: '/pages/intro', icon: 'star-outline' },
    { title: 'Calculadora', url: '/pages/calculadora', icon: 'calculator-outline' },
    { title: 'Noticia', url: '/pages/noticia', icon: 'newspaper-outline' },
    { title: 'Noticias', url: '/pages/noticias', icon: 'newspaper-sharp' },
    { title: 'Tab-noticias', url: '/pages/tab-noticias', icon: 'tablet-landscape-outline' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
