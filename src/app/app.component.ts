import { Component } from '@angular/core';
import { FormExtension } from './extensions/form.extension';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {
    this.initExtensions();
  }

  initExtensions(): void {
    FormExtension.init();
  }
}
