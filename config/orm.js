var connection = require("./connection.js")

var orm = {
    selectAll: function(table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, result){
            if (err) throw err;
            console.log(result)
            return result;
        });
    },
    insertOne: function(table, col, val) {
        var queryString = "INSERT INTO ?? VALUES (?, ?)";
        connection.query(queryString, [table, col, val], function(err, result) {
            if (err) throw err;
            return result;
        })
    },
    updateOne: function(table, col1, val1, col2, val2) {
        var queryString = "INSERT INTO ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col1, val1, col2, val2], function(err, result){
            if (err) throw err;
            return result;
        })
    }
};

module.exports = orm