import { NgModule } from "@angular/core";

// creamos ruta
import{ Routes,RouterModule } from '@angular/router';
import { AboutComponent } from "./pagues/about/about.component";
import { ItemComponent } from "./pagues/item/item.component";
import { PortafolioComponent } from "./pagues/portafolio/portafolio.component";

const app_routes: Routes =[
  {path: 'home' , component: PortafolioComponent},
  {path: 'item' , component: ItemComponent},
  {path: 'about' , component: AboutComponent},
  {path: '**' , pathMatch:'full', redirectTo: 'home'}
]


@NgModule({
  imports:[
    RouterModule.forRoot (app_routes, {useHash:true} )
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutinModule{


}
