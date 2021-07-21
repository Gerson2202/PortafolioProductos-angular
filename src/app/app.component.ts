import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    // creamos constructor para llamar ala paginaservicie alla cargamos la info del seervicio json
    constructor( public infoPaginaServicio: InfoPaginaService){


    }

}
