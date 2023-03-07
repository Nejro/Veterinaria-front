import { Component, OnInit } from '@angular/core';
import { Dueño } from 'src/app/Interfaces/dueño';
import { DueñoService } from 'src/app/Servicios/dueño.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dueno',
  templateUrl: './dueno.component.html',
  styleUrls: ['./dueno.component.css']
})
export class DuenoComponent implements OnInit {

  Dueno:Array <Dueño> = []
  myForm!: FormGroup
  filterPost= '';
  constructor(private fb: FormBuilder, private http:HttpClient, private dueñoService: DueñoService) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      nmid: [''],
      tipid:[''],
      nmtid:[''],
      nomD:[''],
      ciudad:[''],
      direccion:[''],
      telefono:[''],
    });


    let arrayDueño : Array<Dueño>=[];
  this.dueñoService.getDueño().subscribe(datos=>{
    this.Dueno=datos.data;
  })
}
guardar(form:FormGroup){
  if (this.myForm.valid) {
    if (form.value.nmid && form.value.nmid !== 0) {
      this.actualizar(form);
      return;
    }
    this.dueñoService.createDueño(form.value)
      .subscribe(data => {
        alert("Se envió con exito el dueño");
        this.refresh();
      }
      )
  } else {
    alert('formulario inválido')
  }
}

actualizar(form: FormGroup) {
  this.dueñoService.updateDueño(form.value).subscribe(data => {
      alert("Se actualizó con exito!!!")
      this.refresh();
    });
}


refresh(){
  let arrayCliente: Array<Dueño>=[];
  this.dueñoService.getDueño().subscribe(datos=>{
    this.Dueno=datos.data;

  })
}

editar(datos:{nmid:any; tipid:any; nmtid:any; nomD:any; ciudad: any; direccion:any; telefono: any;}){
  this.myForm.setValue({
      nmid:datos.nmid,
      tipid:datos.tipid,
      nmtid:datos.nmtid,
      nomD:datos.nomD,
      ciudad:datos.ciudad,
      direccion:datos.direccion,
      telefono:datos.telefono,
  })

}

deletee(nmid: any){
  var r = confirm("Sseguro que desea eliminar el registro?");
  if (r == true) {
    this.dueñoService.delete(nmid).subscribe(datos => {
      this.refresh();
    })
  } else {
      alert("No se eliminó el registro");
  }
  }


}

