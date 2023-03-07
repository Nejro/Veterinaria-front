import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Paciente } from 'src/app/Interfaces/paciente';
import { PacienteService } from 'src/app/Servicios/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  Paciente: Array <Paciente> = []
  myForm!: FormGroup;
  constructor( private fb:FormBuilder, private http: HttpClient, private pacienteServive:PacienteService) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      nmid:[''],
      nmid_dueno: [''],
      nmid_raza: [''],
      nmid_esp: [''],
      nompet: [''],
      fecNac: [''],
      fecReg: ['']
    });

    let arrayPaciente : Array<Paciente>=[];
    this.pacienteServive.getPaciente().subscribe(datos=>{
      this.Paciente=datos.data;

    })


  }
  guardar(form:FormGroup){
    if (this.myForm.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.actualizar(form);
        return;
      }
      this.pacienteServive.createPaciente(form.value)
        .subscribe(data => {
          alert("Se envió con exito el paciente");
          this.refresh();
        }
        )
    } else {
      alert('formulario inválido')
    }
  }

  actualizar(form: FormGroup) {
    this.pacienteServive.updatePaciente(form.value).subscribe(data => {
        alert("Se actualizó con exito!!!")
        this.refresh();
      });
  }

  refresh(){
    let arrayPaciente: Array<Paciente>=[];
    this.pacienteServive.getPaciente().subscribe(datos=>{
      this.Paciente=datos.data;

    })
  }




  editar(datos:{nmid:any; nompet:any; fecNac:any; fecReg : any; nmid_esp:any; nmid_raza:any;  nmid_dueno:any;}){
    this.myForm.setValue({
       nmid:datos.nmid,
       nompet: datos.nompet,
       fecNac: datos.fecNac,
       fecReg:datos.fecReg,
       nmid_esp:datos.nmid_esp,
       nmid_raza:datos.nmid_raza,
       nmid_dueno: datos.nmid_dueno,

    })
  }

    deletee(nmid: number){
    var r = confirm("¿Seguro que desea eliminar el registro?");
    if (r == true) {
      this.pacienteServive.delete(nmid).subscribe(datos => {
        this.refresh();
      })
    } else {
        alert("No se eliminó el registro");
    }
    }


}
