import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComponentListComponent } from './modules/component-list/component-list.component';
import { TaskListComponent } from './modules/task-list/task-list.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ThemeService } from './core/services/theme-service/theme.service';

@NgModule({
  declarations: [AppComponent, ComponentListComponent, TaskListComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavbarComponent],
})
export class AppModule {
  constructor(private readonly themeService: ThemeService) {
    const savedThemeOption = this.themeService.getIsDarkThemeFromLocalStorage();
    this.themeService.enableDarkTheme(savedThemeOption);
  }
}
