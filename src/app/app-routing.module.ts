import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentListComponent } from './modules/component-list/component-list.component';
import { TaskListComponent } from './modules/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentListComponent
  },
  {
    path: 'tasks',
    component: TaskListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
