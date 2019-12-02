import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
  {path: 'auth/signin', component: SigninComponent},
  {path: 'trainingApp/training', component: TrainingComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
