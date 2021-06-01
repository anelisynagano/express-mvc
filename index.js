const express = require("express");
const app = express();

const toursRouter = require("./routes/tours-route");

app.use("/tours", toursRouter);

app.listen(5000, () => console.log("Server running on port 5000"));
