import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { RegistrarContaComponent } from './components/registrar-conta/registrar-conta.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpErrorInterceptor } from './core/interceptor/http-error.interceptor';
import { LoginComponent } from './components/login/login.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RegistrarTaskComponent } from './components/registrar-task/registrar-task.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from "@angular/material/dialog";
import { DialogTaskComponent } from './components/registrar-task/dialog/dialog-task.component';
import { DialogEditTask } from './components/all-tasks/dialog/dialog-edit-task.component';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    RegistrarContaComponent,
    LoginComponent,
    AllTasksComponent,
    RegistrarTaskComponent,
    DialogTaskComponent,
    DialogEditTask
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpErrorInterceptor,
      multi:true
    },
    {
      provide: MAT_DATE_LOCALE,useValue: 'pt-br'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
