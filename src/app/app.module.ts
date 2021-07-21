import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pagues/portafolio/portafolio.component';
import { AboutComponent } from './pagues/about/about.component';
import { ItemComponent } from './pagues/item/item.component';
import { AppRoutinModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
