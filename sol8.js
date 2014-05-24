var level = require('level')

module.exports = function(db, date, callback) {
    console.error(date)
    var tweets  = [];
    var error   = null;
    var nextDay = new Date(new Date(date).getTime() + (24 * 60 * 60 * 1000))
    db.createReadStream({start:date, end:nextDay.toISOString()})
        .on('data', function (data) {
            tweets.push(data.value)
        })
        .on('error', function(err) {
            error = err
        })
        .on('end', function() {
            callback(error, tweets)
        })
}