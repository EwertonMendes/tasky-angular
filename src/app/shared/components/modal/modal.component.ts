import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() confirmText: string = '';
  @Input() cancelText: string = '';

  @Output() onCancel = new EventEmitter();
  @Output() onPerformAction = new EventEmitter();

  private bodyTag = document.getElementsByTagName('body')[0];

  ngOnChanges(): void {
    if(this.isOpen) this.bodyTag.style.overflow = 'hidden';
  }

  closeModal() {
    this.isOpen = false;
    this.bodyTag.style.overflow = 'auto';

  }

  performAction() {
    this.closeModal();
    this.onPerformAction.emit();
  }

  cancel() {
    this.closeModal();
    this.onCancel.emit();
  }
}
