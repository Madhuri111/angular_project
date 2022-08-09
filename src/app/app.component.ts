import { Component, EventEmitter, Output } from '@angular/core';
import { FormValues } from './models_here/base-formelements';
import { FormfieldcontrolService } from './createform/formfieldcontrols.service';
import { Observable } from 'rxjs';

import {routes} from './app-routing.module'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [FormfieldcontrolService]
})
export class AppComponent {
  title = 'custom_structural';
  open = false;
  routes=routes;
  isExpanded=false;
  sideBarOpen=true;
  public sidebarShow: boolean = false;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  // formFields: Observable<FormValues<any>[]>;
  // constructor(service: FormfieldcontrolService) {
  //   console.log(this.formFields);

  //   this.formFields = service.getFormFields();
  //   console.log(this.formFields);
  // }
  close() {
    this.open = false;
  }
  sideBarToggler()
  {
    this.sideBarOpen=!this.sideBarOpen;
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
