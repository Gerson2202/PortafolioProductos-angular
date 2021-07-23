import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productoInfo: ProductoDescripcion = {};
  id: string = '';
  // PARA EXTRARER LA INFO DE SOLO EL DI 
  // private route: ActivatedRoute
  constructor( private route: ActivatedRoute,
                public productoService: ProductosService
    ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(parametro=>{

      // DE ESTA MANERA LEEMOS Y EXTRAEMOS LOS PARAMETROS QUE TIENE LA URL
      // console.log(parametro['id']);
        this.productoService.getPrducto(parametro['id'])
        .subscribe( (producto: ProductoDescripcion )  =>{
        this.id=parametro['id'];
        this.productoInfo=producto;
        // console.log(producto);
        
      })
    })
    
  }

}
