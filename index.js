var through = require('through2')
var omit = require('lodash.omit')
var gutil = require('gulp-util')

var PluginError = gutil.PluginError

// 常量
var PLUGIN_NAME = 'gulp-json-omit'

function prefixStream(text) {
  var stream = through();
  stream.write(text);
  return stream
}


module.exports = function (omitKey) {

  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      this.push(file)
      return cb()
    }

    var jsonContent = JSON.parse(file.contents)
    jsonContent = omit(jsonContent, omitKey)

    if (file.isBuffer()) {
      var buffer = new Buffer(JSON.stringify(jsonContent), 'utf-8')
      file.contents = Buffer.concat([buffer])
    }

    if (file.isStream()) {
      file.contents = file.contents.pipe(prefixStream(jsonContent))
    }


    this.push(file)
    cb()
  })
}