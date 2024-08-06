<div *ngFor="let option of options; let i = index">
  <label>
    <input type="checkbox" [(ngModel)]="selectedOptions[i]">
    {{ option }}
  </label>
</div>
<button (click)="onSubmit()">Submit</button>


import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.css']
})
export class CheckboxExampleComponent {
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOptions = new Array(this.options.length).fill(false);

  onSubmit() {
    const selected = this.selectedOptions
      .map((checked, index) => checked ? this.options[index] : null)
      .filter(value => value !== null);

    console.log(selected);
  }
}
