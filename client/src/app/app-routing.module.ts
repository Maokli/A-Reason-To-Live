import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReasonsComponent } from './reasons/reasons.component';

const routes: Routes = [
  {path:'reasons' , component: ReasonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
