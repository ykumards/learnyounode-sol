var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, data) {
    if (err) {
      callback(err, null)
    }
    else {
      function predicate(fileName) {
        return path.extname(fileName) === ("." + ext)
      }
      callback(null, data.filter(predicate))
    }
  })
}
