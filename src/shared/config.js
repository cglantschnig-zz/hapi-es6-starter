/**
 * Config file, which is interpreting all the environment variables
 */

 var allowedEnvironments = [
   'development'
 ];

// test if the given environment is a valid one
if ( allowedEnvironments.indexOf(process.env.NODE_ENV) < 0 ) {
  console.error('Invalid Environment');
  process.exit(1);
}

console.log('Using ' + process.env.NODE_ENV + ' environment');

var config = {
    host: process.env.APP_HOST || '0.0.0.0',
    port: process.env.APP_PORT || 3000
};

export default config;
