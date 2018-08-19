var orm = require("../config/orm.js");


//code that will call the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(val, callback) {
        orm.insertOne("burgers", "burger_name", val, function(res) {
            callback(res);
        });
    },
    updateOne: function(colVal, condition, callback) {
        orm.updateOne("burgers", colVal, condition, function(res) {
            callback(res);
        })
    }
}

module.exports = burger;