import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { } 
  api:string = environment.api;

  findAll(token:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get(this.api + "/tasks?page=0&size=10",{headers:header});
  }
}
