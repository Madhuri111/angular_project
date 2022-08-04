import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ImpurePipesComponent } from './impure-pipes/impure-pipes.component';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule } from '@angular/router';
import { HighlightPipe } from './pipes/highlight.pipe';
import { ImpPipePipe } from './impure-pipes/imp-pipe.pipe';
import { ChangeComponent } from './change/change.component';
import { FormsModule } from '@angular/forms';
import { IfDirective } from './custom/if.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { ImpPipePipe } from './impure-pipes/imp-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
// import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { TryComponent } from './try/try.component';
import { CreateformComponent } from './createform/createform.component';
// import { CreateformComponent } from './createform/createform.component';

import { Basictemplate } from './createform/basictemplate.component';
import { FinalFormComponent } from './final-form/final-form.component';
import { MatSelectionList } from '@angular/material/list';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [Basictemplate, HighlightPipe,TryComponent,AppComponent,CustomComponent,DynamicComponent,ImpurePipesComponent,PipesComponent, ImpPipePipe, ChangeComponent, IfDirective, TemplateFormComponent, ReactiveFormComponent,  TryComponent, CreateformComponent, FinalFormComponent],
  imports: [
    PickerModule, 
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule, 
    MatSelectModule,
    MatNativeDateModule,
    MatListModule,
    MatOptionModule,
    MatSidenavModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule

  ],
  bootstrap: [ AppComponent ]


})
export class AppModule { }
