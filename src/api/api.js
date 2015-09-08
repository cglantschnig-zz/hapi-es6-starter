import Hapi from 'hapi';
import { union, values } from 'lodash';
import config from '../shared/config';

var server = new Hapi.Server();
server.connection({
  host: config.host,
  port: config.port
});

// set all routes which are located in the routes directory
var unformatedRoutes = require('require-dir')('./routes');
var routes = union(...values(unformatedRoutes));

server.route(routes);

server.register(require('./plugins'), function (err) {
  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});

export default server;
