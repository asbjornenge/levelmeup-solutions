function init(db, words, callback) {

    var b = words.map(function(word) {
        return {
            type  : 'put',
            key   : word.length+word,
            value : word
        }
    })
    db.batch(b, function(err) {
        if (!err) callback()
    })

}

function query(db, word, callback) {
    var words = []
    var error = null
    var start = word.indexOf('*') > 0 ? word.slice(0,word.indexOf('*'))     : word
    var end   = word.indexOf('*') > 0 ? word.slice(0,word.indexOf('*'))+'~' : word+'~'
    start = word.length+start
    end   = word.length+end
    // console.error(start, end)
    db.createReadStream({start:start, end:end})
        .on('data', function (data) {
            words.push(data.value)
        })
        .on('error', function(err) {
            error = err
        })
        .on('end', function() {
            callback(error, words)
        })
}

module.exports.init  = init
module.exports.query = query