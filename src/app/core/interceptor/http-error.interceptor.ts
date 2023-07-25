import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{
    constructor(private snackBarService:MatSnackBar){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((error:any)=>{
            console.log(error);
            if(error.status == 403) {
                this.snackBarService.open("Você não tem autorização para esse recurso","",{duration:1500});
            }
            this.snackBarService.open(error.error.message,"",{duration:1500});
            return throwError(error.message);
        }))
    }
}