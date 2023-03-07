import { Component, OnInit } from '@angular/core';
import { Raza } from 'src/app/Interfaces/raza';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RazaService } from 'src/app/Servicios/raza.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-raza',
  templateUrl: './raza.component.html',
  styleUrls: ['./raza.component.css']
})
export class RazaComponent implements OnInit {
  Raza: Array <Raza> = []
  myForm!: FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient,  private razaService: RazaService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nmid:[''],
      nomRaz:[''],

    });
    let arrayRaza: Array<Raza>=[];
    this.razaService.getRaza().subscribe(datos=>{
      this.Raza=datos.data;
      console.log(datos);
    });
  }

  guardar(form:FormGroup){
    if (this.myForm.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.actualizar(form);
        return;
      }
      this.razaService.createRaza(form.value)
        .subscribe(data => {
          alert("Se envió con exito la raza");
          this.refresh();
        }
        )
    } else {
      alert('formulario inválido')
    }
  }

  actualizar(form: FormGroup) {
    this.razaService.updateRaza(form.value).subscribe(data => {
        alert("Se actualizó con exito!!!")
        this.refresh();
      });
  }
  refresh(){
    let arrayCliente: Array<Raza>=[];
    this.razaService.getRaza().subscribe(datos=>{
      this.Raza=datos.data;

    })
  }
  editar(datos:{  nmid: any;  nomRaz:any}){
    this.myForm.setValue({
      nmid:datos.nmid,
      nomRaz: datos.nomRaz,
    })
  }

  deletee(nmid: number){
    var r = confirm("¿Seguro que desea eliminar el registro?");
    if (r == true) {
      this.razaService.delete(nmid) .subscribe(datos => {
        this.refresh();
      })
    } else {
        alert("No se eliminó el registro");
    }
    }


}
