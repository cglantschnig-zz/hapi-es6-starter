/**
 * List of plugins which are about to be installed. Read more at:
 * http://hapijs.com/tutorials/plugins
 */
var pluginList = [
  {
    register: require('good'),
    options: {
      opsInterval: 1000,
      reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*' }
      }]
    }
  }
];


export default pluginList;
