import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/services/conta.service';
import { LoginTokenService } from 'src/app/services/login-token.service';
import { Login } from 'src/app/types/login.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private contaService:ContaService, 
    private snackBar:MatSnackBar, private tokenService:LoginTokenService,
    private router:Router){}

  ngOnInit(): void {
  }

  login(email:string,password:string) {

    const login:Login = {
      email:email,
      password:password
    };
 
    this.contaService.login(login).subscribe((data:any) => {
      this.tokenService.setToken(data.object);
      this.snackBar.open("Login bem sucedido","",{duration:2000});
      this.router.navigateByUrl("/tasks/find/all");
    });
  }
}
