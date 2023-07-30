import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComponentListComponent } from './modules/component-list/component-list.component';
import { TaskListComponent } from './modules/task-list/task-list.component';

@NgModule({
  declarations: [AppComponent, ComponentListComponent, TaskListComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
