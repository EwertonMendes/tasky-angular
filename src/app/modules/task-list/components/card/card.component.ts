import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  isEditing: boolean = false;

  editField!: string;

  startEditing() {
    this.isEditing = true;
    this.editField = this.description;
  }

  saveField() {
    this.isEditing = false;
    this.description = this.editField;
  }
}
