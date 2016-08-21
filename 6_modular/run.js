var foo = require('./fooModule')

var dir = process.argv[2]
var ext = process.argv[3]

foo(dir, ext, function(err, data) {
  if (err)
    console.error("Error", err)
  data.forEach(function(fileName){
    console.log(fileName)
  })
})
