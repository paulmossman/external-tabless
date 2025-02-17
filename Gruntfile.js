/* eslint-env node */

// Generated on 2015-05-08 using generator-chrome-extension 0.3.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

function icon(args) {
  return {
    args: [
      '-density',
      '2000',
      '-background',
      'none',
      '-resize',
      args.size,
      '-verbose',
      args.input,
      args.output,
    ],
    fatals: true
  };
}

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist',
    test: 'test',
  };

  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: [
          '<%= config.app %>/scripts/{,*/}*.js',
          '<%= config.test %>/{,*/}*.js'
        ],
        tasks: ['lint'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.css'],
        tasks: [],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/*.html',
          '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= config.app %>/manifest.json',
          '<%= config.app %>/_locales/{,*/}*.json'
        ]
      }
    },

    // Grunt server and debug server setting
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      chrome: {
        options: {
          open: false,
          base: [
            '<%= config.app %>'
          ]
        }
      },
    },

    // Empties folders to start fresh
    clean: {
      chrome: {
      },
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    eslint: {
      options: {
        ignorePattern: [
          '<%= config.app %>/scripts/chromereload.js'
        ]
      },
      target: [
        'Gruntfile.js',
        '<%= config.app %>/scripts',
        '<%= config.test %>/{,*/}*.js'
      ]
    },

    mochaTest: {
      test: {
        src: ['<%= config.test %>/**/*.js']
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: [
        '<%= config.app %>/popup.html',
        '<%= config.app %>/options.html'
      ]
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      //  css: ['<%= config.dist %>/styles/{,*/}*.css']
    },

    // The following *-min tasks produce minifies files in the dist folder
    imagemin: {
      dist: {
        optimizationLevel: 7,
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    mkdir: {
      images: {
        options: {
          create: ['<%= config.dist %>/images']
        }
      }
    },

    'imagemagick-convert': {
      tabless16: icon({
        input: '<%= config.app %>/images/tabless.svg',
        output: '<%= config.dist %>/images/tabless-16.png',
        size: '16x16',
      }),
      tabless19: icon({
        input: '<%= config.app %>/images/tabless.svg',
        output: '<%= config.dist %>/images/tabless-19.png',
        size: '19x19',
      }),
      tabless32: icon({
        input: '<%= config.app %>/images/tabless.svg',
        output: '<%= config.dist %>/images/tabless-32.png',
        size: '32x32',
      }),
      tabless38: icon({
        input: '<%= config.app %>/images/tabless.svg',
        output: '<%= config.dist %>/images/tabless-38.png',
        size: '38x38',
      }),
      tabless48: icon({
        input: '<%= config.app %>/images/tabless.svg',
        output: '<%= config.dist %>/images/tabless-48.png',
        size: '48x48',
      }),
      tabless64: icon({
        input: '<%= config.app %>/images/tabless.svg',
        output: '<%= config.dist %>/images/tabless-64.png',
        size: '64x64',
      }),
      tabless128: icon({
        input: '<%= config.app %>/images/tabless.svg',
        output: '<%= config.dist %>/images/tabless-128.png',
        size: '128x128',
      }),
      tabbed16: icon({
        input: '<%= config.app %>/images/tabbed.svg',
        output: '<%= config.dist %>/images/tabbed-16.png',
        size: '16x16',
      }),
      tabbed19: icon({
        input: '<%= config.app %>/images/tabbed.svg',
        output: '<%= config.dist %>/images/tabbed-19.png',
        size: '19x19',
      }),
      tabbed32: icon({
        input: '<%= config.app %>/images/tabbed.svg',
        output: '<%= config.dist %>/images/tabbed-32.png',
        size: '32x32',
      }),
      tabbed38: icon({
        input: '<%= config.app %>/images/tabbed.svg',
        output: '<%= config.dist %>/images/tabbed-38.png',
        size: '38x38',
      }),
      tabbed48: icon({
        input: '<%= config.app %>/images/tabbed.svg',
        output: '<%= config.dist %>/images/tabbed-48.png',
        size: '48x48',
      }),
      tabbed64: icon({
        input: '<%= config.app %>/images/tabbed.svg',
        output: '<%= config.dist %>/images/tabbed-64.png',
        size: '64x64',
      }),
      tabbed128: icon({
        input: '<%= config.app %>/images/tabbed.svg',
        output: '<%= config.dist %>/images/tabbed-128.png',
        size: '128x128',
      })
    },

    htmlmin: {
      dist: {
        options: {
          // removeCommentsFromCDATA: true,
          // collapseWhitespace: true,
          // collapseBooleanAttributes: true,
          // removeAttributeQuotes: true,
          // removeRedundantAttributes: true,
          // useShortDoctype: true,
          // removeEmptyAttributes: true,
          // removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          src: '*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/styles/main.css': [
    //         '<%= config.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },

    uglify: {
      options: {
        beautify: true,
        compress: false,
        enclose: {},
        mangle: false
      },
    },

    // concat: {
    //   dist: {}
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.{webp,gif}',
            '{,*/}*.html',
            'styles/{,*/}*.css',
            'styles/fonts/{,*/}*.*',
            '_locales/{,*/}*.json',
            'scripts/background.js',
          ]
        }]
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      chrome: [
      ],
      dist: [
        'imagemin'
      ],
      test: [
      ],
      icons: [
        'imagemagick-convert:tabless16',
        'imagemagick-convert:tabless19',
        'imagemagick-convert:tabless32',
        'imagemagick-convert:tabless38',
        'imagemagick-convert:tabless48',
        'imagemagick-convert:tabless64',
        'imagemagick-convert:tabless128',
        'imagemagick-convert:tabbed16',
        'imagemagick-convert:tabbed19',
        'imagemagick-convert:tabbed32',
        'imagemagick-convert:tabbed38',
        'imagemagick-convert:tabbed48',
        'imagemagick-convert:tabbed64',
        'imagemagick-convert:tabbed128'
      ]
    },

    // Don't auto buildnumber, exclude debug files. smart builds that event pages
    chromeManifest: {
      dist: {
        options: {
          buildnumber: false,
          indentSize: 2,
          background: {
            target: 'scripts/background.js',
          }
        },
        src: '<%= config.app %>',
        dest: '<%= config.dist %>'
      }
    },

    // Compres dist files to package
    compress: {
      dist: {
        options: {
          archive: function() {
            var manifest = grunt.file.readJSON('app/manifest.json');
            return 'package/Tab-less-' + manifest.version + '.zip';
          }
        },
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: ''
        }]
      }
    }
  });

  grunt.registerTask('debug', function () {
    grunt.task.run([
      'lint',
      'mkdir:images',
      'concurrent:icons',
      //  'concurrent:chrome',
      'connect:chrome',
      'watch'
    ]);
  });

  grunt.registerTask('lint', [
    'eslint'
  ]);

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'chromeManifest:dist',
    'useminPrepare',
    'mkdir:images',
    'concurrent:icons',
    'imagemin',
    //  'concurrent:dist',
    //  'cssmin',
    //  'concat',
    'uglify',
    'copy',
    'usemin',
    'compress'
  ]);

  grunt.registerTask('default', [
    'lint',
    'test',
    'build'
  ]);
};
