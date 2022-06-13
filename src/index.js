const http = require('http');
const {URL} = require('url');

const routes = require('./routes');

const bodyParser = require("../helpers/bodyParser");

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(`http://localhost:3000${req.url}`);

  const { pathname } = parsedUrl;

  const splitEndpoint = pathname.split('/').filter(Boolean); // remove empty strings
  if (splitEndpoint.length > 1) {
      pahtname = `${splitEndpoint[0]}:id`;
      id = splitEndpoint[1];
  }
  const route = routes.find(routeObject => routeObject.endpoint === pathname);

  if (route) {
    req.query = Object.fromEntries(parsedUrl.searchParams);
    req.params = { id };

    res.send = (statusCode, body) => {
        res.writeHead(statusCode, {'Content-Type': 'json/application'});
        res.end(JSON.stringify(body));
    }

    if (['POST', 'PUT', 'PATCH'].includes(route.method)) {
        bodyParser(req, route.handler(req, res))
    } else {
        route.handler(req, res);
    }
  } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(`Cannot ${req.method} ${pathname}`);
  }
});

server.listen(3000, () => console.log('Server on 3000 port ...'));
