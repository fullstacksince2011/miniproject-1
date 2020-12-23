/* * ************************************************************ 
 * Date: 23-Dec-2020
 * programmer: Shani Mahadeva <satyashani@gmail.com>
 * Javascript file project.js
 * *************************************************************** */

var fs = require("fs");
var path = require("path");

var file = path.resolve("./data/project.json");

module.exports = {
    get : function(cb){
        fs.readFile(file,{ encoding : "utf8" }, function(err,data){
            cb(err, JSON.parse(data));
        });
    },
    save : function(data,cb){
        fs.writeFile(file,JSON.stringify(data),cb);
    }
};