/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

(() => {
  const concatFiles = EmberApp.prototype.concatFiles;
  EmberApp.prototype.concatFiles = function(tree, options) {
    // to patch .appTests pathes and convert
    // return this.concatFiles(appTestTrees, {
    //   inputFiles: [ this.name + '/tests/**/*.js' ],
    //   footerFiles: [ 'vendor/ember-cli/tests-suffix.js' ],
    //   outputFile: this.options.outputPaths.tests.js,
    //   annotation: 'Concat: App Tests'
    // });
    // into
    // return this.concatFiles(appTestTrees, {
    //   inputFiles: [
    //     this.name + '/tests/**/*.js',
    //     this.name + '/app/**/*test.js'
    //      ],
    //   footerFiles: [ 'vendor/ember-cli/tests-suffix.js' ],
    //   outputFile: this.options.outputPaths.tests.js,
    //   annotation: 'Concat: App Tests'
    // });
    if (options
    && Array.isArray(options.inputFiles)
    && options.length === 1
    && options.inputFiles[0] === this.name + '/tests/**/*.js') {
      options.inputFiles.push(this.name + '/app/**/*test.js');
    }
    return concatFiles.call(this, tree, options);
  };
})();

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
