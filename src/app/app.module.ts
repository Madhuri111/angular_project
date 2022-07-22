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

@NgModule({
  declarations: [HighlightPipe,AppComponent,CustomComponent,DynamicComponent,ImpurePipesComponent,PipesComponent, ImpPipePipe, ChangeComponent, IfDirective, TemplateFormComponent, ReactiveFormComponent],
  imports: [ 
    MatButtonModule,
    MatInputModule, 
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
