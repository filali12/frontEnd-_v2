import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceilComponent } from './acceil/acceil.component';
import { AcceuilGuard } from './acceuil.guard';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

import { NavlogComponent } from './navlog/navlog.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent , canActivate:[AuthGuard]},
  {path:'acceuil',component:AcceilComponent ,canActivate:[AcceuilGuard]},
  {path:'nav',component:NavlogComponent},
  {path:'authentification',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
