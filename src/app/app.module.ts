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
// import { ImpPipePipe } from './impure-pipes/imp-pipe.pipe';
@NgModule({
  declarations: [HighlightPipe,AppComponent,CustomComponent,DynamicComponent,ImpurePipesComponent,PipesComponent, ImpPipePipe, ChangeComponent, IfDirective],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])

  ],
  bootstrap: [ AppComponent ]


})
export class AppModule { }
