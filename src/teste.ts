import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    // outros imports
  ],
})
export class AppModule { }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.css']
})
export class CheckboxExampleComponent implements OnInit {
  form: FormGroup;
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      checkboxes: this.fb.array(this.options.map(() => false))
    });
  }

  get checkboxes() {
    return this.form.get('checkboxes') as FormArray;
  }

  onSubmit() {
    const selectedOptions = this.form.value.checkboxes
      .map((checked, index) => checked ? this.options[index] : null)
      .filter(value => value !== null);

    console.log(selectedOptions);
  }
}


<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div formArrayName="checkboxes">
    <div *ngFor="let option of options; let i = index">
      <label>
        <input type="checkbox" [formControlName]="i">
        {{ option }}
      </label>
    </div>
  </div>
  <button type="submit">Submit</button>
</form>
