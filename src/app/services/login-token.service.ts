import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginTokenService {
  private tokenSubject:BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor() { }

  setToken(token: string | null) {
    if(token) {
      localStorage.setItem("token",token);
    }

    this.tokenSubject.next(token);
  }

  getToken(){
    return this.tokenSubject.asObservable();
  }
}
