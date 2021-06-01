const Tour = require("../models/Tour");

const getAllTours = (req, res, next) => {
  Tour.getAll((err, results) => {
    if (err) {
      res.status(500).send("Tour not found");
    } else {
      res.json(results);
    }
  });
};

module.exports = { getAllTours };
