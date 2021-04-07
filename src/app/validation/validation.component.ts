import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidator} from "../my-validator";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  validation: FormGroup = new FormGroup({});

  ngOnInit() {
    this.validation = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidator.restrictedEmails
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup( {
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  };
  submit() {
    console.log('Form submitted', this.validation)
    const formData = {...this.validation.value}
    console.log('Form Data:', formData)
  };

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.validation.get('skills') as FormArray).push(control)
  }
}
