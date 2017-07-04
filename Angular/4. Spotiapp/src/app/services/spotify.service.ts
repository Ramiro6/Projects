import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http ) { }

  getArtistas(termino:string){

    let headers = new Headers();
    headers.append( 'Authorization', 'Bearer BQAaS66Fh2gI6y13HkcUkCBQSVQnFUB4EQkJmhzcV4pjR-pmsniO-ZmxLtsvYmXB-2htiTVLRfOG2QWL1hitY11bjYQdrM776rLJqMcWF0qxKXzARpBtxqv3_e9u0GbOHN-cAjJd-fWtVqSGo-gyffJXLb_3f6mWO6SkAGL7ZDxXL-vwKsyQSxV1gaeZSMHi2xV97Rte0TYZz8VNesbWdMViWHppJFIVcU85DrendWp_ShuH-BWqHkkLZYy2NzbA9oV_HDj2KHCF6rXfntQYGYxBa0onzFV2_t-MVNVZF4dz5cIV70FvZktVfyU')

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
           .map( res =>{
            //  console.log(res.json().artists.items);
             this.artistas = res.json().artists.items
            //  console.log(this.artistas)
             //
            //  return res.json().artists.items
           })
  }

  getArtista(id:string){

    let headers = new Headers();
    headers.append( 'Authorization', 'Bearer BQAaS66Fh2gI6y13HkcUkCBQSVQnFUB4EQkJmhzcV4pjR-pmsniO-ZmxLtsvYmXB-2htiTVLRfOG2QWL1hitY11bjYQdrM776rLJqMcWF0qxKXzARpBtxqv3_e9u0GbOHN-cAjJd-fWtVqSGo-gyffJXLb_3f6mWO6SkAGL7ZDxXL-vwKsyQSxV1gaeZSMHi2xV97Rte0TYZz8VNesbWdMViWHppJFIVcU85DrendWp_ShuH-BWqHkkLZYy2NzbA9oV_HDj2KHCF6rXfntQYGYxBa0onzFV2_t-MVNVZF4dz5cIV70FvZktVfyU')

    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
           .map( res =>{
             console.log(res.json());
             return res.json();

           })

  }

  getTop(id:string){

    let headers = new Headers();
    headers.append( 'Authorization', 'Bearer BQAaS66Fh2gI6y13HkcUkCBQSVQnFUB4EQkJmhzcV4pjR-pmsniO-ZmxLtsvYmXB-2htiTVLRfOG2QWL1hitY11bjYQdrM776rLJqMcWF0qxKXzARpBtxqv3_e9u0GbOHN-cAjJd-fWtVqSGo-gyffJXLb_3f6mWO6SkAGL7ZDxXL-vwKsyQSxV1gaeZSMHi2xV97Rte0TYZz8VNesbWdMViWHppJFIVcU85DrendWp_ShuH-BWqHkkLZYy2NzbA9oV_HDj2KHCF6rXfntQYGYxBa0onzFV2_t-MVNVZF4dz5cIV70FvZktVfyU')

    let query = `/${ id }/top-tracks?country=us`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
           .map( res =>{
             console.log(res.json().tracks);
             return res.json().tracks;

           })

  }

}
