import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "hombre",
    acepta: false
  }

  paises = [{
    codigo:"CRi",
    nombre: "Costa Rica"
  },
  {
    codigo:"Esp",
    nombre: "España"
  },
]

sexos:string[] = ["Hombre","Mujer"]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log( "ngForm", forma)
    console.log("Valor", forma.value)
  }

}
