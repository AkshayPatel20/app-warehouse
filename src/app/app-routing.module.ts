import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { CommunicateComponent } from './modules/communicate/communicate.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'auth/signin', component: SigninComponent},

  {path: 'communication', component: CommunicateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
