(function(){
  "use strict";
  
  module.exports = function(grunt) {
    
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      // Set up paths
      meta: {
        sassPath: 'assets/sass',
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
            src: ['*.{sass,scss}', '!_*.{sass,scss}'],
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
          files: ['<%= meta.sassPath %>/**/*.{sass,scss}'],
          tasks: ['sass']
        }
      }
    });

    grunt.registerTask('default', ['watch']);

  };

})();
