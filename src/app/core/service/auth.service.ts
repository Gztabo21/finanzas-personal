import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Login } from '../module/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }
  signIn(login:Login){
    return this.angularFireAuth.signInWithEmailAndPassword(login.email,login.password)
  }
}
