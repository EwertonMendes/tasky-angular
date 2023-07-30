import { Component } from '@angular/core';
import { TaskList } from '@app/core/interfaces/tasklist.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasklists: TaskList[] = [
    {
      id: 1,
      name: 'Task List 1',
      description: 'This is a description of Task List 1',
      isExpanded: false,
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          description: 'This is a description of Task 1',
          isComplete: true,
        },
        {
          id: 2,
          name: 'Task 2',
          description: 'This is a description of Task 2',
          isComplete: true,
        },
        {
          id: 3,
          name: 'Task 3',
          description: 'This is a description of Task 3',
          isComplete: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Task List 2',
      description: 'This is a description of Task List 2',
      isExpanded: false,
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          description: 'This is a description of Task 1',
          isComplete: false,
        },
        {
          id: 2,
          name: 'Task 2',
          description: 'This is a description of Task 2',
          isComplete: false,
        },
        {
          id: 3,
          name: 'Task 3',
          description: 'This is a description of Task 3',
          isComplete: false,
        },
      ],
    },
  ];

  isExpanded: boolean = false;

  toggleExpanded(tasklistId: number) {
    const tasklist = this.getTaskList(tasklistId);

    if (!tasklist) return;

    tasklist.isExpanded = !tasklist.isExpanded;
  }

  toggleComplete(tasklistId: number, taskId: number) {
    const task = this.getTask(tasklistId, taskId);
    if (!task) return;
    task.isComplete = !task.isComplete;
  }

  getTaskList(tasklistId: number) {
    return this.tasklists.find((tasklist) => tasklist.id === tasklistId);
  }

  getTask(tasklistId: number, taskId: number) {
    const tasklist = this.getTaskList(tasklistId);

    if (!tasklist) return;

    return tasklist.tasks.find((task) => task.id === taskId);
  }
}
