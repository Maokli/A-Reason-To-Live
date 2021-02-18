import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReasonsComponent } from './reasons/reasons.component';

const routes: Routes = [
  {path:'reasons' , component: ReasonsComponent},
  {path:'' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
