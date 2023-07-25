import { Component, OnInit } from '@angular/core';
import { LoginTokenService } from 'src/app/services/login-token.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/types/task.type';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{

  constructor(private tasksService:TasksService, private tokenService:LoginTokenService) {}
  tasks:Task[] = [];
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.tokenService.getToken().subscribe((token:any) => {
      if(typeof token == "string") {
        this.tasksService.findAll(token).subscribe((data:any) => {
          console.log(data);
          this.tasks = data;
        });
      }
    })
  }
  
}
