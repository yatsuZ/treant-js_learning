import { FastifyRequest, FastifyReply } from 'fastify';
import '@fastify/view';

export const routes = [
	{
		method: 'GET',
		url: '/',
		handler: async (_: FastifyRequest, reply: FastifyReply) => {
			return reply.view('default.ejs');
		},
	},
	// 404 fallback route (should be last)
	// {
	// 	method: 'GET',
	// 	url: '/*',
	// 	handler: async (_: FastifyRequest, reply: FastifyReply) => {
	// 		reply.code(404);
	// 		return reply.view('layouts/index.ejs', { notFound: true });
	// 	},
	// },
];
