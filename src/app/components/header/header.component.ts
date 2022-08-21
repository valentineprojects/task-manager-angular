import { Component, OnInit } from '@angular/core';
import { UiService } from 'app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	title: string = 'Task Manager';
	showAddTask: boolean = false;
	subscription!: Subscription;

	constructor(private uiService: UiService, private router: Router) {
		this.subscription = this.uiService
			.onToggle()
			.subscribe((value) => (this.showAddTask = value));
	}

	ngOnInit(): void {}

	toggleAddTask() {
		this.uiService.toggleAddTask();
	}

	hasRoute(route: String) {
		return this.router.url === route;
	}
}
