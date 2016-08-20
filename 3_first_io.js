var fs = require('fs')

fileBuff = fs.readFileSync(process.argv[2])
fileArr = fileBuff.toString().split('\n')

console.log(fileArr.length-1)
