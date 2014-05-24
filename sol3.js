var level = require('level')
var db = level(process.argv[2])

for (var i = 0; i < 100; i++) {
    (function(index) {
        db.get('key'+index, function (err, value) {
            if (err) return
            console.log('key%s=%s',index,value)
        })
    })(i)
}