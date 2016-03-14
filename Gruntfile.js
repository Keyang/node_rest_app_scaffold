module.exports = function(grunt) {

  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'application.js',
        ignore: ['node_modules/**']
      }
    }
  });
  require('load-grunt-tasks')(grunt);
  grunt.registerTask("serve",["nodemon"]);
}
