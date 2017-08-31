module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    distdir: './dist',
    copy: {
      bower: {
        files: [
          { 
            expand: true, 
            cwd: './', 
            src: [
              'bower_components/bootstrap/dist/js/bootstrap.min.js', 
              'bower_components/bootstrap/dist/css/bootstrap.min.css',
              'bower_components/jquery/dist/jquery.min.js'
            ], 
            dest: 'dist'
          }
        ]
      },
      common: {
        files: [
          { 
            expand: true, 
            cwd: './', 
            src: [
              '*.html',
              '_locales/**',
              'images/**',
              'css/**', 
              'js/*.js',
              '!js/ms'
            ], 
            dest: 'dist'
          }
        ]
      },
      msedge: {
        files: [
          { 
            expand: true, 
            cwd: './', 
            src: [
              'js/ms/**'
            ], 
            dest: 'dist'
          }
        ]
      }      
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask('create-dist-dir', 'Creates the dist directory', function () {
    grunt.file.delete(grunt.config('distdir'));
    grunt.file.mkdir(grunt.config('distdir'));
  });
  grunt.registerTask('write-manifest', 'Writes the manifest file to dist', function (browser) {
    var manifest = grunt.file.readJSON('manifest.json');
    manifest.version = grunt.config('pkg.version');
    if (grunt.option('identifier')) {
      manifest.applications = { 'gecko': { 'id': grunt.option('identifier') } };
    }
    if (browser !== 'msedge') {
      delete(manifest['-ms-preload']);
    }
    grunt.file.write(grunt.config('distdir') + '/manifest.json', JSON.stringify(manifest, null, 2));
  });
  grunt.registerTask(
    'dist-common', 
    'Create distribution for Web Extension browsers', 
    ['create-dist-dir', 'write-manifest:common', 'copy:bower', 'copy:common']
  );
  grunt.registerTask(
    'dist-msedge', 
    'Create distribution for Web Extension browsers', 
    ['create-dist-dir', 'write-manifest:msedge', 'copy:bower', 'copy:common', 'copy:msedge']
  );
  grunt.registerTask('default', ['dist-common']);
};