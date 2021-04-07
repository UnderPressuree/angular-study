import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

// export const namesurname = {
//   name: 'Philip',
//   surname: 'Me'
// }
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {

  nameForm: FormGroup;
  // bananaInTheBox = 100;
  // texterinho: string = 'hello world';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.increase(this.texterinho)
    this.nameForm = this.fb.group({
      name: ['hello'],
      surname: ['world']
    })
    this.nameForm.valueChanges.subscribe(value => console.log(value))   //*обрабаботка затирания
  }
  get name(): FormControl {
    return this.nameForm.get('name') as FormControl
  }
  get surname(): FormControl {
    return this.nameForm.get('surname') as FormControl
  }

  // increase(text: string) {
  //   this.bananaInTheBox += 5
  //   text += 'loh'
  //   console.log(this.texterinho)
  //   console.log(text);
  // }

  // showValue(): void {
  //   alert(this.bananaInTheBox);
  // }

  showFormControlValue() {
    alert(this.nameForm.value);
    console.log(this.nameForm.value);
  }


}
