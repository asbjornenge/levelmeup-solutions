var level = require('level')
var fs    = require('fs')
var db    = level(process.argv[2])
var data  = fs.readFileSync(process.argv[3], {encoding : 'utf-8'})
var barry = []
data.split('\n').forEach(function(data) {
    var lines = data.split(',')
    var ret   = {
        type  : lines[0],
        key   : lines[1],
        value : lines[2]
    }
    barry.push(ret)
})
db.batch(barry, function(err) {
    if (err) console.error(err)
})