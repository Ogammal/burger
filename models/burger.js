var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res)
        })
    },
    insertOne: function(col, val, callback) {
        orm.insertOne("burgers", col, val, function(res) {
            callback(res)
        })
    },
    updateOne: function(burgerId, callback) {
        orm.updateOne("burgers", "devoured", true, "burgers.id", burgerId, function(res) {
            callback(res)
        })
    }
}

module.exports = burger;