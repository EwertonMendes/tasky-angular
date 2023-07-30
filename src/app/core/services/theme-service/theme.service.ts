import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = false;

  enableDarkTheme(isDarkTheme: boolean): void {
    this.isDarkTheme = isDarkTheme;

    this.saveOptionOnLocalStorage();

    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      return;
    }
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }

  get isDarkThemeEnabled(): boolean {
    return this.isDarkTheme;
  }

  getIsDarkThemeFromLocalStorage() {
    const localStorageOption = localStorage.getItem('isDarkTheme');

    if (!localStorageOption) {
      return false;
    }

    return Boolean(JSON.parse(localStorageOption));
  }

  private saveOptionOnLocalStorage() {
    localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
  }
}
