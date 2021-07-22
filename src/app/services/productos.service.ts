import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  // inicia la clase
  cargando= true;
  productos: any []=[];

  // 1. paso : importar el hhtpClienta
  // 2. paso : creamos el private cargar productos agragamos la ruta de firebase con su .JSON
  // 3.paso : instacioamos en el construstor el creado anteriormente
  constructor( private Http: HttpClient) {

    this.cargarProductos();
   }

  private cargarProductos(){
 
   this.Http.get('https://angular-protafolio-b47d1-default-rtdb.firebaseio.com/procuctos_idx.json')
   .subscribe( (resp :any )=>{
      console.log(resp);
      this.cargando = false;
     
       this.productos =resp;

      //  setTimeout(()=>{
      //   this.cargando = false;
      //  },20000);
   });

  }
}
