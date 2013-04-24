/* global module:false */

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      }
    },
    concat: {
      services: {
        src: ["services/*.json", "!services/index.json"],
        dest: "services/index.json",
        options: {
          banner: "[",
          separator: ",\n",
          footer: "]"
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'nodeunit']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
