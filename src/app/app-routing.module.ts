import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Index1Component } from './pages/index1/index1.component';
import { Index2Component } from './pages/index2/index2.component';

const routes: Routes = [
  {path: '', component: Index1Component},
  {path: 'index2', component: Index2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
