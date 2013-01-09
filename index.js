
var path = require('path'),
    util = require('util'),
    yeoman = require('../../../');

module.exports = Generator;

function Generator() {
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.fetchGit = function(name) {

    if(!name || !name.length) name = 'basic';

    /*var cb = this.async();
    this.remote('folkloreatelier', 'yeoman-boilerplate-'+name, 'master', function(err, remote) {
        if(err) return cb(err);
        remote.directory('.', '.');
        cb();
    });*/
    this.tarball('https://github.com/folkloreatelier/yeoman-boilerplate-'+name+'/tarball/master', '.', this.async());

}