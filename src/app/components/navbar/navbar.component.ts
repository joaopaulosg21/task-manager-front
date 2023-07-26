import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginTokenService } from 'src/app/services/login-token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor(private tokenService:LoginTokenService, private router:Router){}

  token$!:Observable<string | null>;

  ngOnInit(): void {
      this.token$ = this.tokenService.getToken();
  }

  logout() {
    this.tokenService.setToken(null);
    this.router.navigateByUrl("/conta/login");
  }
}
