import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginTokenService } from 'src/app/services/login-token.service';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/types/task.type';
import { DialogTaskComponent } from './dialog/dialog-task.component';

@Component({
  selector: 'app-registrar-task',
  templateUrl: './registrar-task.component.html',
  styleUrls: ['./registrar-task.component.css']
})
export class RegistrarTaskComponent{


  constructor(private TasksService:TasksService,
    private tokenService:LoginTokenService, private snackBar:MatSnackBar,
    private dialog:MatDialog){}
    @ViewChild('title') inputTitle: any;
    @ViewChild('description') inputDescription: any;

  date:string = "";
  getDate(dateObj:any) {
    const stringified = JSON.stringify(dateObj.value);
    const sub = stringified.substring(1, 11);
    const str = sub.split("-").reverse().join("/");
    this.date = str;
  }

  task!:Task;
  createTask(title:string,description:string) {
    const task:Task = {
      title:title,
      description:description,
      limit_date:this.date
    };

    this.tokenService.getToken().subscribe((token) => {
      if(typeof token == "string") {
        this.TasksService.addTask(task,token).subscribe((data:any) => {
          this.snackBar.open(data.message,"",{duration:2000});
          this.clearInputs();
          this.dialog.open(DialogTaskComponent,{
            data:{
              task: data.object
            }
          });
        });
      }
    });
  }

  clearInputs() {
    this.inputTitle.nativeElement.value = "";
    this.inputDescription.nativeElement.value = "";
  }

}
