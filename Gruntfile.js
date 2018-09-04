/*global module:true*/
'use strict';

module.exports = function (grunt) {

  var uglify = require('./grunt/uglify')(),
    // less = require('./grunt/less')(),
    sass = require('./grunt/sass')(),
    watch = require('./grunt/watch')(),
    image = require('./grunt/image')();

  grunt.initConfig({
    banner: '/* Perldoc - http://perdoc.perl.org */\n',
    uglify: uglify,
    // less: less,
    sass: sass,
    image: image,
    watch: watch,

  });

  [
    'grunt-contrib-uglify',
    // 'grunt-contrib-less',
    'grunt-contrib-sass',
    'grunt-contrib-sass',
    'grunt-image',
    'grunt-contrib-watch',
  ].forEach(grunt.loadNpmTasks);

  // Tasks
  grunt.registerTask('default', ['image', 'uglify', 'sass']);

};