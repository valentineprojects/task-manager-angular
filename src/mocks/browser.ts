import { TASKS } from './mock-tasks';
import { rest, setupWorker } from 'msw';

const worker = setupWorker(
	rest.get('/api/tasks', (req, res, ctx) => {
		return res(
			ctx.json({
				TASKS,
			})
		);
	})
);

worker.start();
