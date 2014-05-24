var level     = require('level')
var sub       = require('level-sublevel')
var db        = sub(level(process.argv[2]))

var dinosaurs = db.sublevel('dinosaurs')
var robots    = db.sublevel('robots')

dinosaurs.put('slogan','rawr')
robots.put('slogan','beep boop')