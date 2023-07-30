import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('Given ThemeService is started', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('Then the component is created', () => {
    expect(service).toBeTruthy();
  });

  it('Then light theme is set by default', () => {
    expect(service.isDarkThemeEnabled).toBe(false);
  });

  describe('When enableDarkTheme method is called', () => {
    describe('And isDarkTheme is true', () => {
      beforeEach(() => {
        service.enableDarkTheme(true);
      });

      afterEach(() => {
        localStorage.removeItem('isDarkTheme');
      });

      it('Then dark theme is enabled', () => {
        expect(service.isDarkThemeEnabled).toBe(true);
      });

      it('Then dark theme class is applied', () => {
        expect(document.body.classList.contains('dark-theme')).toBe(true);
      });

      it('Then light theme is NOT applied', () => {
        expect(document.body.classList.contains('light-theme')).toBe(false);
      });

      it('should save the theme to local storage', () => {
        expect(localStorage.getItem('isDarkTheme')).toBe('true');
      });
    });
  });

  describe('When enableDarkTheme method is called', () => {
    describe('And isDarkTheme is false', () => {
      beforeEach(() => {
        service.enableDarkTheme(false);
      });

      afterEach(() => {
        localStorage.removeItem('isDarkTheme');
      });

      it('Then dark theme is disabled', () => {
        expect(service.isDarkThemeEnabled).toBe(false);
      });

      it('Then dark theme class is NOT applied', () => {
        expect(document.body.classList.contains('dark-theme')).toBe(false);
      });

      it('Then light theme is applied', () => {
        expect(document.body.classList.contains('light-theme')).toBe(true);
      });
      it('should save the theme to local storage', () => {
        expect(localStorage.getItem('isDarkTheme')).toBe('false');
      });
    });
  });

  describe('When getIsDarkThemeFromLocalStorage method is called', () => {
    describe('And isDarkTheme is true', () => {
      beforeEach(() => {
        localStorage.setItem('isDarkTheme', 'true');
      });

      afterEach(() => {
        localStorage.removeItem('isDarkTheme');
      });

      it('Then dark theme is enabled', () => {
        expect(service.getIsDarkThemeFromLocalStorage()).toBe(true);
      });
    });

    describe('And isDarkTheme is false', () => {
      beforeEach(() => {
        localStorage.setItem('isDarkTheme', 'false');
      });

      afterEach(() => {
        localStorage.removeItem('isDarkTheme');
      });

      it('Then dark theme is disabled', () => {
        expect(service.getIsDarkThemeFromLocalStorage()).toBe(false);
      });
    });
  });
});
