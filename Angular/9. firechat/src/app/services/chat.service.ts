import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from '../interface/mensaje.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
  chats: FirebaseListObservable<any[]>;
  usuario:any = {

  };

  constructor(private db:AngularFireDatabase,
              public afAuth: AngularFireAuth){
      if(localStorage.getItem('usuario')){
        this.usuario = JSON.parse(localStorage.getItem('usuario'))
        console.log(this.usuario)
      } else {
        this.usuario = null;
      }
  }

  cargarMensajes(){
    this.chats = this.db.list('chats',{
      query:{
        limitToLast:20,
        orderByKey: true
      }
    })
    return this.chats;
  }


  agregarMensaje(texto:string){
    let mensaje:Mensaje = {
      nombre: this.usuario.user.displayName,
      mensaje: texto,
      uid: this.usuario.user.uid
    }

    return this.chats.push(mensaje);
  }

  login( proveedor:string ) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(data => {console.log(data)
      this.usuario = data;
      localStorage.setItem('usuario', JSON.stringify(data))
    })
  }

  logout() {
    localStorage.removeItem('usuario');
    this.usuario = null
    this.afAuth.auth.signOut();
  }

}
