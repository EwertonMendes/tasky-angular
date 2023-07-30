import { Component } from '@angular/core';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent {
  title = 'tasky-angular';

  textInputValue: string = '';

  isModalOpen = false;

  onTextInputValueChange(newValue: string) {
    this.textInputValue = newValue;
  }

  onButtonClick() {
    console.log('Button Clicked');
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  performAction() {
    alert('Action Performed');
    this.isModalOpen = false;
  }
}
