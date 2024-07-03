import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormExtension } from './form.extension';

describe('Given FormExtension is started', () => {
  let formGroup: FormGroup;
  let formControl: FormControl;

  beforeEach(() => {
    FormExtension.init();
  });

  describe('When error messages are not configured', () => {
    describe('And form control have validators ', () => {
      beforeEach(() => {
        formControl = new FormControl('', Validators.required);
        formGroup = new FormGroup({
          testControl: formControl,
        });
      });
      it('Then configure default error message', () => {
        formGroup.validate();
        expect(formGroup.errorMessages).toEqual({ testControl: { required: 'Invalid testControl' } });
      });

      it('Then return false when form group is invalid', () => {
        expect(formGroup.validate()).toBe(false);
      });

      it('Then return true when form group is valid', () => {
        formControl.setValue('test');
        expect(formGroup.validate()).toBe(true);
      });

      it('Then clear form group errors correctly', () => {
        formGroup.validate();
        formGroup.clearErrors();
        expect(formGroup.formErrors).toEqual({ testControl: null });
      });

      it('Then return false when form control is invalid', () => {
        expect(formControl.validate()).toBe(false);
      });

      it('Then return true when form control is valid', () => {
        formControl.setValue('test');
        expect(formControl.validate()).toBe(true);
      });

      it('Then clear form control error correctly', () => {
        formControl.validate();
        formControl.clearError();
        expect(formGroup.formErrors).toEqual({ testControl: null });
      });
    });
  });

  describe('When error messages are configured', () => {
    describe('And form control does not have validators ', () => {
      beforeEach(() => {
        formControl = new FormControl('');
        formGroup = new FormGroup({
          testControl: formControl,
        });
        formGroup.configErrorMessages({ required: 'This field is required' });
      });

      it('Then form errors should not have property testControl', () => {
        expect(formGroup.formErrors).not.toHaveProperty('testControl');
      });

      it('Then error messages should not have property testControl', () => {
        expect(formGroup.errorMessages).not.toHaveProperty('testControl');
      });
    });

    describe('And form control have validators ', () => {
      beforeEach(() => {
        formControl = new FormControl('', Validators.required);
        formGroup = new FormGroup({
          testControl: formControl,
        });
        formGroup.configErrorMessages({ required: 'This field is required' });
      });

      it('Then configure error messages correctly', () => {
        expect(formGroup.errorMessages).toEqual({ testControl: { required: 'This field is required' } });
      });

      it('Then return false when form group is invalid', () => {
        expect(formGroup.validate()).toBe(false);
      });

      it('Then return true when form group is valid', () => {
        formControl.setValue('test');
        expect(formGroup.validate()).toBe(true);
      });

      it('Then clear form group errors correctly', () => {
        formGroup.validate();
        formGroup.clearErrors();
        expect(formGroup.formErrors).toEqual({ testControl: null });
      });

      it('Then return false when form control is invalid', () => {
        expect(formControl.validate()).toBe(false);
      });

      it('Then return true when form control is valid', () => {
        formControl.setValue('test');
        expect(formControl.validate()).toBe(true);
      });

      it('Then clear form control error correctly', () => {
        formControl.validate();
        formControl.clearError();
        expect(formGroup.formErrors).toEqual({ testControl: null });
      });
    });
  });
});
