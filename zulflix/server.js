const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.port || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON SERVERis running in ${port}`);
});
