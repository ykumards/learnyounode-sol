var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var file = process.argv[3]

var server = http.createServer(function(request, response){
  var fileStr = fs.createReadStream(file)
  fileStr.on('open', function(){
    fileStr.pipe(response)
  })
  fileStr.on('error', function(err){
    response.end(err)
  })
})
server.listen(port)

// Official solutions is
/*
var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'})
  fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(process.argv[2])
*/
