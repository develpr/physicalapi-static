module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss', 'bower_components/foundation-icon-fonts']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
	
	concat: {   
	    dist: {
	        src: [
	            'bower_components/foundation/js/vendor/modernizr.js',
				'bower_components/angular/angular.js',
				'bower_components/angular-route/angular-route.min.js',
				'bower_components/jquery/jquery.js',
				'bower_components/lodash/dist/lodash.underscore.min.js',
				'bower_components/restangular/dist/restangular.min.js',
				'bower_components/angular-foundation/mm-foundation-tpls.min.js',													
				'bower_components/foundation/js/foundation.min.js',	
				'bower_components/svg.js/dist/svg.min.js',	
				'js/svg.export.min.js',	
				'js/rainbox.js',								
				'js/app.js'																		
				
	        ],
	        dest: 'js/build/app.js',
	    }
	},
	
	uglify: {
	    build: {
	        src: 'js/build/app.js',
	        dest: 'js/build/app.min.js'
	    }
	}
	
  });
  
  

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','concat','uglify','watch'])
}