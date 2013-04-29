/* global module:false */

module.exports = function(grunt) {
  grunt.initConfig({
    now: (new Date()).toISOString(),
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
          banner: grunt.file.read("src/generator/header.json"),
          separator: "\n,\n",
          footer: grunt.file.read("src/generator/footer.json")
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
