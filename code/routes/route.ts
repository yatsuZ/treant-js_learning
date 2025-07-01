import { FastifyRequest, FastifyReply } from "fastify";
import "@fastify/view";

interface RouteConfig {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  view: string;
  statusCode?: number;
}

const viewRoutes: RouteConfig[] = [
  { method: "GET", url: "/", view: "default.ejs" },
  {
    method: "GET",
    url: "/ExempleSimple",
    view: "examples/ExempleSimple/main.ejs",
  },
  {
    method: "GET",
    url: "/ArbreFamille",
    view: "examples/arbre-familial/main.ejs",
  },
  {
    method: "GET",
    url: "/ArbreTournoi",
    view: "examples/tournoi-jeux/main.ejs",
  },
];

export const routes = [
  ...viewRoutes.map((route) => ({
    method: route.method,
    url: route.url,
    handler: async (_: FastifyRequest, reply: FastifyReply) => {
      if (route.statusCode) reply.code(route.statusCode);
      return reply.view(route.view);
    },
  })),

  // Fallback 404 route
  {
    method: "GET",
    url: "/*",
    handler: async (_: FastifyRequest, reply: FastifyReply) => {
      reply.code(404);
      return reply.view("404.ejs");
    },
  },
];
