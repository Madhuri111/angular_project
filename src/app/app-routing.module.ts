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

export const routes = [
  {path : 'custom', component : CustomComponent,label:'custom'},
  {path : 'pipes', component : PipesComponent,label:'Pipes'},
  {path : 'impure', component : ImpurePipesComponent,label:'Impure Pipes'},
  {path : 'dynamic',component:DynamicComponent,label:'Dynamic'},
  {path: 'change',component:ChangeComponent,label:'change'},
  {path: 'forms',component:ReactiveFormComponent,label:'Forms'},
  {path: 'template',component:TemplateFormComponent,label:'template forms'},
  {
    path: 'dynamicforms',component:TryComponent,label:'dynamic forms'
  },
  {path:'modelform',component:FinalFormComponent,label:'model forms'},
  {path:'modelform/add',component:FinalFormComponent},


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
