
var path = require('path'),
    util = require('util'),
    yeoman = require('../../../');

module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.fetchGit = function() {

  console.log(arguments);

}