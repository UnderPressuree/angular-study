import {FormControl} from "@angular/forms";

export class MyValidator {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['test@gmail.com', 'admin@gmail.com'].includes(control.value)) {
      return {restrictedEmail: true}
    }
    // @ts-ignore
    return null
  }
}
