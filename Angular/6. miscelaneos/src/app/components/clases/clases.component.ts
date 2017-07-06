import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  loading:boolean = false;

  alerta:string = "alert-danger"

  constructor() { }

  ngOnInit() {
  }


  ejecutar(){
    this.loading = true;

    setTimeout( () => this.loading = false, 3000 )
  }

}
