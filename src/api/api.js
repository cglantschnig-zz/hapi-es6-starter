import Hapi from 'hapi';
import Promise from 'bluebird';
import {union, values} from 'lodash';

var server = new Hapi.Server();
server.connection({
  port: 3000
});

var routes = require('require-dir')('./routes');
var rr = union.apply(null, values(routes));
server.route(rr);

server.register(require('./plugins'), function (err) {
  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});

export default server;

