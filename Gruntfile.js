(function(){
  "use strict";
  
  module.exports = function(grunt) {
    
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      // Set up paths
      meta: {
        sassPath: 'assets/sass',
        sassExt: '.sass', // .sass or .scss
        deployPath: 'assets/css'
      },

      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: [{
            expand: true,
            cwd: '<%= meta.sassPath %>',
            src: ['*<%= meta.sassExt %>', '!_*<%= meta.sassExt %>'],
            dest: '<%= meta.deployPath %>/',
            ext: '.css'
          }]
        }
      },

      watch: {
        options: {
          livereload: true
        },
        sass: {
          files: ['<%= meta.sassPath %>/**/*<%= meta.sassExt %>'],
          tasks: ['sass']
        }
      }
    });

    grunt.registerTask('default', ['watch']);

  };

})();
