import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../types/task.type';
import { allTasksResponse } from '../types/allTasksResponse.type';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { } 
  api:string = environment.api;

  findAll(token:string, page:number) :Observable<allTasksResponse>{
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get<allTasksResponse>(this.api + "/tasks?page="+page+"&size=10",{headers:header});
  }

  addTask(task:Task, token:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.post(this.api + "/tasks/",task,{headers:header});
  }
}
