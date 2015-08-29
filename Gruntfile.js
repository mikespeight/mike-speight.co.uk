/**
 * Created by Mike on 25/05/2014.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'scripts/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        cmq: {
            options: {
                log: false
            },
            your_target: {
                files: {
                    'tmp': ['test/*.css']
                }
            },
            dynamic: {
                expand: true,
                cwd: 'test/',
                src: ['*.css'],
                dest: 'tmp/'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that combines the media queries
    grunt.loadNpmTasks('grunt-combine-media-queries');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};