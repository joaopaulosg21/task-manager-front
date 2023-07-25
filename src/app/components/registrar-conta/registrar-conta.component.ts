import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContaService } from 'src/app/services/conta.service';
import { User } from 'src/app/types/user.type';
@Component({
  selector: 'app-registrar-conta',
  templateUrl: './registrar-conta.component.html',
  styleUrls: ['./registrar-conta.component.css']
})
export class RegistrarContaComponent implements OnInit{
  
  constructor(private contaService:ContaService, private snackBar:MatSnackBar){}

  ngOnInit(): void {}

  createUser(name:string,email:string,password:string) {
    const user:User = {
      name:name,
      email:email,
      password:password
    };

    this.contaService.createUser(user).subscribe((data:any) => {
      this.snackBar.open(data.message,"",{duration:2000});
    });
  }
}
