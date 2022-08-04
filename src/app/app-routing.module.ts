import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ImpurePipesComponent } from './impure-pipes/impure-pipes.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChangeComponent } from './change/change.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { TryComponent } from './try/try.component';
import { CreateformComponent } from './createform/createform.component';
import { Basictemplate } from './createform/basictemplate.component';
import { FinalFormComponent } from './final-form/final-form.component';

const routes: Routes = [
  {path : 'custom', component : CustomComponent},
  {path : 'pipes', component : PipesComponent},
  {path : 'impure', component : ImpurePipesComponent},
  {path : 'dynamic',component:DynamicComponent},
  {path: 'change',component:ChangeComponent},
  {path: 'forms',component:ReactiveFormComponent},
  {path: 'template',component:TemplateFormComponent},
  {
    path: 'dynamicforms',component:TryComponent
  },
  {path:'modelform',component:FinalFormComponent},
  {path:'modelform/add',component:FinalFormComponent},


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
