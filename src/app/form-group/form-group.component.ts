import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  submitForm: FormGroup;

  constructor(private formalin: FormBuilder) { }


  ngOnInit(): void {
    this.submitForm = this.formalin.group({
      name: ['Philip'],
      surname: ['Bandurko'],
      age: [24],
      profession: ['Future front end dev'],
      hobby: ['football']
    })
   this.submitForm.patchValue(['profession'], {})
  };

  get one(): FormControl {
    return this.submitForm.get('name') as FormControl
  };
  get two(): FormControl {
    return this.submitForm.get('surname') as FormControl
  };
  get three(): FormControl {
    return this.submitForm.get('age') as FormControl
  };
  get four(): FormControl {
    return this.submitForm.get('profession') as FormControl
  };
  get five(): FormControl {
    return this.submitForm.get('hobby') as FormControl
  };


  showInputValue() {
    alert(this.submitForm.value);
    console.log(this.submitForm.value)
  };

}
