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
    realFavicon: {
      favicons: {
        src: 'img/src/favicon.png',
        dest: './',
        options: {
          iconsPath: '/ttt/',
          html: [ 'index.htm' ],
          design: {
            ios: {
              pictureAspect: 'noChange',
              assets: {
                ios6AndPriorIcons: true,
                ios7AndLaterIcons: true,
                precomposedIcons: true,
                declareOnlyDefaultIcon: false
              },
              appName: 'Tappy-Tap-Tap'
            },
            desktopBrowser: {},
            windows: {
              masterPicture: {
                content: 'img/src/favicon-outline.png'
              },
              pictureAspect: 'whiteSilhouette',
              backgroundColor: '#073642',
              onConflict: 'override',
              assets: {
                windows80Ie10Tile: true,
                windows10Ie11EdgeTiles: {
                  small: true,
                  medium: true,
                  big: true,
                  rectangle: true
                }
              },
              appName: 'Tappy-Tap-Tap'
            },
            androidChrome: {
              pictureAspect: 'noChange',
              themeColor: '#073642',
              manifest: {
                name: 'Tappy-Tap-Tap',
                startUrl: 'http://eakett.ca/ttt/',
                display: 'standalone',
                orientation: 'notSet',
                onConflict: 'override',
                declared: true
              },
              assets: {
                legacyIcon: true,
                lowResolutionIcons: true
              }
            },
            safariPinnedTab: {
              masterPicture: {
                content: 'img/src/favicon-outline.png'
              },
              pictureAspect: 'silhouette',
              themeColor: '#073642'
            }
          },
          settings: {
            compression: 5,
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
            readmeFile: false,
            htmlCodeFile: false,
            usePathAsIs: false
          },
          versioning: {
            paramName: 'v',
            paramValue: '<%= grunt.template.today("yyyymmddhhMMssl") %>'
          }
        }
      }
    },
    uglify: {
      my_target: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/sourcemap.map'
        },
        files: {
          'js/main.min.js': ['js/src/plugins.js','js/src/bolt.js','js/src/main.js']
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
        files: ['css/src/*', 'js/src/*.js'],
        tasks: ['uglify', 'sass']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-real-favicon');

  // Default task.
  grunt.registerTask('default', ['sass', 'uglify', 'realFavicon']);

};
