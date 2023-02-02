import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcadorDirective } from './marcador.directive';
import { TituloComponent } from './titulo.component';
import { ConversorPipe } from './conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarcadorDirective,
    TituloComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
