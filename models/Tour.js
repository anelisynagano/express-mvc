const connection = require("../db/config");

const Tour = {};

Tour.getAll = (callback) => {
  connection.query("SELECT * FROM tour", (err, results, fields) => {
    callback(err, results, fields);
  });
};

module.exports = Tour;
