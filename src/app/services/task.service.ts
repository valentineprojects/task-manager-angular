import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from 'app/mock';
import { Task } from 'app/Task';

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
