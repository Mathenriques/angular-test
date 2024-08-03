import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularlib-test';

  @ViewChild('modal') modal!: ModalComponent;

  openModal() {
    this.modal.open();
  }
}
