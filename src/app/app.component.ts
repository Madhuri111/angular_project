import { Component } from '@angular/core';
import { FormValues } from './models_here/base-formelements';
import { FormfieldcontrolService } from './createform/formfieldcontrols.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [FormfieldcontrolService]
})
export class AppComponent {
  title = 'custom_structural';
  open = false;
  public sidebarShow: boolean = false;

  // formFields: Observable<FormValues<any>[]>;
  // constructor(service: FormfieldcontrolService) {
  //   console.log(this.formFields);

  //   this.formFields = service.getFormFields();
  //   console.log(this.formFields);
  // }
  close() {
    this.open = false;
  }
}
