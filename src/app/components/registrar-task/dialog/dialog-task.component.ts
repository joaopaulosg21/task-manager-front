import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Task } from "src/app/types/task.type";

@Component({
    selector: 'dialog-task',
    templateUrl: 'dialog-content.html',
    styleUrls: ['./dialog-task.component.css']
  })
  export class DialogTaskComponent implements OnInit{

    constructor(@Inject(MAT_DIALOG_DATA) public data:any, private router:Router) {}
    task!:Task;
    ngOnInit(): void {
        this.task = this.data.task;
        console.log(this.task);
    }

    allTasks() {
      this.router.navigateByUrl("/tasks/find/all")
    }

    createTask() {
      this.router.navigateByUrl("/tasks/registro");
    }
  }