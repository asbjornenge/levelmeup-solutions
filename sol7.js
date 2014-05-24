var level = require('level')
module.exports = function(db, date, callback) {
    console.error(date)
    var counter = 0;
    var error   = null;
    db.createReadStream({start:date})
        .on('data', function (data) {
            counter++;
        })
        .on('error', function(err) {
            error = err
        })
        .on('end', function() {
            callback(error, counter)
        })
}