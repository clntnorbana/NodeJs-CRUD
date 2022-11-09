require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const testRoutes = require("./routes/testRoutes");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(res.path, req.method);
  next();
});

// routes
app.use("/api/test", testRoutes);

// connect  to mongodb
mongoose
  .connect(process.env.URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
