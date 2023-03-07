import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuenoComponent } from './Acciones/dueno/dueno.component';
import { EspecieComponent } from './Acciones/especie/especie.component';
import { PacienteComponent } from './Acciones/paciente/paciente.component';
import { RazaComponent } from './Acciones/raza/raza.component';
import { VeterinariaComponent } from './Acciones/veterinaria/veterinaria.component';

const routes: Routes = [
  {path:'dueno', component:DuenoComponent},
  {path: 'veterinaria', component:VeterinariaComponent},
  {path: 'paciente', component:PacienteComponent},
  {path: 'raza', component:RazaComponent},
  {path: 'especie', component:EspecieComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
