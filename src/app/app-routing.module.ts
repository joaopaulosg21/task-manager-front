import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrarContaComponent } from './components/registrar-conta/registrar-conta.component';
import { LoginComponent } from './components/login/login.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { RegistrarTaskComponent } from './components/registrar-task/registrar-task.component';

const routes: Routes = [
  {path:"", component:MainPageComponent},
  {path:"conta/registro", component: RegistrarContaComponent},
  {path:"conta/login", component: LoginComponent},
  {path:"tasks/find/all", component: AllTasksComponent},
  {path:"tasks/registro",component: RegistrarTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
