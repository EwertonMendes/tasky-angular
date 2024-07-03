import { AbstractControl, FormGroup } from '@angular/forms';
import { Extension } from '@app/core/interfaces/extension.interface';

let INITIAL_ERROR_MESSAGES: Record<string, string> = {};

declare module '@angular/forms' {
  interface FormGroup {
    configErrorMessages(errorMessages: Record<string, string>): void;
    validate(): boolean;
    clearErrors(): void;
    errorMessages: { [key: string]: Record<string, string> };
    formErrors: Record<string, string | null>;
  }

  interface AbstractControl {
    validate(errorMessages?: Record<string, string>): boolean;
    clearError(): void;
  }
}

function init() {
  FormGroup.prototype.configErrorMessages = function (errorMessages: Record<string, string>) {
    this.formErrors = this.formErrors || {};
    this.errorMessages = this.errorMessages || {};

    INITIAL_ERROR_MESSAGES = errorMessages;

    for (const key in this.controls) {
      if (!this.controls || !this.controls[key] || !this.controls[key].errors) continue;

      const control = this.controls[key];
      const errors = control.validator ? control.validator(control) : null;
      if (!errors) continue;

      this.formErrors[key] = null;
      this.errorMessages[key] = this.errorMessages[key] || {};

      for (const errorKey in errors) {
        if (!errorKey) continue;
        this.errorMessages[key][errorKey] = errorMessages[errorKey] || `Invalid ${key}`;
      }
    }
  };

  FormGroup.prototype.validate = function (): boolean {
    let isValid = true;

    for (const key in this.controls) {
      const control = this.controls[key];

      if (!this.errorMessages) {
        this.errorMessages = {};
      }

      if (!this.errorMessages[key]) {
        this.errorMessages[key] = {};
      }

      if (!this.formErrors) {
        this.formErrors = {};
      }

      if (!this.formErrors[key]) {
        this.formErrors[key] = '';
      }

      if (!control.invalid) {
        this.formErrors[key] = null;
        continue;
      }

      const errors = control.errors;
      if (!errors) continue;

      const errorKey = Object.keys(errors)[0];

      if (errorKey) {
        this.errorMessages[key][errorKey] = INITIAL_ERROR_MESSAGES[errorKey] || `Invalid ${key}`;
        this.formErrors[key] = this.errorMessages[key][errorKey] || `Invalid ${key}`;
      }

      isValid = false;
    }
    return isValid;
  };

  FormGroup.prototype.clearErrors = function () {
    for (const key in this.formErrors) {
      this.formErrors[key] = null;
    }
  };

  AbstractControl.prototype.clearError = function () {
    const parent = this.parent as FormGroup;
    if (!parent.formErrors) {
      parent.formErrors = {};
    }
    const key = Object.keys(parent.controls).find((name) => this === parent.controls[name]) || '';
    parent.formErrors[key] = null;
  };

  AbstractControl.prototype.validate = function (errorMessages?: Record<string, string>): boolean {
    let isValid = true;
    const errors = this.errors;

    if (!errors) {
      this.clearError();
      return isValid;
    }

    const errorKey = Object.keys(errors)[0];

    if (errorKey) {
      const parent = this.parent as FormGroup;
      if (!parent.errorMessages) {
        parent.errorMessages = {};
      }

      const key = Object.keys(parent.controls).find((name) => this === parent.controls[name]) || '';

      if (!parent.errorMessages[key]) {
        parent.errorMessages[key] = {};
      }

      if (!parent.formErrors) {
        parent.formErrors = {};
      }

      if (!parent.formErrors[key]) {
        parent.formErrors[key] = '';
      }

      parent.errorMessages[key][errorKey] = errorMessages?.[errorKey] || INITIAL_ERROR_MESSAGES[errorKey] || `Invalid ${errorKey}`;
      parent.formErrors[key] = parent.errorMessages[key][errorKey] || `Invalid ${key}`;
      isValid = false;
    }

    return isValid;
  };
}

export const FormExtension: Extension = {
  init,
};
