import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VeterinariaComponent } from './Acciones/veterinaria/veterinaria.component';
import { DuenoComponent } from './Acciones/dueno/dueno.component';
import { PacienteComponent } from './Acciones/paciente/paciente.component';
import { RazaComponent } from './Acciones/raza/raza.component';
import { EspecieComponent } from './Acciones/especie/especie.component';
import { RouterModule } from '@angular/router';
import { DuenofilterPipe } from './pipes/duenofilter.pipe';
import { VetefilterPipe } from './pipes/vetefilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    VeterinariaComponent,
    DuenoComponent,
    PacienteComponent,
    RazaComponent,
    EspecieComponent,
    DuenofilterPipe,
    VetefilterPipe,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
