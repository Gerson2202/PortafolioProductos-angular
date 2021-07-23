import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public datoServicio: InfoPaginaService,
               private route: Router ){ }

  ngOnInit(): void {
  }

  buscarProducto( termino: string){
    console.log(termino);
     if(termino.length<1)
     {
       return   
     }
     this.route.navigate(['/search',termino]);

  } 
  //IMPLEMENTAMOS EL METODO DEL EVENTO 


}
