import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { LoginTokenService } from "src/app/services/login-token.service";
import { TasksService } from "src/app/services/tasks.service";
import { Task } from "src/app/types/task.type";

@Component({
    selector: 'dialog-edit-task',
    templateUrl: 'dialog-content.html',
    styleUrls: ['./dialog-task.component.css']
  })
  export class DialogEditTask implements OnInit{

    constructor(@Inject(MAT_DIALOG_DATA) public data:any, 
    private tasksService:TasksService, private tokenService:LoginTokenService,
    private snackBar:MatSnackBar) {}
    task!:Task;
    ngOnInit(): void {
        this.task = this.data;
    }

    statusChange:string = "";
    saveStatus(status:any) {
      this.statusChange = status;
    }

    salvar(taskId:any) {
      this.tokenService.getToken().subscribe((token:any) => {
        if(typeof token == "string") {
          if(this.statusChange != "") {
            if(this.statusChange == "INICIADA") {
              this.tasksService.startTask(taskId,token).subscribe((data:any) => {
                this.snackBar.open(data.message,"",{duration:2000});
              })
            }

            if(this.statusChange == "TERMINADA") {
              this.tasksService.finishTask(taskId,token).subscribe((data:any) => {
                this.snackBar.open(data.message,"",{duration:2000});
              })
            }
          }
        }
      })
    }

    status:string[] = ["CRIADA","INICIADA","TERMINADA"];
  }