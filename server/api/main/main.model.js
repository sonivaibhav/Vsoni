
/*
 'use strict';

 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

 var ThingSchema = new Schema({
 name: String,
 info: String,
 active: Boolean
 });

 module.exports = mongoose.model('Thing', ThingSchema);

 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MainSchema = new Schema({
    MainIntro: String,
    TechName: Array,
    JobTitle: String,
    saved_on: Date
});

var MainData = module.exports = mongoose.model('MainData', MainSchema);

var Main = new MainData({
    MainIntro: "I’m a front end developer from New Jersey who focuses on writing clean, elegant and efficient code. I have a passion for pixel perfect, minimal and easy to use interfaces. Love .",
    TechName: ["HTML5","CSS3","AngularJS","Bootstrap"],
    JobTitle: "WEB DESIGNER and FRONT-END DEVELOPER",
    saved_on: new Date
});

Main.save(function (err, data) {
    if (err) console.log(err);
    else console.log('Saved ', data );
});
