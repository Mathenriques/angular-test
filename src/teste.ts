<div *ngFor="let option of options; let i = index">
  <label>
    <input type="checkbox" [name]="option" (change)="onCheckboxChange($event)">
    {{ option }}
  </label>
</div>
<button (click)="onSubmit()">Submit</button>


import { Component, OnInit } from '@angular/core';
import { YourService } from './your-service.service'; // substitua pelo seu serviço

@Component({
  selector: 'app-checkbox-example',
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.css']
})
export class CheckboxExampleComponent implements OnInit {
  options: string[] = [];
  selectedOptions: Set<string> = new Set<string>();

  constructor(private yourService: YourService) {}

  ngOnInit() {
    this.yourService.getOptions().subscribe(response => {
      this.options = response; // supondo que a resposta seja um array de strings
    });
  }

  onCheckboxChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const optionName = inputElement.name;

    if (inputElement.checked) {
      this.selectedOptions.add(optionName);
    } else {
      this.selectedOptions.delete(optionName);
    }
  }

  onSubmit() {
    const selectedArray = Array.from(this.selectedOptions);
    console.log(selectedArray);
  }
}


