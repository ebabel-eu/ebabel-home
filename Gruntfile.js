// Build the front-end source to run locally.
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        eslint: {
            options: {
                configFile: './lint/es-lint.json'    // Default rules: http://eslint.org/docs/rules/
            },
            target: [
                './js/scripts/*.js',
                './js/scripts/**/*.js'
            ]
        },

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
                        './bower_components/angular/angular.js'

                        // If libraries can't be managed by Bower, add them here.
                    ],
                    
                    // All custom scripts written for this website.
                    './js/scripts.js': [
                        './js/scripts/*.js'
                    ]
                }
            }
        },

        scsslint: {
            allFiles: [
                './css/sass/default.scss',
                './css/sass/**/*.scss'
            ],
            options: {
                config: './lint/scss-lint.yml',
                colorizeOutput: true
            },
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

        htmlangular: {
            options: {
                reportpath: 'lint/html-angular-validate-report.json'
            },
            files: {
                src: [
                    './*.html'
                ]
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
        // These tasks are meant for development and include linting.
        watch: {
            sass: {
                files: [
                    './lint/scss-lint.yml',
                    './css/**/*.scss'
                ],
                tasks: [
                    'scsslint',
                    'sass',
                    'pleeease'
                ]
            },
            scripts: {
                files: [
                    './lint/es-lint.json',
                    './js/scripts/*.js',
                    './js/scripts/**/*.js'
                ],
                tasks: [
                    'eslint',
                    'concat'
                ]
            },
            html: {
                files: [
                    'index.html'
                ],
                tasks: [
                    'htmlangular'
                ]
            },
            grunt: {
                files: [
                    './Gruntfile.js'
                ],
                tasks: [
                    'eslint',
                    'concat',
                    'scsslint',
                    'sass',
                    'pleeease',
                    'htmlangular'
                ]
            }
        }
        
    });

    // During development, continuous building for both css and javascript: run 'grunt watch' command (see watch above).
    // Warning: this watch does not include minification.
    
    // Prior to release. One-off build for both css and javascript, including minification: run 'grunt' command.
    // There is no linting in this version, since linting is meant to happen during development.
    grunt.registerTask('default', [
        'concat',
        'uglify',
        'sass',
        'pleeease',
        'cssmin'
    ]);

    // Tasks dedicated to wercker build and deployment process.
    // todo: replace that one linting task eslint with automated unit tests that can fail.
    grunt.registerTask('wercker', [
        'eslint'
    ]);
};





