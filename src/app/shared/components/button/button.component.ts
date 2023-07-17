import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalEventEmitterService } from '@app/core/services/global-event-emmiter/global-event-emitter.service';

export enum ButtonColors {
  PRIMARY = 'primary',
  PRIMARY_OUTLINE = 'primary-outline',
  DARK = 'dark',
  BORDERLESS = 'borderless',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() id!: string;
  @Input() type!: string;
  @Input() disabled!: boolean;
  @Input() text!: string;
  @Input() icon!: string;
  @Input() color: keyof typeof ButtonColors = 'PRIMARY';
  @Input() action?: { name: string; args: unknown };
  @Input() loading?: boolean;
  ButtonColors = ButtonColors;

  @Output() buttonClick: EventEmitter<never> = new EventEmitter<never>();

  onClick() {
    this.buttonClick.emit();

    if (this.action) {
      GlobalEventEmitterService.emit(this.action.name, this.action.args);
    }
  }
}
