import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar:boolean = false;

  frase:any = {
    mensaje: "Un gran poder require una gran responsabilidad",
    autor: "Ben Parker"
  }

  personajes:any[] = ["Spiderman", "Venon", "Dr Octopus"];


}
