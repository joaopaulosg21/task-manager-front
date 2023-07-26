import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { LoginTokenService } from 'src/app/services/login-token.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/types/task.type';
import { Observable, map, merge, startWith, switchMap } from "rxjs";
import { allTasksResponse } from 'src/app/types/allTasksResponse.type';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private tasksService:TasksService, 
    private tokenService:LoginTokenService) {}

  tasks:Task[] = [];
  token:string = "";
  total:number = 0;
  ngAfterViewInit() {
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        this.tokenService.getToken().subscribe((token:any) => {
          if(typeof token == "string") {
            this.token = token;
          }
        });
        return this.tasksService.findAll(this.token,this.paginator.pageIndex);
      }),map((data) => {
        if(data === null) {
          return [];
        }
        this.total = data.total;
        return data;
      }),
    ).subscribe((data:any) => {
      this.tasks = data.items;
      this.total = data.total;
    });
    
  }

  //Table config
  displayedColumns: string[] = ['title', 'description', 'createdAt', 'limit_date',"status"];

}
