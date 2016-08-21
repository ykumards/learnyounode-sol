var http = require('http')

var url = process.argv[2]

var get = http.get(url, function(res){
  res.setEncoding('utf8')
  res.on("data", function(data){
    console.log(data)
  })
})

get.on('error', function(e){
  console.log('Error', e.message)
})

// Official solution is much clearer
/*
var http = require('http')

http.get(process.argv[2], function(response){
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('err', console.error)
}).on('error', console.error)
*/
