import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class MaterialDirtyStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    if (isSubmitted) {
      return !!(control && control.invalid);
    } else {
      return !!(control && control.dirty && control.invalid);
    }
  }

}
