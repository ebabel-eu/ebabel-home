// Build the front-end source to run locally.
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // Concatenate the javascript files.
        concat: {
            options: {
                separator: ';',
                banner: '/* This file is generated with Grunt and should not be edited directly. */\n'
            },
            js: {
                files: {
                    // Third party javascript dependencies used in this website.
                    './js/dependencies.js' : [
                        // Libraries managed with Bower.
                        
                        // Note: update ./unit-tests/karma.conf.js when adding new non-ui dependencies.
                    ],
                    
                    // All custom scripts written for this website.
                    './js/scripts.js': [
                        './js/scripts/*.js'
                    ]
                }
            }
        },

        eslint: {
            options: {
                configFile: "./lint/es-lint.json"    // Default rules: http://eslint.org/docs/rules/
            },
            target: [
                "./js/scripts/*.js",
                "./js/scripts/**/*.js"
            ]
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    lineNumbers: true,
                    'sourcemap=none': ''
                },
                files: {
                    './css/default.css': './css/sass/default.scss'
                }
            }
        },

        pleeease: {
            custom: {
                options: {
                    autoprefixer: {
                        'browsers': ['last 4 versions']
                    },
                    minifier: false
                },
                files: {
                    './css/default.css': './css/default.css'
                }
            }
        },

        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: [{
                    expand: true,
                    cwd: './css',
                    src: ['*.css', '!*.min.css'],
                    dest: './css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                compress: {
                    drop_console: true
                }
            },
            scripts: {
                files: {
                    './js/scripts.min.js': ['./js/scripts.js']
                }
            },
            dependencies: {
                files: {
                    './js/dependencies.min.js': ['./js/dependencies.js']
                }
            }
        },

        // Re-run these automated tasks each time certain files are modified.
        watch: {
            sass: {
                files: [
                    './css/**/*.scss'
                ],
                tasks: [
                    'sass',
                    'pleeease'
                ]
            },
            scripts: {
                files: [
                    './js/scripts/*.js',
                    './js/scripts/**/*.js'
                ],
                tasks: [
                    'concat',
                    'eslint'
                ]
            },
            grunt: {
                files: [
                    './Gruntfile.js'
                ],
                tasks: [
                    'concat',
                    'sass',
                    'pleeease'
                ]
            }
        }
        
    });

    // During development, continuous building for both css and javascript: run 'grunt watch' command (see watch above).
    // Warning: this watch does not include minification.
    
    // Prior to release. One-off build for both css and javascript, including minification: run 'grunt' command.
    grunt.registerTask('default', [
        'concat',
        'eslint',
        'sass',
        'pleeease',
        'cssmin',
        'uglify'
    ]);
};