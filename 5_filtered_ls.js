var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var ext = process.argv[3]

fs.readdir(dir, function(err, data) {
  if (err) return console.error(err)
  data.forEach(function (fileName) {
    if (path.extname(fileName) === ("." + ext)) {
      console.log(fileName)
    }
  })
})
// Can also try using a filter
function predicate(fileName) {
  return path.extname(fileName) === ("." + ext)
}
