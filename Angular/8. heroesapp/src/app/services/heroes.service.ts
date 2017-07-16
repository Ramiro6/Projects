import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Heroe } from '../components/interface/heroe.interface'
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL:string = "token-api"

  heroeUrl:string = "token-api"

  constructor( private http:Http ) { }


  nuevoHeroe( heroe:Heroe){

    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers })
           .map( res=> {
             console.log(res.json())
             return res.json();
           })

  }

  actualizarHeroe( heroe:Heroe, key$:string ){

    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${this.heroeUrl}/${ key$ }.json`;

    return this.http.put( this.heroesURL, body, { headers })
           .map( res=> {
             console.log(res.json())
             return res.json();
           })

  }

  getHeroe( key$:string ){
    let url  = `${this.heroeUrl}/${ key$ }.json`
    return this.http.get(url)
    .map(res => res.json());
  }

  getHeroes(){
    return this.http.get( this.heroesURL )
    .map(res => res.json());
  }

  borraHeroe(key$:string){
    let url = `${ this.heroeUrl }/${ key$ }.json`
    return this.http.delete( url )
    .map( res => res.json())
  }

}
