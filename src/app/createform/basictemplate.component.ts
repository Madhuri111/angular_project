import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormValues } from '../models_here/base-formelements';
import { FormfieldcontrolService } from './formfieldcontrols.service';
import { Input,OnInit,Component, ElementRef } from '@angular/core';
// import { FormValues } from '../models_here/base-formelements';
@Component({
  selector: 'app-basictemplate',
  templateUrl: './basictemplate.component.html',
  styleUrls:['./basictemplate.component.css']
})
export class Basictemplate implements OnInit {

  

  @Input() formFields: FormValues<any>[] = [];
  formG: FormGroup;
  payLoad = {};
  // payLoad:any=[];

  constructor(private formfieldService: FormfieldcontrolService,private elementRef: ElementRef
    ) { }

  ngOnInit(): void {

    // this.payLoad={};
    this.formG = this.formfieldService.toFormGroup(this.formFields);

    
    this.payLoad= JSON.stringify(this.formG.getRawValue());
    console.log(typeof(this.formG.getRawValue()));

    // this.form = this.formfieldService.toFormGroup(this.formFields);
  }

  ngAfterViewInit(){
    // this.elementRef.nativeElement.focus();
    this.elementRef.nativeElement.focus();
    }
  onSubmit() {
    // this.payLoad.push(this.formG.value);

    // this.payLoad=this.formG.setValue(formG)
    // this.payLoad = this.payLoad + JSON.stringify(this.formG.getRawValue());
    
    console.log(this.formG.value);
  }

  onAdd()
  {
    this.formG=this.formfieldService.addFormGroup(this.formFields);
    // console.log(this.payLoad);

    // this.formG.setValue({toFormGroup(this.formFields)});
    // this.formfieldService.toFormGroup(this.formFields);
    // this.form.addControl(FormValues.name, new FormControl(''));

    // this.form.addControl(this.formfieldService)
    // this.form.push(toFormGroup(this.formFields));
    // this.form=this.form.push(new this.formfieldService.toFormGroup(this.formFields) )
  }


}