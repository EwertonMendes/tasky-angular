import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tasky-angular';

  textInputValue: string = '';

  onTextInputValueChange(newValue: string) {
    this.textInputValue = newValue;
  }

  onButtonClick() {
    console.log('Button Clicked');
  }

}
