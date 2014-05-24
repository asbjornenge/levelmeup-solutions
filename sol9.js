var level = require('level')
var db    = level(process.argv[2], { valueEncoding: 'json' })
var data  = require(process.argv[3])
var barry = []

data.forEach(function(row) {
    var key = row.type === 'user' ? row.name : row.user+'!'+row.name
    barry.push({
        type   : 'put',
        key    : key,
        value  : row
    })
})
db.batch(barry, function(err) {
    if (err) console.error(err)
})
