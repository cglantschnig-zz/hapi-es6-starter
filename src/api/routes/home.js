
var routes = [
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('Welcome to hapi-es6-starter!');
    }
  }
];

export default routes;