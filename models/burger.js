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
    updateOne: function(col1, val1, col2, val2, callback) {
        orm.updateOne("burgers", col1, val1, col2, val2, function(res) {
            callback(res)
        })
    }
}

module.exports = burger;