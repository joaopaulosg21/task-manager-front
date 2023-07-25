import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginTokenService } from 'src/app/services/login-token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor(private tokenService:LoginTokenService){}

  token$!:Observable<string | null>;

  ngOnInit(): void {
      this.token$ = this.tokenService.getToken();
  }
}
