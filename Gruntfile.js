// Build the front-end source to run locally.
module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({

        // Concatenate the javascript files.
        concat: {
            options: {
                separator: ";",
                banner: "/* This file is generated with Grunt and should not be edited directly. */\n"
            },
            js: {
                files: {
                    // Third party javascript dependencies used in this website.
                    "./web/js/dependencies.js" : [
                        // Libraries managed with Bower.
                        
                        // Note: update ./unit-tests/karma.conf.js when adding new non-ui dependencies.
                    ],
                    
                    // All custom scripts written for this website.
                    "./web/js/scripts.js": [
                        "./web/js/scripts/*.js"
                    ]
                }
            }
        },

        eslint: {
            options: {
                configFile: "./lint/eslint.json"    // Default rules: http://eslint.org/docs/rules/
            },
            target: [
                "./web/js/scripts/*.js",
                "./web/js/scripts/plugins/**/*.js"
            ]
        },

        sass: {
            dist: {
                options: {
                    style: "expanded",
                    lineNumbers: true,
                    "sourcemap=none": ""
                },
                files: {
                    "./web/css/default.css": "./web/css/sass/default.scss"
                }
            }
        },

        pleeease: {
            custom: {
                options: {
                    autoprefixer: {
                        "browsers": ["last 4 versions"]
                    },
                    minifier: false
                },
                files: {
                    "./web/css/default.css": "./web/css/default.css"
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
                    cwd: "./web/css",
                    src: ["*.css", "!*.min.css"],
                    dest: "./web/css",
                    ext: ".min.css"
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
                    "./web/js/scripts.min.js": ["./web/js/scripts.js"]
                }
            },
            dependencies: {
                files: {
                    "./web/js/dependencies.min.js": ["./web/js/dependencies.js"]
                }
            }
        },

        // Re-run these automated tasks each time certain files are modified.
        watch: {
            sass: {
                files: [
                    "./web/css/**/*.scss"
                ],
                tasks: [
                    "sass",
                    "pleeease"
                ]
            },
            scripts: {
                files: [
                    "./web/js/scripts/*.js",
                    "./web/js/scripts/**/*.js"
                ],
                tasks: [
                    "concat",
                    "eslint"
                ]
            },
            grunt: {
                files: [
                    "./Gruntfile.js"
                ],
                tasks: [
                    "concat",
                    "sass",
                    "pleeease"
                ]
            }
        }
        
    });

    // During development, continuous building for both css and javascript: run "grunt watch" command (see watch above).
    // Warning: this watch does not include minification.
    
    // Prior to release. One-off build for both css and javascript, including minification: run "grunt" command.
    grunt.registerTask("default", [
        "concat",
        "eslint",
        "sass",
        "pleeease",
        "cssmin",
        "uglify"
    ]);
};