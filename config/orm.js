var connection = require("./connection.js")

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, result){
            if (err) throw err;
            console.log(result)
            callback(result);
        });
    },
    insertOne: function(table, col, val, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function(err, result) {
            console.log(connection.query)
            if (err) throw err;
            callback(result);
        })
    },
    updateOne: function(table, col1, val1, col2, val2, callback) {
        console.log(col1, val1, col2, val2)
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col1, val1, col2, val2], function(err, result){
            if (err) throw err;
            callback(result);
        })
    }
};

module.exports = orm