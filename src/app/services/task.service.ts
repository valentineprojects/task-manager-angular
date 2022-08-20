import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from 'mocks/mock-tasks';
import { Task } from 'app/interfaces/Task';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	constructor() {}

	getTasks(): Observable<Task[]> {
		const tasks = of(TASKS);
		return tasks;
	}
}
