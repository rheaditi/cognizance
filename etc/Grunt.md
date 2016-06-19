# Grunt
Simple things to remember about using grunt in projects.

## Setting Up Vanilla Grunt 
```bash
$ npm init # get your package.json initialized
$ npm install grunt --save-dev # install local grunt
$ touch Gruntfile.js # create your Gruntfile
```

Example starting content of `Gruntfile.js`:
```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```

## Static Server using Grunt
Simple static server that'll serve the `public` folder on `localhost:8008`.
Using `keepalive` means no other tasks can be run after this until this task is finished.

```node
module.exports = function(grunt) {
  grunt.initConfig({
    connect: { server: { options: {
          port: 8008,
          hostname: 'localhost',
          open: true,
          base: 'public',
          keepalive: true,
          debug: true
        }
      } }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('serve', 'Serve the public folder statically.', ['connect:server']);
  grunt.registerTask('server', 'Alias for serve. ', ['serve']);
  grunt.registerTask('default', ['connect:server']);
};
```
