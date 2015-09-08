/**
 * Define routes the way you are used to. Also use Joi Schemas to validate the
 * input and output
 */
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
