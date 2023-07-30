import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class ButtonComponent implements OnInit {
  @Input() id!: string;
  @Input() type!: string;
  @Input() disabled!: boolean;
  @Input() text!: string;
  @Input() leftIcon!: string;
  @Input() rightIcon?: string;
  @Input() color: keyof typeof ButtonColors = 'PRIMARY';
  @Input() action?: { name: string; args: unknown };
  @Input() loading?: boolean;
  ButtonColors = ButtonColors;

  @Output() buttonClick: EventEmitter<never> = new EventEmitter<never>();

  isLeftIconImg!: boolean;

  private readonly checkPathRegex = /^[./]+([\w/.]+)$/;

  ngOnInit(): void {
    if (this.leftIcon) {
      this.isLeftIconImg = this.isIconImage(this.leftIcon);
    }
  }

  onClick() {
    this.buttonClick.emit();

    if (this.action) {
      GlobalEventEmitterService.emit(this.action.name, this.action.args);
    }
  }

  private isIconImage(icon: string): boolean {
    return this.checkPathRegex.test(icon);
  }
}
