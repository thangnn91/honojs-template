import { Hono } from 'hono';
import { cors } from 'hono/cors';
import courses  from './app/courses/routes'
import careers from './app/careers/routes'


export interface Env {
	FILES: KVNamespace;
}

const app = new Hono<{Bindings: Env}>()

app.route('/courses', courses)
app.route('/careers', careers)
export default app