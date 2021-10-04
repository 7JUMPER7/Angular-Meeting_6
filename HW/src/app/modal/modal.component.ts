import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  modalDisplay!: string;
  @Output()
  modalDisplayChanged = new EventEmitter<string>();
  @Input()
  ImagePath!: string;
  constructor() { }

  ngOnInit() {
  }

  closeModal(e: Event) {
    if ((e.target as HTMLElement).tagName != 'IMG') {
      this.modalDisplay = 'none';
      this.modalDisplayChanged.emit(this.modalDisplay);
    }
  }

}
