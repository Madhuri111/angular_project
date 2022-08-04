import { Component,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormValues } from '../models_here/base-formelements';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent  {

  @Input() input: FormValues<string>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.input.key].valid; }


}
