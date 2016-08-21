var bl = require('bl')
var http = require('http')

http.get(process.argv[2], function(response){
  response.pipe(bl(function(err, data){
    strData = data.toString()
    console.log(strData.length)
    console.log(strData)
  }))
})
