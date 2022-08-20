import { setupWorker, rest } from 'msw';
import { TASKS } from './mock-tasks';

export const mocks = [
	rest.post('/api/tasks', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				name: `name`,
				bio: 'mocked-bio',
			})
		);
	}),
	rest.get('/api/tasks', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json([...TASKS]));
	}),
	rest.delete('/api/tasks/:id', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json([...TASKS]));
	}),
];

const worker = setupWorker(...mocks);
worker.start();

export { worker, rest };
