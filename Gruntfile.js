// Build the front-end source to run locally.
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        eslint: {
            options: {
                configFile: './lint/es-lint.json'    // Default rules: http://eslint.org/docs/rules/
            },
            target: [
                './src/js/scripts/*.js',
                './src/js/scripts/**/*.js'
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
                    './build/js/dependencies.js' : [
                        // Libraries managed with Bower.
                        './bower_components/angular/angular.js'

                        // If libraries can't be managed by Bower, add them here.
                    ],
                    
                    // All custom scripts written for this website.
                    './build/js/scripts.js': [
                        './src/js/scripts/*.js'
                    ]
                }
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
                    './build/js/scripts.min.js': ['./build/js/scripts.js']
                }
            },
            dependencies: {
                files: {
                    './build/js/dependencies.min.js': ['./build/js/dependencies.js']
                }
            }
        },

        scsslint: {
            allFiles: [
                './src/sass/default.scss',
                './src/sass/**/*.scss'
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
                    './build/css/default.css': './src/sass/default.scss'
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
                    './build/css/default.css': './build/css/default.css'
                }
            }
        },

        htmlangular: {
            options: {
                reportpath: 'lint/html-angular-validate-report.json'
            },
            files: {
                src: [
                    './src/*.html'
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
                    cwd: './build/css',
                    src: ['*.css', '!*.min.css'],
                    dest: './build/css',
                    ext: '.min.css'
                }]
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    // {
                    //     expand: true, 
                    //     src: ['src/img/*'], 
                    //     dest: 'build/', 
                    //     filter: 'isFile'
                    // }

                    // // includes files within path and its sub-directories
                    // {expand: true, src: ['path/**'], dest: 'dest/'},

                    // // makes all src relative to cwd
                    // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

                    // flattens results to a single level
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['src/img/**'], 
                        dest: 'build/', 
                        filter: 'isFile'
                    }
                ],
            },
        },
        // Re-run these automated tasks each time certain files are modified.
        // These tasks are meant for development and include linting.
        watch: {
            sass: {
                files: [
                    './lint/scss-lint.yml',
                    './src/css/**/*.scss'
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
                    './src/js/scripts/*.js',
                    './src/js/scripts/**/*.js'
                ],
                tasks: [
                    'eslint',
                    'concat'
                ]
            },
            html: {
                files: [
                    'src/index.html'
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
        'cssmin',
        'copy'
    ]);

    // Tasks dedicated to wercker build and deployment process.
    // todo: replace that one linting task eslint with automated unit tests that can fail.
    grunt.registerTask('wercker', [
        'eslint',
        'htmlangular'
    ]);
};
