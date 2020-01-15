var connection = require("./connection");

var orm = {
    selectAll: function(whatToSelect, tableInput){
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString,[whatToSelect, tableInput], function(error, result) {
            if (error) throw error;
            console.log(result);
        } );
    },

    insertOne: function(){
        var queryString = "INSERT INTO ?? "
    },
}


module.exports = orm;
