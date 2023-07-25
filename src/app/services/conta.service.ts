import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user.type';
import { environment } from 'src/environments/environment';
import { Login } from '../types/login.type';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }
  api:string = environment.api;

  createUser(user:User) {
    return this.http.post(this.api+"/users/",user);
  }

  login(login:Login) {
    return this.http.post(this.api+"/users/login",login);
  }
}
