// Starting point

const express = require("express");
const app = express();
const users = require("./routes/users");
const port = 3001 || process.env.PORT;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
// connect with mongodb
mongoose
  .connect(process.env.MONGODB_LOGIN_URI)
  .then(() => console.log("Connected to mongodb successfully"))
  .catch((err) => console.log(`Found following error while connecting to database: ${err}`));

app.use("/user", users);

app.listen(port, () => console.log(`Server is started on port ${port}`));
app.listen();
