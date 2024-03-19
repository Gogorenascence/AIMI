const sass = require('node-sass');

module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // pass in options to plugins, references to files etc.
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      build: {
        src: 'src/scss/styles.scss',
        dest: 'dist/css/styles.css'
      },
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/script.js': ['src/js/script.js'],
        },
      },
    },
    watch: {
      scripts: {
        files: ['src/scss/*.scss', 'src/js/*.js'],
        tasks: ['default']
      },
    },

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register tasks
  grunt.registerTask('default', ['sass', 'uglify']);
};
