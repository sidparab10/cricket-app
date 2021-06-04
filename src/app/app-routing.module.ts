import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateMatchComponent } from './components/sidebar/buttons/create-match/create-match.component';
import { CreateTeamComponent } from './components/sidebar/buttons/create-team/create-team.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'create-team',
        component: CreateTeamComponent
      },
      {
        path: 'create-match',
        component: CreateMatchComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
