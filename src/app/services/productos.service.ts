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
  productosFiltrado: any []=[];

  // 1. paso : importar el hhtpClienta
  // 2. paso : creamos el private cargar productos agragamos la ruta de firebase con su .JSON
  // 3.paso : instacioamos en el construstor el creado anteriormente
  constructor( private Http: HttpClient) {

    this.cargarProductos();
   }

  private cargarProductos(){
    // USO DE PROMESA
    return new Promise( (resolve,reject)=>{

      this.Http.get('https://angular-protafolio-b47d1-default-rtdb.firebaseio.com/procuctos_idx.json')
      .subscribe( (resp :any )=>{
        //  console.log(resp);
         this.cargando = false;     
         this.productos =resp;
   
    })
  
      //  setTimeout(()=>{
      //   this.cargando = false;
      //  },20000);
   });

  }
  getPrducto(id: string){
   return this.Http.get(`https://angular-protafolio-b47d1-default-rtdb.firebaseio.com/procuctos/${ id }.json`)
  }

  buscarProducto( termino :string){

    if (this.productos.length===0){
        //productos cargar
        this.cargarProductos().then(()=>{
          //ejecutar despuesd de tener productos
          // alicamos filtro
         this.filtrarProductos(termino);
        })
    }else{
      // aplicamos filtro
      this.filtrarProductos(termino);
    }
  
  }

  private filtrarProductos(termino :string){
    // console.log(this.productos);
    this.productosFiltrado=[];
    termino=termino.toLocaleLowerCase();
    
    this.productos.forEach( prod =>{

      const titulower= prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino)>=0 || titulower.indexOf(termino)>=0 ) {
          this.productosFiltrado.push(prod);
      } else {
        
      }
    })
    
  }
}
