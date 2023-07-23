import { Component, EventEmitter, Input, Output } from '@angular/core';

enum InputColors {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  dark = 'dark',
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: string = 'text';
  @Input() maxLength: number = 100;
  @Input() minLength: number = 0;
  @Input() color: keyof typeof InputColors = 'primary';
  colorScheme = InputColors;

  @Output() onValueChange = new EventEmitter<string>();

  innerValue: string = '';

  get value() {
    return this.innerValue;
  }

  set value(value: string) {
    this.innerValue = value;
    this.onValueChange.emit(this.innerValue);
  }

  clearInput() {
    this.value = '';
  }
}
