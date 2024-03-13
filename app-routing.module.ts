import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  { path: '',   redirectTo: '/form', pathMatch: 'full' },
  { path :'form', component:FormComponent},
  { path :'data', component:DataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
