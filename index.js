
var path = require('path'),
    util = require('util'),
    yeoman = require('../../../');

module.exports = Generator;

function Generator() {
    yeoman.generators.NamedBase.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.fetchGit = function(name) {

    var cb = this.async();
    this.remote('folkloreatelier', 'yeoman-boilerplate-'+name, 'master', function(err, remote) {
        if(err) return cb(err);
        remote.directory('.', '.');
        cb();
    });

}