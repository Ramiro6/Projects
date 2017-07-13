import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:Object = {

    nombrecompleto: {
      nombre: "ramiro",
      apellido: "Ruiz"
    },

    correo: "ramiro@gmail.com",
    // pasatiempos: ["correr","dormir","comer"]

  }

  constructor() {

    console.log(this.usuario)


    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required,
                                      Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required,
                                        this.noruiz])
      }),
      'correo': new FormControl('', [Validators.required,
                                    Validators.pattern
                                    ("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos': new FormArray([
        new FormControl('correr', Validators.required)
      ]),

      'username': new FormControl('', Validators.required, this.existeusuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl
    })

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ])

    // imprime lo que tiene value changes

    this.forma.controls['username'].valueChanges
    .subscribe(data =>{
      console.log(data)
    })

    // this.forma.setValue( this.usuario );
  }

  ngOnInit() {
  }



  guardarCambios(){
    console.log(this.forma.value)

    this.forma.reset(this.usuario);
  }

  agregarPasatiempos(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required )
    )
  }

  noruiz(control: FormControl): {[s:string]:boolean} {
    if( control.value === "ruiz")
    return {
      noruiz:true
    }
    return null
  }

  noIgual(control: FormControl): {[s:string]:boolean} {
    // console.log(this) este es por el bindç

    let forma:any = this
    if( control.value !== forma.controls['password1'].value)
    return {
      noiguales:true
    }
    return null
  }

  existeusuario(control: FormControl): Promise<any>|Observable<any>{
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          if(control.value === "strider"){
            resolve({existe:true})
          } else {
            resolve( null )
          }
        },3000)
      }
    )
    return promesa;
  }



}
