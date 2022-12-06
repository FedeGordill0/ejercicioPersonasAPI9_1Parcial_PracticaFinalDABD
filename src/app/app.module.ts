import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { PersonaBajaComponent } from './personas/persona-baja/persona-baja.component';
import { PersonaModificarComponent } from './personas/persona-modificar/persona-modificar.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { FormsModule } from '@angular/forms';
import { PersonaService } from './services/persona.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonaAltaComponent,
    PersonaBajaComponent,
    PersonaModificarComponent,
    PersonaListadoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PersonaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
