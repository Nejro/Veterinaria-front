import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Especie} from 'src/app/Interfaces/especie';
import { EspecieService } from 'src/app/Servicios/especie.service';
@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {
  Especie: Array <Especie> = [];
  myForm!: FormGroup;

  constructor(private fb:FormBuilder, private http: HttpClient, private  especieService: EspecieService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nmid:[''],
      nomEsp:[''],


    });
    let arrayEspecie : Array<Especie>=[];
    this.especieService.getEspecie().subscribe(datos=>{
      this.Especie=datos.data;

    });
  }

  guardar(form:FormGroup){
    if (this.myForm.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.actualizar(form);
        return;
      }
      this.especieService.createEspecie(form.value)
        .subscribe(data => {
          alert("Se envió con exito la especie");
          this.refresh();
        }
        )
    } else {
      alert('formulario inválido')
    }
  }

  actualizar(form: FormGroup) {
    this.especieService.updateEspecie(form.value).subscribe(data => {
        alert("Se actualizó con exito!!!")
        this.refresh();
      });
  }



  refresh(){
    let arrayEspecie: Array<Especie>=[];
    this.especieService.getEspecie().subscribe(datos=>{
      this.Especie=datos.data;

    })
  }

  editar(datos:{  nmid: any;  nomEsp:any}){
    this.myForm.setValue({
      nmid:datos.nmid,
      nomEsp: datos. nomEsp,
    })
  }

  deletee(nmid: number){
    var r = confirm("¿Seguro que desea eliminar el registro?");
    if (r == true) {
      this.especieService.delete(nmid) .subscribe(datos => {
        this.refresh();
      })
    } else {
        alert("No se eliminó el registro");
    }
    }

}
