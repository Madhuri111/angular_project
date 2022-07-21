import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ImpurePipesComponent } from './impure-pipes/impure-pipes.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChangeComponent } from './change/change.component';

const routes: Routes = [
  {path : 'custom', component : CustomComponent},
  {path : 'pipes', component : PipesComponent},
  {path : 'impure', component : ImpurePipesComponent},
  {path : 'dynamic',component:DynamicComponent},
  {path: 'change',component:ChangeComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
