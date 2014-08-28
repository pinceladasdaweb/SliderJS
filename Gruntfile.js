module.exports = function (grunt) {
    pkg: grunt.file.readJSON('package.json'),
    grunt.initConfig({
        uglify: {
            options: {
                preserveComments: 'all'
            },
            src: {
                files: {
                    'assets/js/slider.min.js': ['assets/js/slider.js']
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'uglify' ]);
};
