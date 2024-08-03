import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  isOpen: boolean = false;
  result: string = 'titulo novoo'

  @Input() modalTitle: string = ''
  @Output() closeModal = new EventEmitter<string>()

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.closeModal.emit(this.result);
  }
}
