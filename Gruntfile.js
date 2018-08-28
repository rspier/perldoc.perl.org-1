/*global module:true*/
'use strict';

module.exports = function(grunt) {

  var uglify = require('./grunt/uglify')(),
      less   = require('./grunt/less')(),
      sass   = require('./grunt/sass')(),
      watch  = require('./grunt/watch')();

  grunt.initConfig({
      banner: '/* Perldoc - http://perdoc.perl.org */\n',
      uglify: uglify,
      less: less,
      sass: sass,
      watch: watch
  });

  [
    'grunt-contrib-uglify',
    // 'grunt-contrib-less',
    'grunt-contrib-sass',
    'grunt-contrib-watch',
  ].forEach( grunt.loadNpmTasks );

  // Tasks
  grunt.registerTask( 'default', ['uglify','sass'] );

};
