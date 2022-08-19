import { Component, OnInit } from '@angular/core';
import { Task } from 'app/Task';
import { TaskService } from 'app/services/task.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
	tasks: Task[] = [];

	constructor(private TaskService: TaskService) {}

	// Use observables
	ngOnInit(): void {
		this.TaskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
	}
}
