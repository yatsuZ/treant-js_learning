import chalk from 'chalk';
import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fastifyFormbody from '@fastify/formbody';
import fastifyCookie from '@fastify/cookie';
import fastifyView from '@fastify/view';
import ejs from 'ejs';
import { routes } from './routes/route.js';

console.log(chalk.green.bold('HELLO WORLD!!\n\n'));
console.log(chalk.yellow('1. cree une permier page daccueil avec ejs'));
console.log(chalk.yellow('2. Faire les redirection vers les autres pages test'));
console.log(chalk.yellow('3. Utilise la techno'));

/**
 *
 */
// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 *
 */
const app = Fastify({
	logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      }
    }
},
	caseSensitive: false,
	ignoreTrailingSlash: true,
});

app.register(fastifyView, {
	engine: {
		ejs: ejs,
	},
	root: join(__dirname, '..', '/views'),
	includeViewExtension: true,
});

// ✅ Sert les fichiers statiques (JS, CSS)
app.register(fastifyStatic, {
  root: join(__dirname, '..', 'public'),
  prefix: '/', // /util/Treant.js, /ExempleSimple/script.js
});

/**
 *
 */
routes.forEach((route) => {
	app.route(route);
});

app.setNotFoundHandler((request, reply) => {
  reply.code(404);
  return reply.view('404.ejs');
});




/**
 *
 */
const PORT = process.env.PORT || 3000;

app.listen(
	{
		port: Number(PORT),
	},
	(err, address) => {
		if (err) {
			app.log.error(err);
			process.exit(1);
		}
		app.log.info(`Server listening at ${address}`);
	}
);

process.on('SIGINT', async () => {
	process.exit(0);
});