import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { TaskListComponent } from './task-list.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { routes } from './task-list.routing';

@NgModule({
  declarations: [TaskListComponent, CardComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class TaskListModule {}
