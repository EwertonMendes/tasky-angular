import { Component } from '@angular/core';
import { ThemeService } from '@app/core/services/theme-service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isDarkThemeEnabled: boolean;

  constructor(private readonly themeService: ThemeService) {
    this.isDarkThemeEnabled = this.themeService.isDarkThemeEnabled;
  }

  changeTheme() {
    this.themeService.enableDarkTheme(!this.isDarkThemeEnabled);
    this.isDarkThemeEnabled = this.themeService.isDarkThemeEnabled;
  }
}
