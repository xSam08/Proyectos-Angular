import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoticiasApp';

  listNoticias: any[] = [];
  loading: boolean = false;
  loadingNotices: boolean = false; 

  constructor(private _noticiasService: NoticiasService) { 

  }

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.loadingNotices = false;
    
    setTimeout(() => {
      this._noticiasService.getNoticias(parametros).subscribe(data => {
        this.loading = false;
        this.loadingNotices = true;
        this.listNoticias = data.articles;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1750);
  }
}
