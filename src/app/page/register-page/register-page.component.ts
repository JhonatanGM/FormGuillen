import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent{

  nombresControl= new FormControl('',[Validators.required]);
  apellidosControl = new FormControl('',[Validators.required]);
  telefonoFijoControl = new FormControl('',[Validators.minLength(7),Validators.maxLength(7),Validators.pattern('[0-9]*')]);
  celularControl = new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(9),Validators.pattern('[0-9]*')]);
  emailControl = new FormControl('',[Validators.required,Validators.email]);
  reemailControl = new FormControl('',[Validators.required,Validators.email]);
  nombreComercioControl = new FormControl('',[Validators.required]);

  tipoSociedadControl = new FormControl('',[Validators.required]);
  representanteLegalControl = new FormControl('',[Validators.required]);
  razonSocialControl = new FormControl('',[Validators.required]);
  rucControl = new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern('[0-9]*')]);
  terminoCondicionesControl = new FormControl(false,[Validators.requiredTrue]);

  registerForm = new FormGroup({
    nombres : this.nombresControl,
    apellidos: this.apellidosControl,
    telefonoFijo: this.telefonoFijoControl,
    celular: this.celularControl,
    email: this.emailControl,
    reemail: this.reemailControl,
    nombreComercio: this.nombreComercioControl,
    informacionEmpresa: new FormGroup({
      tipoSociedad: this.tipoSociedadControl,
      representanteLegal: this.representanteLegalControl,
      razonSocialControl: this.razonSocialControl,
      ruc: this.rucControl,
    }),
    terminoCondiciones: this.terminoCondicionesControl
  },{
    validators:[
      this.emailValidator()
    ]
  });

  emailValidator(){
    return()=>{
      if(this.emailControl.value !== this.reemailControl.value){

        return{
          emailMatch: true
        };
      }
      return null
    }
  }

 onSubmit(){
    alert("Los datos estan correctos");
 }
}
