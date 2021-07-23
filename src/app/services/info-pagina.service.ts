import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  // este info pagina serve se coloca para que funcionde en app,componenent.ts  en shared

  info: InfoPagina = {};
  cargada = false;

  // pripiedad de equipos firebase
  equipo: any []=[];


  constructor( private http: HttpClient) {
 
    // console.log('servicio de pagina lista');
    // para que me lea el private lo coloco aca 
      this.cargarInfo();
      this.cargarEquipo();
    // Leer el archivo JSONC
    // this.http.get('assets/data/data-pagina.json')
    // .subscribe( (resp: InfoPagina)=> {
    //   this.cargada= true;
    //   this.info = resp;
    //   console.log(resp);
      
    // });

   }

  //   DESDE NO STRAEMOS LA INFO :CARGAMOS INFOR DEL FIREBASE
  private cargarInfo()
  {

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina)=> {
      this.cargada= true;
      this.info = resp;
      // console.log(resp);
      
    });   
  }
  // CARGAR EQUIPO
  private cargarEquipo()
  {

    this.http.get('https://angular-protafolio-b47d1-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any)=> {     
      this.equipo = resp;
      // console.log(resp);
      
    });   
  }
}
