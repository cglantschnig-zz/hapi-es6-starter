/**
 * hapi-es6-starter
 *
 * This is a little starter kit to create an api with hapi and the newest es6 features compiled with babel.
 * As soon the node run time you just need to remove require('babel/register') and the app will run like expected.
 *
 * Author: Christopher Glantschnig
 *
 */

require('babel/register');

/**
 * Your Application Entry Code - modify it to your need
 * Keep in mind to use only ES5 Code at the moment.
 * exports return an object with the given name. Your default export goes to obj.default
 * in this case the Api is calling itself
 */
require('./Api');
