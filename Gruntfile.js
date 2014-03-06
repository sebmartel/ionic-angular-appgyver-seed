/*
 * Default Gruntfile for AppGyver Steroids
 * http://www.appgyver.com
 *
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-steroids");

  /* compile sass */
  grunt.initConfig({
  	watch: {
  		sass: {
  			files: ['www/sccs/{,**/}*.{scss,sass}'],
  			tasks: ['sass']
  		}
  	},
  	sass: {
  		dist: {
  			files: {
  				'dist/css/app.css' : 'www/scss/app.scss'
  			}
  		}

  	}
  });


  grunt.registerTask("default", ["steroids-make", "sass"]);

};
