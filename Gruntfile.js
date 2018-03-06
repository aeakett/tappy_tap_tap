/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: { version: '0.1.0' },
    banner: '/*! Tappy-Tap-Tap - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://eakett.ca/ttt/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'Andrew Eakett */\n',
    // Task configuration.
    uglify: {
      my_target: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/sourcemap.map'
        },
        files: {
          'js/main.min.js': ['js/src/plugin.js','js/src/bolt.js','js/src/main.js',]
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.min.css': 'css/src/main.scss'
        }
      }
    },
    watch: {
      gruntfile: {
        files: ['css/src/main.scss', 'js/src/*.js'],
        tasks: ['uglify', 'sass']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['sass', 'uglify']);

};
